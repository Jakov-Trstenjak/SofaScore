import React from 'react'
import DisplayDog from './DisplayDog'

class Dog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dogs: {},
    }
  }

  async getDog(input) {
    const response = await fetch('https://dog.ceo/api/breed/' + input + '/images/random')

    const data = await response.json()

    let imageUrl = ''

    if (data.status === 'success') {
      imageUrl = data.message
    }

    this.setState({ dogs: { ...this.state.dogs, [input]: imageUrl } })
  }

  componentDidMount() {
    this.getDog(this.props.dog)
  }

  componentDidUpdate(props) {
    if (props.dog !== this.props.dog) {
      this.getDog(this.props.dog)
    }
  }

  render() {
    const dogImg = this.state.dogs[this.props.dog]

    return (
      <div>
        <DisplayDog image={dogImg} title={this.props.dog} />
      </div>
    )
  }
}

export default Dog
