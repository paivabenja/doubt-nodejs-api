FROM node
RUN mkdir -p /home/app

COPY . /home/app

EXPOSE 8000

CMD ["node", "/home/app/build/index.js"]
