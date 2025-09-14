flowchart TD
    %% Each item below MUST be on its own line
    A[User Input: "LangChain"]
    B["PromptTemplate<br>Creates a full prompt from the topic"]
    C["Model<br>(Gemini 1.5 Flash)"]
    D{".pipe()"}
    E["Final Response<br>(The explanation of LangChain)"]
    F[Console]

    %% This part defines the arrows
    A --> B
    subgraph Chain
        direction LR
        B -- formatted prompt --> D -- chained to --> C
    end
    C --> E
    E --> F
