
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

################################################################################
ARG NODE_VERSION=18.16.1

FROM node:${NODE_VERSION}

# ENV NODE_ENV production

WORKDIR /usr/src/app

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 5173

CMD yarn dev
# CMD yarn build && \
#     cd dist && \
#     npx vite --host   