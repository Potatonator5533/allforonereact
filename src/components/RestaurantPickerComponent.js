import React from 'react'
import '../styles/style.css';
import { Link } from 'react-router-dom';
import { Navbar } from 'flowbite-react';
import { useState } from 'react';
import { PickRestaurant } from './ApiCalls.js';
import { Dropdown } from 'flowbite-react';

export default function RestaurantPickerComponent() {
    const [pickRestaurantInput, PickRestaurantInput] = useState('');
    const [result, setResult] = useState('');

    const PR = async () => {
        const response = await PickRestaurant(pickRestaurantInput);
        setResult(response);
    }

    return (
        <div>
            <div className='flex justify-center customBg'>
                <Navbar fluid rounded className='customBg w-4/5 navbarHeight'>
                    <Navbar.Brand >
                        <a className="flex items-center space-x-3 rtl:space-x-reverse">
                            <span className="self-center font50 text-wrap font-semibold whitespace-nowrap dark:text-white">Restaurant Picker</span>
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Dropdown label="Other Pages" className='w-11/12 font-bold' dismissOnClick={false}>
                        <Dropdown.Item as={Link} to='/' className='block py-5 px-3 text-gray-900 rounded bg-white hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white font30 text-wrap'>Home Page</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/SayHello' className="block py-5 px-3 text-gray-900 rounded bg-white hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white font30 text-wrap">Say Hello</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/Adding' className="block py-5 px-3 text-gray-900 rounded bg-white hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white font30 text-wrap">Adding</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/AskingQuestions' className="block py-5 px-3 text-gray-900 rounded bg-white hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white font30 text-wrap">Asking Questions</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/GreaterOrLess' className="block py-5 px-3 text-gray-900 rounded bg-white hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white font30 text-wrap">Greater or Less</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/Madlib' className="block py-5 px-3 text-gray-900 rounded bg-white hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white font30 text-wrap">Madlib</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/OddOrEven' className="block py-5 px-3 text-gray-900 rounded bg-white hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white font30 text-wrap">Odd or even</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/ReverseIt(alphaNumeric)' className="block py-5 px-3 text-gray-900 rounded bg-white hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white font30 text-wrap">Reverse It (alphaNumeric)</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/ReverseIt(numbersOnly)' className="block py-5 px-3 text-gray-900 rounded bg-white hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white font30 text-wrap">Reverse It (numbersOnly)</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/Magic8Ball' className="block py-5 px-3 text-gray-900 rounded bg-white hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white font30 text-wrap">Magic 8 Ball</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/RestaurantPicker' className='block py-5 px-3 text-white hover:text-gray-900 bg-blue-700 rounded dark:bg-blue-600 font30 text-wrap'>Restaurant Picker</Dropdown.Item>
                    </Dropdown>
                </Navbar>
            </div>
            <div class="flex justify-center mt-12">
                <div class="grid grid-cols-1 gap-8 w-4/5 font30">
                    <div class="flex justify-center px-5 py-2.5 m-2">Make a restaurant choice and the computer will respond back with a restaurant that fits your category. Choose either Fast Food, Casual Dining, or Food Truck.</div>
                    <div class="flex justify-center px-5 py-2.5 m-2"><input type="text" placeholder="Enter Category Here" class="rounded-md" onChange={e => PickRestaurantInput(e.target.value)} /></div>
                    <div class="flex justify-center"><button type="button" class="customBg hover:bg-gray-400 font-medium rounded-lg px-5 m-2" onClick={() => PR()}>Submit</button></div>
                    <div class="flex justify-center px-5 py-2.5 m-2">{result}</div>
                </div>
            </div>
        </div>
    )
}