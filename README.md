Self-Hosted Habitica Fork
===============

This is a fork of Habitica which I host at home for my family.

These are the changes I will make:
1. Turn off third party services, firstly analytics and payment services.
2. Enable Group plans.
3. Work with Windows.
4. Work well for development in Visual Studio Code.

Any changes I make which might be accepted by the upstream project will be submitted for their review.

## Setting Up Habitica for Local Development

Canonical link: https://github.com/HabitRPG/habitica/wiki/Setting-Up-Habitica-for-Local-Development

Production Habitica runs on Ubuntu Linux, so these instructions are for similar environments, i.e., Debian-based Linux distros. Running Habitica on other architectures, like Windows, may require additional setup not documented here.

1. Install system packages: `sudo apt install -y curl git libkrb5-dev`
2. install libssl-1.1:
- `wget http://archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.1f-1ubuntu2_amd64.deb
- `sudo dpkg -i libssl1.1_1.1.1f-1ubuntu2_amd64.deb`
3. Install Node Version Manager: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`
4. Restart your terminal session, then `nvm install 20`
5. Clone the Habitica repository and install dependencies:
- `git clone https://github.com/HabitRPG/habitica`
- `cd habitica`
- `npm i`
- `cp config.json.example config.json`

When you're ready to start a Habitica webserver:

1. `npm run mongo:dev`
- If this command fails on your system, you may need to install [MongoDB Community Server](https://www.mongodb.com/docs/manual/administration/install-on-linux/). Then instead of `npm run mongo:dev`, use `sudo service mongod start`.
2. In a separate terminal session, `npm start`
- If the process silently halts, throws `EPIPE` errors, etc., your system may not have sufficient RAM. [Check your swap file size and increase it](https://linuxhandbook.com/increase-swap-ubuntu/) to at least 4 GB.
- You may additionally need to increase the file watchers limit: `echo fs.inotify.max_user_watches=524288 | sudo tee /etc/sysctl.d/50-max-user-watches.conf && sudo sysctl --system`
3. In a third terminal session, `npm run client:dev`
4. Visit http://localhost:8080 in your browser and get started by setting up a Habitica account on your local site!

Most code changes will result in the process automatically restarting, such that a browser refresh will show your work live. Some files in `website/common`, notably `website/common/locales`, may require you to halt and restart the Express server (the `npm start` session).

Original Documentation for Habitica ![Build Status](https://github.com/HabitRPG/habitica/workflows/Test/badge.svg)
===============

[Habitica](https://habitica.com) is an open-source habit-building program that treats your life like a role-playing game. Level up as you succeed, lose HP as you fail, and earn Gold to buy weapons and armor!

**Want to contribute code to Habitica?** We're always looking for assistance on any issues in our repo with the "Help Wanted" label. The wiki pages below and the additional linked pages will tell you how to start contributing code and where you can seek further help or ask questions:
* [Guidance for Blacksmiths](https://habitica.fandom.com/wiki/Guidance_for_Blacksmiths) - an introduction to the technologies used and how the software is organized.
* [Setting up Habitica Locally](https://github.com/HabitRPG/habitica/wiki/Setting-Up-Habitica-for-Local-Development) - how to set up a local install of Habitica for development and testing.

**Interested in contributing to Habitica’s mobile apps?** Visit the links below for our mobile repositories.
* **Android:** https://github.com/HabitRPG/habitica-android
* **iOS:** https://github.com/HabitRPG/habitica-ios

Habitica's code is licensed as described at https://github.com/HabitRPG/habitica/blob/develop/LICENSE

**Found a bug?** Please report it to [admin email](mailto:admin@habitica.com) rather than create an issue (an admin will advise you if a new issue is necessary; usually it is not).

**Creating a third-party tool?** Please review our [API Usage Guidelines](https://github.com/HabitRPG/habitica/wiki/API-Usage-Guidelines) to ensure that your tool is compliant and maintains the best experience for Habitica players.

**Have any questions about Habitica or contributing?** See the links in the [Habitica](https://habitica.com) website's Help menu. There’s FAQ’s, guides, and the option to reach out to us with any further questions!
