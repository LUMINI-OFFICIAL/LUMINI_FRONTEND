FROM node:16.20.2

COPY . /app
WORKDIR /app

RUN npx expo install react-native-web react-dom @expo/metro-runtime
RUN npm install

CMD [ "npm", "run", "web" ]