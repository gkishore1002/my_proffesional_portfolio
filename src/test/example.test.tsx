import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Index from "@/pages/Index";

describe("homepage", () => {
  it("renders the premium agency hero and case studies sections", () => {
    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>
    );

    expect(screen.getByText(/we design and build ai-native products/i)).toBeInTheDocument();
    expect(screen.getAllByText(/case studies/i).length).toBeGreaterThan(0);
  });
});
