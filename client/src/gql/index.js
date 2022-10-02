import {gql} from '@apollo/client'

export const GET_IMAGES_BY_QUERY = gql`
query ($input: GetImgsInput) {
  getImgs(input: $input) {
    title
    href
    description
  }
}
`