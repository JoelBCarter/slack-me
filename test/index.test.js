const { expect } = require('chai'),
    path = require('path'),
    proxyquire = require('proxyquire'),
    sinon = require('sinon'),
    sut = path.join(__dirname, '..', 'index.js');

describe('slack-me', function () {
    let stub;
    beforeEach(() => {
        stub = sinon.stub();
    });
    describe('should post', function () {
        it('to the URL specified by the ENV VAR', () => {
            proxyquire(sut, { 'node-slack': stub });
            expect(stub.args.toString()).to.be.eq(process.env.SLACK_WEBHOOK_URL);
        });
        it('a 👍 when called with no args', () => {
            proxyquire(sut, {
                'node-slack': function (url) {
                    return { 'send': stub };
                }
            });
            expect(stub.args[0][0]).to.be.eql({ text: '👍' });
        });
        it('the piped text when cmd line output is piped to it', () => {
            const pipedText = [
                'Testing',
                'multiline',
                'piped text',
            ];
            const stdin = require('mock-stdin').stdin();
            proxyquire(sut, {
                'node-slack': function (url) {
                    return { 'send': stub };
                }
            });
            stdin.send(pipedText);
            stdin.send(null); // trigger EOF & dispatch an 'end' event.
            expect(stub.args[0][0].text).to.be.eql(pipedText.join('\n'));
        });
    });
});
