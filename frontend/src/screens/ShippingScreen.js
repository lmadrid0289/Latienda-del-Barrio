import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useDispatch , useSelector} from 'react-redux'
import FormContainer from '../components/FormContainer'

const ShippingScreen = ({history}) => {
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostaCode] = useState('')
    const [country, setCountry] = useState('')
    return <FormContainer>
        
    </FormContainer>
}

export default ShippingScreen
