import React, { useState } from 'react'
import './Group.css'
import searc from '../../assets/search.png'
import { useDispatch } from 'react-redux'
import { getUserList } from '../../actions/user';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { createGroupChat } from '../../actions/chat';
import del from '../../assets/icons8-denied-25.png';

import { fetchChat } from '../../actions/chat';

const Group = () => {
    const [search, setSearch] = useState("");
    const [name,setName]=useState("");
    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    const [members,setMembers]=useState([])
    const dispatch = useDispatch();
    const userList = useSelector(state => state.userList);
    console.log(userList);
    useEffect(() => {
        if (search.length !== 0) {
            dispatch(getUserList(search));
        } else {
            dispatch({ type: 'RESET_USER_LIST' });
        }

    }, [search]);
    const handleClick=(id,name)=>{
        console.log(id);
        let f=-1;
        for(let i=0;i<members.length;i++){
            if(members[i].id===id){
                f=1;
                break
            }
        }
        if(f===-1){
            setMembers([...members,{id,name}]);
        }
        console.log(members);

    }
    const handleRemove=(idd,name)=>{
        let ne=[]
        console.log(idd,name);
        for(let i=0;i<members.length;i++){
            console.log(members[i].id,members[i].idd);
            if(members[i].id!==idd){
                let id=members[i].id;
                let name=members[i].name;
                ne.push({id,name});
            }
        }
        console.log(ne);
        setMembers(ne);
    }
    const createGroup=(e)=>{
        let formData={users:[],name:name};
        for(let i=0;i<members.length;i++){
            formData.users.push(members[i].id);
        }
        dispatch(createGroupChat(formData));
    }
    return (
        <div>

            <div className='createGroup'>
                <h2>Create a Group</h2>
            </div>
            <div className='addedusers'>




            {
                    members.map(function (member, index) {
                        return <div className='addedMember'>
                            <div className='addedMemberName'>
                            {member?.name}   
                                                        
                            </div>
                            <div className='delMember' onClick={(e)=>handleRemove(member?.id,member?.name)}>
                            <img src={del} alt="" />     
                            </div>

                        </div>;
                    })
                }




            </div>
            <div className='chatName'>
                <div className='chatNameLabel'>
                    Chat Name: 
                </div>
                <div>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
                
            </div>
            <div className='alignSearch2'>
                <div>
                    <img src={searc} alt="" />
                </div>
                <div>
                    <input onChange={handleChange} value={search} type="text" placeholder='Add Users' className='searchInput' autoFocus />
                </div>
            </div>

            <div className='showUsers'>

                {
                    userList.map(function (user, index) {
                        return <div>
                            <div className='userSearch' onClick={(e)=>handleClick(user._id,user.name)}>
                                <div>
                                    {user.name}
                                </div>
                                <div>
                                    {user.email}
                                </div>
                            </div>

                        </div>;
                    })
                }
            </div>

            <div>
                <button onClick={createGroup}>Create the Group</button>
            </div>
        </div>
    )
}

export default Group
