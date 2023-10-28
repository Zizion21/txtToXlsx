const xlsx = require("xlsx");
const fs = require("fs");

function convertTxtToExcel(req, res) {
  const txtFilePath = req.file.path;
  try {
    const [fileOriginalName] = req.file.originalname.split(".txt");
    const excelFilePath = `${fileOriginalName}.xlsx`;
    const txtFileContent = fs.readFileSync(txtFilePath, "utf-8");
    const apiData = JSON.parse(txtFileContent);
    const firstObject = apiData[0];
    const keys = Object.keys(firstObject);
    const worksheet = xlsx.utils.json_to_sheet(apiData, { header: keys });
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    xlsx.writeFile(workbook, excelFilePath);
    res.download(excelFilePath, fileOriginalName, () => {
      fs.unlinkSync(txtFilePath);
      fs.unlinkSync(excelFilePath);
    });
    console.log(`${fileOriginalName}.xlsx created successfully✔️`);
  } catch (error) {
    console.log("An error occurred in convertTxtToExcel function❗", error);
    fs.unlinkSync(txtFilePath);
    res.json({
      statusCode: 400,
      message: "Not a JSON format❗ check the API in https://jsonlint.com/",
    });
  }
}

module.exports = convertTxtToExcel;
