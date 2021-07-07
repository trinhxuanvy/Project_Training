const oracledb = require('oracledb');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

exports.connect1 = async (user, password) => {
    let connection;

    try {
        connection = await oracledb.getConnection({
            user,
            password,
            connectString: 'localhost:1521/orcl'
        });
        return connection;
    } catch (error) {
        return 0;
    }
}

exports.connect2 = async (user, password) => {
    let connection;

    try {
        connection = await oracledb.getConnection({
            user,
            password,
            privilege: oracledb.SYSDBA,
            connectString: 'localhost:1521/orcl'
        });
        return connection;
    } catch (error) {
        return 0;
    }
}