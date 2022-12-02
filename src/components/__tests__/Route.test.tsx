import { render, screen, waitFor } from '@testing-library/react';
import Route from "../Route";

const routeTestPath = "/";
const RouteTestChildren = ():JSX.Element => <div><p>Ruta Actual</p></div>;

describe('Manejar cambio de rutas', () => {

    test('Debería retornar un componente similar al path especificado para la ruta', async () => {
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


