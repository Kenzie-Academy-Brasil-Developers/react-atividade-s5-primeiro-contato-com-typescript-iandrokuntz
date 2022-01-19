interface CardProps {
    name: string;
    age: string;
    hobby: string;
  }

  export const Card = ({ name, age, hobby }: CardProps) => {

        return(
            <div>
                <h3>Hello, {name}!</h3>
                <h5>You have {age} years old and this is your hobby: {hobby}</h5>
            </div>

        )
  }

  export default Card