# Reporte de Integración Continua - Hotel Resort  
Métricas de Calidad Obtenidas
Basado en la ejecución del pipeline y el análisis estático en la última build exitosa, se obtuvieron los siguientes resultados:

Cobertura de Código: 100% (Verificado en reporte de Istanbul/Jest).

Tests Unitarios: 10 casos ejecutados con éxito.

Tests de Integración: 5 casos ejecutados con éxito (Supertest).

SonarCloud Quality Gate: PASSED

Security Rating: A

Maintainability Rating: A

Reliability Rating: A

Errores de Linting (ESLint): 0 (Código limpio según estándar Google/Airbnb).

Justificación de Thresholds (Umbrales) Elegidos
Siguiendo los principios del SWEBOK 4.0a en el área de Construcción de Software, se definieron los siguientes umbrales críticos:

Cobertura Mínima (80%): Se eligió este umbral para asegurar que la lógica crítica de validación de habitaciones y noches esté protegida ante cambios futuros (Cambio/Anticipación). Aunque el mínimo exigido es 80%, la implementación actual alcanza el 100% para garantizar robustez total y facilitar la Construcción para Verificación.

Security & Maintainability Rating (A): Se configuró SonarCloud para exigir la calificación más alta. Esto minimiza la deuda técnica y asegura que el código sea seguro, legible y fácil de reutilizar por otros ingenieros, reduciendo costos de mantenimiento.

Éxito de Construcción (100%): El pipeline está configurado para fallar ante cualquier error en los tests o el linter. Esto garantiza que solo software verificado llegue al repositorio, aplicando un control de versiones estricto y profesional.

Elaborado por: Sebastian Cardenas

Proyecto: Hotel Resort REST API

Área: Software Engineering Construction (SWEBOK)  
## 3. Diagrama del Pipeline
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

