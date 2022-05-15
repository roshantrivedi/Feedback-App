import PropTypes from 'prop-types'

function Header(props) {
    const headerStyle = {
        backgroundColor : 'white', 
        color : 'orange',
        textAlign : 'center',
        padding : '10px',
        margin : '10px'
    }

  return (
    <div style = {headerStyle}>
        Feedback App: Made Using React
        <p>
            {props.text}
        </p>
    </div>
  )
}

Header.propTypes = {
    text : PropTypes.string,
}

Header.defaultProps = {
    text : 'Have a nice day.',
}

export default Header