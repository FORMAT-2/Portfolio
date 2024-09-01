import React from 'react';
import {html , react, tailwind, aws, javascript,typescript, mongodb, nextjs, nodejs, postgresql, graphql} from '../assets';

const Skills = ()=>{
    const skills = [
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:tailwind,
            title:'Tailwind CSS',
            style:'shadow-blue-500'
        },        {
            id:3,
            src:javascript,
            title:'Javascript',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:typescript,
            title:'Typescript',
            style:'shadow-blue-500'
        },
        {
            id:5,
            src:react,
            title:'ReactJS',
            style:'shadow-gray-500'
        },
        {
            id:6,
            src:nextjs,
            title:'NextJS',
            style:'shadow-gray-500'
        },
        {
            id:7,
            src:nodejs,
            title:'NodeJS',
            style:'shadow-green-500'
        },
        {
            id:8,
            src:graphql,
            title:'GraphQL',
            style:'shadow-pink-500'
        },
        {
            id:9,
            src:mongodb,
            title:'MongoDB',
            style:'shadow-green-500'
        },
        {
            id:10,
            src:postgresql,
            title:'PostgreSQL',
            style:'shadow-blue-500'
        },
        {
            id:11,
            src:aws,
            title:'AWS',
            style:'shadow-orange-500'
        },
    ]

    return(
        <div name="skills" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                        Skills</p>
                    <p className='py-6'>I have worked with these technologies</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                    {skills.map(({id,src,style,title})=>(

                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}` }>
                        <img src={src} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;