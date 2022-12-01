import { render, screen, waitFor } from '@testing-library/react';
import Route from "../Route";

const routeTestPath = "/";
const RouteTestChildren = ():JSX.Element => <div><p>Ruta Actual</p></div>;

describe('Manejar cambio de rutas', () => {

    test('debería retornar el componente similar al path especificado', async () => {
        expect(window.location.pathname).toEqual(routeTestPath);
        render(<Route path={routeTestPath}>
            <RouteTestChildren />
        </Route>);
        window.dispatchEvent( new Event('popstate') );
        await waitFor(() => {
            const element = screen.getByText(/Ruta Actual/i);
            expect(element).toBeInTheDocument()
        })
    })
});


