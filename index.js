const Slack = require('node-slack'),
    slack = new Slack(process.env.SLACK_WEBHOOK_URL),
    stdin = process.stdin;

// If called without pipe
if (stdin.isTTY) {
    slack.send({ text: '👍' });
} else {
    let text = '';
    // All credit goes to George Ornbo for this find:
    // https://shapeshed.com/command-line-utilities-with-nodejs/#piping-data
    stdin.resume().setEncoding('utf8');
    stdin.on('data', data => text += data);
    stdin.on('end', () => slack.send({ text }));
}
