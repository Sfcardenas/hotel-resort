# Reporte de Integración Continua - Hotel Resort    
## 1. Diagrama del Pipeline
```mermaid
graph TD
    A[Código en Codespace] -->|git push| B[GitHub Repository]
    B --> C[GitHub Actions]
    subgraph Pipeline_CI
        C --> D[Install Dependencies]
        D --> E[Linting - ESLint]
        E --> F[Unit Tests - 10 cases]
        F --> G[Integration Tests - 5 cases]
        G --> H[Coverage Report]
    end
    H --> I[SonarCloud Analysis]
    I --> J[Quality Gate Check]