import React, { useState } from 'react'

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
                                    <button className='btn' onClick={() => removeActivity(i)} >remove(-)</button>
                                </div>

                            </p>
                        </>
                    )
                })}
                {listData.length >= 1 &&
                    <button className='remove-btn' onClick={removeAll}>Remove All</button>}

            </div>
        </>
    )
}

export default TodoList

