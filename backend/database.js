const data = require('./connection');
const jwt = require('jsonwebtoken');

module.exports = {
    getData: function (query) {
        return new Promise(async function (resolve, reject) {
            let connection;

            try {
                connection = await data.connect1('QLTT', 'abcd1234');

                let result = await connection.execute(query);

                resolve(result.rows);
            } catch (error) {
                reject(error);
            } finally {
                if (connection) {
                    try {
                        await connection.release();
                    } catch (error) {
                        console.log(error);
                    }
                }
            }
        });
    },

    getCheckData: async function (query) {
        try {
            let result = await this.getData(query);
            result = jwt.sign({ result }, 'abcd1234', { algorithm: 'HS256', expiresIn: '3h' });

            return result;
        } catch (error) {
            return 0;
        }
    },

    verifyData: function (myData) {
        try {
            let result = jwt.verify(myData, 'abcd1234', function (err, decoded) {
                if (err) {
                    return 0;
                }
                else {
                    return decoded;
                }
            });
            return result;
        } catch (error) {
            return 0;
        }
    },

    getNumData: function (myData, number, page) {
        try {
            if (number <= 0) {
                return [];
            }
            else {
                let start = number * (page - 1);
                let end = number * page;
                return myData.slice(start, end);
            }
        } catch (error) {

        }
    }
};