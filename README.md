# Run this app

## Server side

cd server

In the project server directory, you can run:

### `npm start`
Runs the app server in the development mode.\
npm start
Open [http://localhost:4000/igraphql](http://localhost:4000/igraphql) to play.

Operation:
query ExampleQuery($input: GetImgsInput) {
  getImgs(input: $input) {
    title
    href
    description
  }
}
Variables:
{
  "input": {"q":"earth","from":2}
}


## Client side
  cd client

In the project client directory, you can run:
### `npm start`

Runs the app server in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to play.

