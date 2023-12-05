const jwt = require("jsonwebtoken");
const { sqlForPartialUpdate } = require("./sql");
// const { SECRET_KEY } = require("../config");/

describe("sqlForPartialUpdate", function () {
    test("works", function () {
        const dataToUpdate = { "firstName": "testfirstName", "lastName":"testlastName", "password":"12345", "email":"test@test.com", "isAdmin":"false" }
        const jsToSql = {firstName: "first_name",lastName: "last_name",isAdmin: "is_admin",}
        
        const { setCols, values } = sqlForPartialUpdate(dataToUpdate, jsToSql);
        console.log( setCols, values )
        console.log(typeof(setCols), typeof(values))
        //const payload = jwt.verify(token, SECRET_KEY);
        expect({ setCols, values }).toEqual(
            { "setCols": "\"first_name\"=$1, \"last_name\"=$2, \"password\"=$3, \"email\"=$4, \"is_admin\"=$5", "values": ["testfirstName", "testlastName", "12345", "test@test.com", "false"] }
        );
    });

    
});
