import React, {useState, useEffect} from "react";
import { SearchInput } from "./search-input";
import { ListingItem } from "./listing-item";
import { DropdownButton } from "./dropdown-buttom";
import styles from "../../styles/post-search.module.css"


export const Listing = ({category, tag, orderBy, sortBy, handleUnselect}) => {
    
    return(
        <div className = {styles.listing}>
            {
                category.map((item, idx) => {
                    if(item.isSelected)return(
                        <ListingItem
                            key = {idx}
                            type = "Category"
                            value = {item.label}
                            item = {item}
                            handleUnselect  = {handleUnselect}
                            action = "category"
                            state = {category}
                        />
                    )
                })
            }
            {

                tag.map((item, idx) => {
                    if(item.isSelected)return(
                        <ListingItem
                            key = {idx}
                            type = "Tag"
                            value = {item.label}
                            item = {item}
                            handleUnselect  = {handleUnselect}
                            action = "tag"
                            state = {tag}
                        />
                    )
                })
            }
            {
                orderBy.map((item, idx) => {
                    if(item.isSelected)return(
                        <ListingItem
                            key = {idx}
                            type = "Order"
                            value = {item.label}
                            item = {item}
                            handleUnselect  = {handleUnselect}
                            action = "orderBy"
                            state = {orderBy}
                        />
                    )
                })
                
            }
            {
                sortBy.map((item, idx) => {
                    if(item.isSelected)return(
                        <ListingItem
                            key = {idx}
                            type = "Sort"
                            value = {item.label}
                            item = {item}
                            handleUnselect  = {handleUnselect}
                            action = "sortBy"
                            state = {sortBy}
                        />
                    )
                })
            }
        </div>
    )
}

export const PostSearch = ({state, setState, handleOnClick, handleChange, search, status}) => {

    const [toggle, setToggle] = useState({
        category: false,
        tag: false,
        orderBy: false,
        sortBy: false
    });

    const [isHidden, setIsHidden] = useState(false);
    const [action, setAction] = useState("");

    const handleToggle = (name) =>{ 
        if(action === name || !isHidden || !action){
            setToggle({[name]: !isHidden});
            setIsHidden(!isHidden);
        }else if(action !== name && isHidden)
            setToggle({[name]: isHidden});
        setAction(name);
    }

    const handleSelected = (item, prevArray = [], action) => {
        let array = prevArray;
        const object = {
            value: item.value,
            isSelected: !item.isSelected,
            label: item.label
        }
        const index = array.indexOf(item);
        array[index] = object;
        if(action === "sortBy" || action === "orderBy")
            array = toggleArray(array, index)
        setState(prevState=> ({...prevState, [action]: array }));
    }

    const handleUnselect = (item, prevArray = [], action) => {
        let array = prevArray;
        const object = {
            value: item.value,
            isSelected: !item.isSelected,
            label: item.label,
        }
        const index = array.indexOf(item);
        array[index] = object;
        setState(prevState=> ({...prevState, [action]: array }));
    }

    const toggleArray = (array = [], position = 0, ) => {
        array.map((item, idx) =>{
            if(idx !== position)
                array[idx] = {value: array[idx].value, label: array[idx].label, isSelected: false}
        } )
        return array;
    }

    return(
        <div className = {styles.container}>
            <div className = {styles.search}>
                <div className = {`${styles.item} ${styles.wider}`}>
                    <SearchInput
                        handleChange = {handleChange}
                        handleOnClick = {handleOnClick}
                        status = {status}
                        name = {search}
                    />
                </div>
                <div className = {`${styles.item} `}>
                    <div onClick = {()=> handleOnClick()} className = {`${styles.button} ${styles.green}`}>
                        Search
                    </div>
                </div>
            </div>
            <Listing
                orderBy = {state.orderBy}
                sortBy = {state.sortBy}
                category = {state.category}
                tag = {state.tag}
                handleUnselect = {handleUnselect}
            />
            <div className = {styles.bottom}>
                <DropdownButton
                    type = "Categogy"
                    state = {state.category}
                    toggle = {toggle.category}
                    handleToggle = {handleToggle}
                    action = "category"
                    handleSelected = {handleSelected}
                    key = "0"
                />
                <DropdownButton
                    type = "Tag"
                    state = {state.tag}
                    toggle = {toggle.tag}
                    handleToggle = {handleToggle}
                    action = "tag"
                    handleSelected = {handleSelected}
                    key = "2"
                />
                <DropdownButton
                    type = "Order by"
                    state = {state.orderBy}
                    toggle = {toggle.orderBy}
                    handleToggle = {handleToggle}
                    action = "orderBy"
                    handleSelected = {handleSelected}
                    key = "3"
                />
                <DropdownButton
                    type = "Sort by"
                    state = {state.sortBy}
                    toggle = {toggle.sortBy}
                    action = "sortBy"
                    handleToggle = {handleToggle}
                    handleSelected = {handleSelected}
                    key = "4"
                />
            </div>
        </div>
    )
}
