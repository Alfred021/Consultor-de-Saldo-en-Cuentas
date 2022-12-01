import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import AccountScreen from '../AccountsScreen';

describe('Renderizar Account Screen', () => {
    test("Render AccountScreen", async () => {
        render(<AccountScreen />);
        const subTitle = screen.getByText(/Seleccione la cuenta a consultar/i);
        expect(subTitle).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.getAllByText(/Nro: /i).length).toBeGreaterThan(1);
          })
        const nextButton = screen.getByText(/Siguientes >>/i);
        expect(nextButton).toBeInTheDocument();
        fireEvent.click(nextButton);
        const previousButton = screen.getByText(/<< Anteriores/i);
        expect(previousButton).toBeInTheDocument();
        fireEvent.click(previousButton);
    });
});
