BUILD_BAZEL = """
package(default_visibility = ["//visibility:public"])
exports_files([
  "bin/node",
  "bin/npm",
])
"""


config = {
    "darwin": (
        "https://nodejs.org/dist/v10.9.0/node-v10.9.0-darwin-x64.tar.gz",
        "3c4fe75dacfcc495a432a7ba2dec9045cff359af2a5d7d0429c84a424ef686fc",
        "node-v10.9.0-darwin-x64.tar.gz"
    ),
    "linux": (
        "https://nodejs.org/dist/v10.9.0/node-v10.9.0-linux-x64.tar.gz",
        "d061760884e4705adfc858eb669c44eb66cd57e8cdf6d5d57a190e76723af416",
        "node-v10.9.0-darwin-x64.tar.gz"
    )
}

def _install(repo_ctx):
    is_darwin = repo_ctx.os.name.lower().startswith("mac os")

    if is_darwin:
        conf = config["darwin"]
    else:
        conf = config["linux"]

    (url, sha256, stripPrefix) = config

    repository_ctx.file("BUILD.bazel", content = BUILD_BAZEL)


install_nodejs = repository_rule(_install)
