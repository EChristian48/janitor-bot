export interface EventDataGenerate {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: [
    { index: number; delta: { content: string }; finish_reason: string }
  ];
  usage?: {
    prompt_tokens: number;
    total_tokens: number;
    completion_tokens: number;
  };
}
