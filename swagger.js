/**
 * @swagger
 *  components:
 *      schemas:
 *          UploadTxtFile:
 *              type: object
 *              properties:
 *                  file:
 *                      type: string
 *                      format: binary
 */

/**
 * @swagger
 * /upload:
 *  post:
 *      summary: upload a .txt file
 *      requestBody:
 *          content:
 *              multipart/form-data:
 *                  schema:
 *                      $ref: "#/components/schemas/UploadTxtFile"
 *      responses:
 *          200:
 *              description: success
 */
