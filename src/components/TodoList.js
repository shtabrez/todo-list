import React, { useState } from 'react'
import { Button, Icon } from 'semantic-ui-react';

function TodoList() {
    const [activity, setActivity] = useState("");
    const [listData, setlistData] = useState([]);
    function addActivity() {
        //  setlistData([...listData, activity])
        //  console.log(listData)
        setlistData((listData) => {
            const updatedList = [...listData, activity]
            console.log(updatedList)
            setActivity('');
            return updatedList
        })

    }
    function removeActivity(i) {
        const updatedListData = listData.filter((elem, id) => {
            return i != id;
        })
        setlistData(updatedListData);
    }
    function removeAll() {
        setlistData([])
    }
    return (
        <>
            <div className='container'>
                <div className='header'>TODO LIST</div>
                <input type="text" placeholder='Add Activity' value={activity} onChange={(e) => setActivity(e.target.value)} />
                <button onClick={addActivity}>Add</button>
                <p className='List-heading'>Here is your List :{")"}</p>
                {listData != [] && listData.map((data, i) => {
                    return (
                        <>
                            <p key={i}>
                                <div className='row'>
                                    <div className='listData'>{data}</div>
                                    <Button className='btn' color='red' onClick={() => removeActivity(i)} >Delete</Button>
                                </div>

                            </p>
                        </>
                    )
                })}
                {listData.length >= 1 &&
                    <Button className='remove-btn' color='red' onClick={removeAll}>Delete All</Button>}

            </div>
        </>
    )
}

export default TodoList

