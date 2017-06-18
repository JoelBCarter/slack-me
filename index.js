const Slack = require('node-slack'),
    slack = new Slack(process.env.SLACK_WEBHOOK_URL);

slack.send({ text: '👍' });
