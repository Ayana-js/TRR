import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const HorosList: React.FC = () => {
    const {error, loading, horos} = useTypedSelector( state => state.horos)
    const {fetchHoros} = useActions()
    
    useEffect(() => {
        fetchHoros()
    }, [])

    if(loading) {
       return <h1>Loading...</h1>
    }

    if (error) {
        return <h1> {error} </h1>
     }
    return (
        <div>
            {horos.map(horo => <div key={horo.id}> {horo.title} </div> )}
        </div>
    );
};

export default HorosList;