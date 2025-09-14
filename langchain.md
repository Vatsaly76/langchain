flowchart TD
    %% Define the shapes/nodes
    A[User Input: "LangChain"]
    B["PromptTemplate<br>Creates a full prompt from the topic"]
    C["Model<br>(Gemini 1.5 Flash)"]
    D{".pipe()"}
    E["Final Response<br>(The explanation of LangChain)"]
    F[Console]

    %% Define the flow/connections
    A --> B
    subgraph Chain
        direction LR
        B -- formatted prompt --> D -- chained to --> C
    end
    C --> E
    E --> F