# slack-me
[Slack](https://slack.com/) notification for completion of long-running commands.

# Usage
This module breaks apart your tediously long-running tasks into 3 simple steps:
 - Issue long running command and then `slack-me`
 - Walk away from the keyboard & live your life
 - Get notified when your command is complete
## Linux
```
# Recieve a simple 👍 when command completes
sleep 10; slack-me

# Pipe the output of the command to a slack message
sleep 10; echo 'Done' | slack-me
```
## PowerShell
```
# Recieve a simple 👍 when command completes
sleep 10; slack-me

# Pipe the output of the command to a slack message
sleep 10; echo 'Done' | slack-me

```
## Cmd.exe

```
# Recieve a simple 👍 when command completes
sleep 10 & slack-me

# Pipe the output of the command to a slack message
sleep 10 & echo 'Done' | slack-me

```
## Setup
You'll get the most out of this module when installed globally.

```
npm install -g slack-me
```

Then simply configure the [Slack webhook URL](https://api.slack.com/incoming-webhooks) to POST notifications to by setting the environmental variable `SLACK_WEBHOOK_URL`.

# Suggestions for Newfound Time
This package allows you to simply issue some long running command and walk away. You'll be notified via Slack that you're a hero at a later time. The hard part is deciding what to do with all that extra time on your hands. So here's some suggestions to get you started:
 - Stretch/exercise
 - Drink a cup of water
 - Pray/meditate
 - Tell the people you love that they mean the world to you
