// This file is automatically generated. Do not modify it manually.

const manifest = JSON.parse(`
{
    "id": "github",
    "name": "GitHub",
    "description": "GitHub plugin for Mattermost.",
    "homepage_url": "https://github.com/mattermost/mattermost-plugin-github",
    "support_url": "https://github.com/mattermost/mattermost-plugin-github/issues",
    "release_notes_url": "https://github.com/mattermost/mattermost-plugin-github/releases/tag/v2.0.1",
    "icon_path": "assets/icon.svg",
    "version": "2.0.1",
    "min_server_version": "5.25.0",
    "server": {
        "executables": {
            "linux-amd64": "server/dist/plugin-linux-amd64",
            "darwin-amd64": "server/dist/plugin-darwin-amd64",
            "windows-amd64": "server/dist/plugin-windows-amd64.exe"
        },
        "executable": ""
    },
    "webapp": {
        "bundle_path": "webapp/dist/main.js"
    },
    "settings_schema": {
        "header": "The GitHub plugin for Mattermost allows users to subscribe to notifications, stay up-to-date with reviews, see the status of pull requests at a glance, and other common GitHub actions - directly from Mattermost. \\n \\n Instructions for setup are [available here](https://www.mattermost.com/pl/default-github-plugin#configuration).",
        "footer": "* To report an issue, make a suggestion or a contribution, [check the repository](https://github.com/mattermost/mattermost-plugin-github).",
        "settings": [
            {
                "key": "GitHubOAuthClientID",
                "display_name": "GitHub OAuth Client ID:",
                "type": "text",
                "help_text": "The client ID for the OAuth app registered with GitHub.",
                "placeholder": "",
                "default": null
            },
            {
                "key": "GitHubOAuthClientSecret",
                "display_name": "GitHub OAuth Client Secret:",
                "type": "text",
                "help_text": "The client secret for the OAuth app registered with GitHub.",
                "placeholder": "",
                "default": null
            },
            {
                "key": "WebhookSecret",
                "display_name": "Webhook Secret:",
                "type": "generated",
                "help_text": "The webhook secret set in GitHub.",
                "placeholder": "",
                "default": null
            },
            {
                "key": "EncryptionKey",
                "display_name": "At Rest Encryption Key:",
                "type": "generated",
                "help_text": "The AES encryption key used to encrypt stored access tokens.",
                "placeholder": "",
                "default": null
            },
            {
                "key": "GithubOrg",
                "display_name": "GitHub Organization:",
                "type": "text",
                "help_text": "(Optional) Set to lock the plugin to a single GitHub organization.",
                "placeholder": "",
                "default": null
            },
            {
                "key": "EnterpriseBaseURL",
                "display_name": "Enterprise Base URL:",
                "type": "text",
                "help_text": "(Optional) The base URL for using the plugin with a GitHub Enterprise installation. Example: https://github.example.com",
                "placeholder": "",
                "default": null
            },
            {
                "key": "EnterpriseUploadURL",
                "display_name": "Enterprise Upload URL:",
                "type": "text",
                "help_text": "(Optional) The upload URL for using the plugin with a GitHub Enterprise installation. This is often the same as your Base URL.",
                "placeholder": "",
                "default": null
            },
            {
                "key": "EnableLeftSidebar",
                "display_name": "Display Notification Counters in Left Sidebar",
                "type": "bool",
                "help_text": "When false, the counters showing the user how many open/assigned issues they have in Github will not be shown in the Left Hand Sidebar on desktop browsers.",
                "placeholder": "",
                "default": true
            },
            {
                "key": "EnablePrivateRepo",
                "display_name": "Enable Private Repositories:",
                "type": "bool",
                "help_text": "(Optional) Allow the plugin to work with private repositories. When enabled, existing users must reconnect their accounts to gain access to private repositories. Affected users will be notified by the plugin once private repositories are enabled.",
                "placeholder": "",
                "default": null
            },
            {
                "key": "ConnectToPrivateByDefault",
                "display_name": "Connect to private Repositories by default:",
                "type": "bool",
                "help_text": "(Optional) When enabled, /github connect command will let users connect to their github account and gain access to private repositories without explicitly mentioning private.",
                "placeholder": "",
                "default": null
            },
            {
                "key": "EnableCodePreview",
                "display_name": "Enable Code Previews:",
                "type": "dropdown",
                "help_text": "Allow the plugin to expand permalinks to GitHub files with an actual preview of the linked file.",
                "placeholder": "",
                "default": "public",
                "options": [
                    {
                        "display_name": "Enable for public repositories",
                        "value": "public"
                    },
                    {
                        "display_name": "Enable for public and private repositories. This might leak confidential code into public channels",
                        "value": "privateAndPublic"
                    },
                    {
                        "display_name": "Disable",
                        "value": "disable"
                    }
                ]
            }
        ]
    }
}
`);

export default manifest;
export const id = manifest.id;
export const version = manifest.version;
