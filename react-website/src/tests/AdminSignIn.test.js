import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter as Router } from 'react-router-dom';
import AdminSignIn from '../pages/AdminSignIn'

afterEach(()=>{
    cleanup();
})

test('should render admin username input', () =>{
    render(<Router>
        <AdminSignIn/>
    </Router>);
    const returnButton = screen.getByTestId('adminUsername');
    expect(returnButton).toBeInTheDocument();
    expect(returnButton).toContainHTML('</input type="text">');
});

test('should render admin password input', () =>{
    render(<Router>
        <AdminSignIn/>
    </Router>);
    const returnButton = screen.getByTestId('adminPass');
    expect(returnButton).toBeInTheDocument();
    expect(returnButton).toContainHTML('</input type="password">');
});

test('should render Sign-in button', () =>{
    render(<Router>
        <AdminSignIn/>
    </Router>);
    const returnButton = screen.getByTestId('SubmitBtn');
    expect(returnButton).toBeInTheDocument();
    expect(returnButton).toContainHTML('</button>');
});