import React, { useState } from 'react';
import { Box, Button, Input, Select, Text } from '@chakra-ui/react';
import { Flex, Icon, Image, Link, InputGroup, InputLeftElement } from '@chakra-ui/react';
import axios from 'axios';
interface CurrencySymbols {
    [key: string]: string;
  }
  
  const currencySymbols: CurrencySymbols = {
    USD: '$',
    EUR: '€',
    JPY: '¥',
    COP: 'COP', 
    TND:'TND',
  };
const ConversionComponent: React.FC = () => {
    const [amount, setAmount] = useState<number>(0);
    const [targetCurrency, setTargetCurrency] = useState<string>('USD');
    const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

    const handleConvert = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/convert', { amount, targetCurrency });
            setConvertedAmount(response.data.convertedAmount);
        } catch (error) {
            console.error('Error converting:', error);
        }
    };

    return (
        <Box>
            <Text>Amount in USD:</Text>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    color='gray.300'
                    fontSize='1.2em'
                    children='$'
                />
                <Input
                    type="number"
                    placeholder='Enter amount'
                    value={amount}
                    onChange={(e) => setAmount(parseFloat(e.target.value))}
                />
            </InputGroup>
            <br></br>
            <Text>Target Currency:</Text>
            <Select value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)}>
        {Object.keys(currencySymbols).map(currencyCode => (
          <option key={currencyCode} value={currencyCode}>
            {currencyCode} - {currencySymbols[currencyCode]}
          </option>
        ))}
      </Select>
            <br></br>
            <Button
                variant='darkBrand'
                color='white'
                fontSize='sm'
                fontWeight='500'
                borderRadius='70px'
                px='24px'
                py='5px'
                onClick={handleConvert}>
                Convert
            </Button>

            {convertedAmount !== null && <Text>Converted Amount: {convertedAmount} {targetCurrency}</Text>}

           
        </Box>
    );
};

export default ConversionComponent;
