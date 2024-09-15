import Accordion from "./components/Accordion";
export default function App(){
    const items = [
        {
            id:'mani11',
            label:'What is this all about?',
            content:'This is all about react...'
        },
        {
            id:'mani12',
            label:'React? what it is?',
            content:'This is an JS librayr'
        },
        {
            id:'mani13',
            label:'Can i learn it?',
            content:'Yes,EVERY One can'
        },
        {
            id:'mani14',
            label:'Do you know?',
            content:'Yes,Of course'
        },
    ]
    return <Accordion items={items}/>;
}