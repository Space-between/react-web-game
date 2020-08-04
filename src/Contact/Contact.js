import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';
import ContactCreate from './ContactCreate';

import update from 'react-addons-update';




export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            selectedkey: -1,
            keyword: '',
            contactData:[{
                name:'Abet', 
                phone:'010-0000-0001'
            }, {
                name:'Betty', 
                phone:'010-0000-0002'
            }, {
                name:'Charlie', 
                phone:'010-0000-0003'
            }, {
                name:'David', 
                phone:'010-0000-0004'
            }]
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.handleCreate = this.handleCreate.bind(this); //데이터추가
        this.handleRemove = this.handleRemove.bind(this); //데이터삭제
        this.handleEdit = this.handleEdit.bind(this); //데이터수정

    }

    handleChange(e) {
        this.setState({
            keyword: e.target.value
        });
    }

    handleClick(key) {
        this.setState({
            selectedkey: key
        });

        console.log(key, 'isfsd');
    }

    handleCreate(contact) {
        this.setState({
            contactData: update(this.state.contactData, { $push: [contact] })
        });
    }

    handleRemove() {
        if(this.state.selectedkey < 0) {
            return;
        }
        this.setState({
            contactData: update(this.state.contactData,
                { $splice: [[this.state.selectedKey, 1]] }
            ),
            selectedKey: -1
        });
    }

    handleEdit(name, phone) {
        this.setState({
            contactData: update(this.state.contactData, 
                {
                    [this.state.selectedkey]: {
                        name: { $set: name },
                        phone: { $set: phone }
                    }
                }
            )
        });
    }

    render() {

        const mapToComponent = (data) => {
            data.sort();
            data = data.filter(
                (contact) => {
                    return contact.name.toLowerCase()
                    .indexOf(this.state.keyword.toLowerCase()) > -1;
                }
            );
            return data.map((contact, i)=> { //contact는 배열안에 있는 각각의 원소를 말하고 i는 인덱스값을 말한다.
                return (<ContactInfo 
                            contact={contact} 
                            key={i}
                            onClick={() => this.handleClick(i)}/>);
            });
        };


        return(
            <div>
                <h1>Contacts</h1>
                <input 
                    name="keyword"
                    placeholder="Search"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                />
                <div>{mapToComponent(this.state.contactData)}</div>
                <ContactDetails 
                    isSelected={this.state.selectedkey != -1}
                    contact={this.state.contactData[this.state.selectedkey]}
                    onRemove={this.handleRemove}
                    onEdit={this.handleEdit}
                ></ContactDetails>
                <ContactCreate
                    onCreate={this.handleCreate}
                ></ContactCreate>
            </div>
        )
    }
}