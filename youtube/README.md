Build and Deploy a YouTube Clone using Azure DevOps pipelines


Build and Deploy a YouTube Clone using Azure pipelines

A trigger tells a Pipeline to run. It could be CI or Scheduled, manual(if not specified), or after another build finishes.

A pipeline is made up of one or more stages. A pipeline can deploy to one or more environments.

A stage organizes jobs in a pipeline, and each stage can have one or more jobs.

Each job runs on one agent, such as Ubuntu, Windows, macOS, etc. A job can also be agentless.

Each agent runs a job that contains one or more steps.

A step can be a task or script and is the smallest building block of a pipeline.

A task is a pre-packaged script that performs an action, such as invoking a REST API or publishing a build artifact.

An artifact is a collection of files or packages published by a run.

![image](https://github.com/user-attachments/assets/118c8bd7-eed0-4a9f-9119-b3cedda4d1b2)
