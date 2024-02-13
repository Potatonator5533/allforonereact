import React from 'react'
import '../styles/style.css';
import { Link } from 'react-router-dom';
import { Navbar } from 'flowbite-react';
import { useState } from 'react';
import { Story } from './ApiCalls.js';
import { Dropdown } from 'flowbite-react';

export default function MadlibComponent() {
    const [i1, I1] = useState('');
    const [i2, I2] = useState('');
    const [i3, I3] = useState('');
    const [i4, I4] = useState('');
    const [i5, I5] = useState('');
    const [i6, I6] = useState('');
    const [i7, I7] = useState('');
    const [i8, I8] = useState('');
    const [i9, I9] = useState('');
    const [i10, I10] = useState('');
    const [result, setResult] = useState('');

    const M = async () => {
        const response = await Story(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10);
        setResult(response);
    }

    return (
        <div>
            <div className='flex justify-center customBg'>
                <Navbar fluid rounded className='customBg w-4/5 navbarHeight'>
                    <Navbar.Brand >
                        <a className="flex items-center space-x-3 rtl:space-x-reverse">
                            <span className="self-center font50 text-wrap font-semibold whitespace-nowrap dark:text-white">Madlib</span>
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Dropdown label="Other Pages" className='w-11/12 font-bold' dismissOnClick={false}>
                        <Dropdown.Item as={Link} to='/' className='block py-5 px-3 text-gray-900 rounded bg-white hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white font30 text-wrap'>Home Page</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/SayHello' className="block py-5 px-3 text-gray-900 rounded bg-white hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white font30 text-wrap">Say Hello</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/Adding' className="block py-5 px-3 text-gray-900 rounded bg-white hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white font30 text-wrap">Adding</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/AskingQuestions' className="block py-5 px-3 text-gray-900 rounded bg-white hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white font30 text-wrap">Asking Questions</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/GreaterOrLess' className="block py-5 px-3 text-gray-900 rounded bg-white hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white font30 text-wrap">Greater or Less</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/Madlib' className='block py-5 px-3 text-white hover:text-gray-900 bg-blue-700 rounded dark:bg-blue-600 font30 text-wrap'>Madlib</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/OddOrEven' className="block py-5 px-3 text-gray-900 rounded bg-white hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white font30 text-wrap">Odd or even</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/ReverseIt(alphaNumeric)' className="block py-5 px-3 text-gray-900 rounded bg-white hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white font30 text-wrap">Reverse It (alphaNumeric)</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/ReverseIt(numbersOnly)' className="block py-5 px-3 text-gray-900 rounded bg-white hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white font30 text-wrap">Reverse It (numbersOnly)</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/Magic8Ball' className="block py-5 px-3 text-gray-900 rounded bg-white hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white font30 text-wrap">Magic 8 Ball</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/RestaurantPicker' className="block py-5 px-3 text-gray-900 rounded bg-white hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white font30 text-wrap">Restaurant Picker</Dropdown.Item>
                    </Dropdown>
                </Navbar>
            </div>
            <div class="flex justify-center mt-12">
                <div class="grid md:grid-cols-2 gap-8 w-4/5 font30">
                    <div class="flex justify-center px-5 py-2.5 m-2 md:col-span-2">Give the computer ten placeholders and it will respond back with a story using your inputs.</div>
                    <div class="flex justify-center px-5 py-2.5 m-2"><input type="text" placeholder="Enter Day Here" class="rounded-md" onChange={e => I1(e.target.value)} /></div>
                    <div class="flex justify-center px-5 py-2.5 m-2"><input type="text" placeholder="Enter Name Here" class="rounded-md" onChange={e => I2(e.target.value)} /></div>
                    <div class="flex justify-center px-5 py-2.5 m-2"><input type="text" placeholder="Enter Mood Here" class="rounded-md" onChange={e => I3(e.target.value)} /></div>
                    <div class="flex justify-center px-5 py-2.5 m-2"><input type="text" placeholder="Enter Activity Here" class="rounded-md" onChange={e => I4(e.target.value)} /></div>
                    <div class="flex justify-center px-5 py-2.5 m-2"><input type="text" placeholder="Enter Structure Here" class="rounded-md" onChange={e => I5(e.target.value)} /></div>
                    <div class="flex justify-center px-5 py-2.5 m-2"><input type="text" placeholder="Enter Sound Here" class="rounded-md" onChange={e => I6(e.target.value)} /></div>
                    <div class="flex justify-center px-5 py-2.5 m-2"><input type="text" placeholder="Enter Feeling Here" class="rounded-md" onChange={e => I7(e.target.value)} /></div>
                    <div class="flex justify-center px-5 py-2.5 m-2"><input type="text" placeholder="Enter Second Name Here" class="rounded-md" onChange={e => I8(e.target.value)} /></div>
                    <div class="flex justify-center px-5 py-2.5 m-2"><input type="text" placeholder="Enter Item Here" class="rounded-md" onChange={e => I9(e.target.value)} /></div>
                    <div class="flex justify-center px-5 py-2.5 m-2"><input type="text" placeholder="Enter Second Feeling Here" class="rounded-md" onChange={e => I10(e.target.value)} /></div>
                    <div class="flex justify-center md:col-span-2"><button type="button" class="customBg hover:bg-gray-400 font-medium rounded-lg px-5 m-2" onClick={() => M()}>Submit</button></div>
                    <div class="flex justify-center px-5 py-2.5 m-2 md:col-span-2">{result}</div>
                </div>
            </div>
        </div>
    )
}