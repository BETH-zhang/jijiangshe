FROM harbor.smartstudy.com/public/node:8.9.1

ENV NODE_ENV production

ADD . /home/node/code

RUN cd /home/node/code \
    && cnpm install --production \
    && chown -R node.node /home/node/code

WORKDIR /home/node/code

EXPOSE 8888

USER node
CMD ["node", "index.js"]
