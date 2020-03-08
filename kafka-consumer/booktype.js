const avsc = require('avsc');

const blogSchema = {
    name: 'SaleType',
    type: 'record',
    fields: [
        {
            name: 'id',
            type: 'numeric'
        },
        {
            name: 'subject',
            type: 'text'
        }
    ]
};

const type = avsc.parse(blogSchema)

module.exports = type;