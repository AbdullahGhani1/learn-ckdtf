import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";

import { file, provider } from "@cdktf/provider-local";
import * as path from "path";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // Initialize the local provider
    new provider.LocalProvider(this, "local", {});

    //  create project  folder
    const projectDirectory = path.join(
      process.env.INIT_CWD!,
      "./authors-projects"
    );

    const projectName = "project-1";
    const basePath = `${projectDirectory}/${projectName}`;

    //  Add a readme File

    new file.File(this, "readme-file", {
      filename: `${basePath}/readme.md`,
      content: `${projectName}\n\nThis is the ${projectName} project.`,
    });
  }
}

const app = new App();
new MyStack(app, "cdktf-local");
app.synth();
