import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

export default class FormDemo2 extends Component {
    state = {
        email: '',
        password: '',
        city: '',
        description: ''
    }
    handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({ [name]: value })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        alert(this.state.email + " added to db")
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for='email'>Email</Label>
                        <Input
                            type='email'
                            name='email'
                            id='email'
                            placeholder='Enter Mail'
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>password</Label>
                        <Input
                            type='password'
                            name='password'
                            id='password'
                            placeholder='Enter password'
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='description'>description</Label>
                        <Input
                            type='textarea'
                            name='description'
                            id='description'
                            placeholder='Enter description'
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input type="select" name="city" id="city" onChange={this.handleChange}>
                            <option>Grave</option>
                            <option>Nijmegen</option>
                            <option>'s-Hertogenbosch</option>
                        </Input>
                    </FormGroup>
                    <Button type="submit">Save</Button>
                </Form>
                
            </div >
        )
    }
}
