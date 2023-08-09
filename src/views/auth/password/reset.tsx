import React, { useState, ChangeEvent, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import DefaultAuth from "layouts/auth/Default";
import illustration from "assets/img/auth/mozart.png";
import axios from 'axios';

function Password() {
    // Chakra color mode
    const textColor = useColorModeValue("navy.700", "white");
    const textColorSecondary = "gray.400";
    const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
    const textColorBrand = useColorModeValue("brand.500", "white");
    const brandStars = useColorModeValue("brand.500", "brand.400");
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    console.log('token', token);

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [tokenValid, setTokenValid] = useState(false);

    useEffect(() => {
        if (token) {
            // Call the API endpoint to validate the reset token
            axios.post<{ tokenValid: boolean }>('https://mozart-api-21ea5fd801a8.herokuapp.com/api/signin/validate-reset-token', { token })
                .then(response => {
                    setTokenValid(response.data.tokenValid);
                    console.log('valid token', response.data.tokenValid);
                })
                .catch(error => {
                    console.error('Error validating reset token:', error);
                });
        }
    }, [token]);

  

    const handleSubmit = () => {
       console.log('submit declancher')
        // Validate the password and confirm password inputs
        if (password !== confirmPassword) {
            alert("Passwords don't match.");
            return;
        }

        axios.post(`https://mozart-api-21ea5fd801a8.herokuapp.com/api/signin/reset-password/${token}`, { password })
            .then(response => {
                // Handle successful password reset
                console.log(response.data.message);
                alert('Password reset successfully!');
            })
            .catch(error => {
                // Handle error cases
                console.error('Error resetting password:', error);
                alert('Error resetting password! Please try again in a moment !');
            });
    };

    if (!tokenValid) {
        return <p>Invalid or expired reset token.</p>;
    }

    return (
        <DefaultAuth illustrationBackground={illustration} image={illustration}>
            <Flex
                maxW={{ base: "100%", md: "max-content" }}
                w='100%'
                mx={{ base: "auto", lg: "0px" }}
                me='auto'
                h='100%'
                alignItems='start'
                justifyContent='center'
                mb={{ base: "30px", md: "60px" }}
                px={{ base: "25px", md: "0px" }}
                mt={{ base: "40px", md: "14vh" }}
                flexDirection='column'>
                <Box me='auto'>
                    <Heading color={textColor} fontSize='36px' mb='10px'>
                        New Password
                    </Heading>
                </Box>
                <Flex
                    zIndex='2'
                    direction='column'
                    w={{ base: "100%", md: "420px" }}
                    maxW='100%'
                    background='transparent'
                    borderRadius='15px'
                    mx={{ base: "auto", lg: "unset" }}
                    me='auto'
                    mb={{ base: "20px", md: "auto" }}>


                    <FormControl>
                        <FormLabel
                            display='flex'
                            ms='4px'
                            fontSize='sm'
                            fontWeight='500'
                            color={textColor}
                            mb='8px'>
                            Password<Text color={brandStars}>*</Text>
                        </FormLabel>
                        <Input
                            isRequired={true}
                            variant='auth'
                            fontSize='sm'
                            ms={{ base: "0px", md: "0px" }}
                            type= "password"
                            placeholder='********'
                            mb='24px'
                            fontWeight='500'
                            size='lg'
                            value={password}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}

                        />
                            <FormLabel
                            display='flex'
                            ms='4px'
                            fontSize='sm'
                            fontWeight='500'
                            color={textColor}
                            mb='8px'>
                           Confirm Password<Text color={brandStars}>*</Text>
                        </FormLabel>
                        <Input
                            isRequired={true}
                            variant='auth'
                            fontSize='sm'
                            ms={{ base: "0px", md: "0px" }}
                            type= "password"
                            placeholder='********'
                            mb='24px'
                            fontWeight='500'
                            size='lg'
                            value={confirmPassword}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}

                        />

                        <Button
                            fontSize='sm'
                            variant='brand'
                            fontWeight='500'
                            w='100%'
                            h='50'
                            mb='24px'
                            onClick={handleSubmit}
                        >
                            Reset
                        </Button>
                    </FormControl>
                    <Flex
                        flexDirection='column'
                        justifyContent='center'
                        alignItems='start'
                        maxW='100%'
                        mt='0px'>
                        <Text color={textColorDetails} fontWeight='400' fontSize='14px'>
                            Go back to Sign in ?
                            <NavLink to='/auth/sign-in'>
                                <Text
                                    color={textColorBrand}
                                    as='span'
                                    ms='5px'
                                    fontWeight='500'>
                                    Signin
                                </Text>
                            </NavLink>
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </DefaultAuth>
    );
}

export default Password;
