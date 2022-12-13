import { useProductsContext } from 'contexts/products';
import React from 'react';
import { NavbarQueryListStyle } from './styles';
import { useNavigate } from 'react-router-dom';

export default function NavbarQueryList(props) {
    const [navbarCoordinates, setNavbarCoordinates] = React.useState({})
    const { setSearchQuery } = useProductsContext()
    const navigate = useNavigate()

    const handleNavigate = (id) => {
        navigate(`/product/${id}`)
        setSearchQuery('')
    }

    React.useEffect(() => {
        function getCoordinates() {
            setNavbarCoordinates(document.querySelector('#searchbar').getBoundingClientRect())
        }

        const intervalId = setInterval(() => {
            getCoordinates()
        }, 1000 * 2)
        return () => clearInterval(intervalId)
    }, [])

    return (
        <NavbarQueryListStyle visible={props.visible} productsLenght={props.queriedProducts.length} navbarCoordinates={navbarCoordinates}>
            {props.queriedProducts.map(item => (
                <p key={item.id} onClick={() => handleNavigate(item.id)}>{item.title}</p>
            ))}
        </NavbarQueryListStyle>
    )
}