FROM python:3.12-bullseye

######
# Install node
######
# Install curl and other necessary dependencies
RUN apt-get update && \
    apt-get install -y curl build-essential libssl-dev

# Download and install NVM
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash

# Add NVM to PATH. Adjust the version of NVM as needed.
ENV NVM_DIR /root/.nvm
ENV NODE_VERSION 22.14.0
RUN . "$NVM_DIR/nvm.sh" && \
    nvm install $NODE_VERSION && \
    nvm use $NODE_VERSION && \
    nvm alias default $NODE_VERSION

# Add node and npm to path so the commands are available
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# Verify installation
RUN node -v && npm -v