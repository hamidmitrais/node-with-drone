const { index, hello } = require('../routes/default.js')

describe('Test Handlers', function () {

    test('responds to /', () => {
        const req = {  }

        const res = { text: '',
            send: function(input) { this.text = input } 
        };
        index(req, res)
        
        expect(res.text).toEqual('Hello world')
    });

    test('responds to /hello/:name', () => {
        const req = { params: { name: 'Ben' }  }

        const res = { text: '',
            send: function(input) { this.text = input } 
        }
        hello(req, res)
        
        expect(res.text).toEqual('Hello Ben!')
    });

});