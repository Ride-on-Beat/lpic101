// LPIC101 応用問題タブ用データ(718問)
// 出典: lpic101-quiz2.html から抽出。index.html肥大化を避けるため別ファイルに分離。
const APPLIED_QUESTIONS = [
  {
    category: "課題101: システムアーキテクチャ",
    question: "PCの電源を入れてから最初に実行され、ハードウェアの初期化を行うファームウェアはどれか。",
    choices: ["GRUB", "BIOS/UEFI", "systemd", "init"],
    answer: 1,
    explain: "BIOS/UEFIは電源投入後に最初に動作するファームウェアで、ハードウェアチェック後にブートローダーを呼び出します。GRUBはその後に起動するブートローダーです。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "現在起動しているLinuxのランレベル(または対応するsystemdのターゲット)を確認するコマンドはどれか。",
    choices: ["runlevel", "uptime", "hostname", "uname -r"],
    answer: 0,
    explain: "runlevelコマンドで現在および直前のランレベルを確認できます。systemd環境ではsystemctl get-defaultも使われます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "/proc/cpuinfo に格納されている情報として正しいものはどれか。",
    choices: ["ディスクの使用量", "CPUの詳細情報", "ネットワーク設定", "起動中のプロセス一覧"],
    answer: 1,
    explain: "/proc/cpuinfoにはCPUのモデル名やコア数、フラグなどの情報が格納されています。/procは実行中のカーネル情報を参照する仮想ファイルシステムです。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "Debian系ディストリビューションで依存関係を自動解決しながらパッケージをインストールするコマンドはどれか。",
    choices: ["rpm -i", "dpkg -i", "apt install", "yum install"],
    answer: 2,
    explain: "apt installは依存パッケージを自動的に解決してインストールします。dpkgは低レベルツールで依存関係の自動解決は行いません。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "RPM系ディストリビューションで、すでにインストール済みのパッケージ一覧を表示するコマンドはどれか。",
    choices: ["rpm -qa", "rpm -e", "dpkg -l", "apt list"],
    answer: 0,
    explain: "rpm -qaはインストール済みの全パッケージを一覧表示します。-eはパッケージの削除(erase)オプションです。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "dpkgコマンドでパッケージを完全に削除(設定ファイルも含む)するオプションはどれか。",
    choices: ["-r", "-P", "-i", "-l"],
    answer: 1,
    explain: "dpkg -P(--purge)は設定ファイルも含めて完全にパッケージを削除します。-r(--remove)は設定ファイルを残して削除します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "ファイル内から特定の文字列を含む行を検索するコマンドはどれか。",
    choices: ["find", "grep", "sort", "cut"],
    answer: 1,
    explain: "grepはファイルの内容から指定したパターンにマッチする行を検索します。findはファイル自体の検索に使います。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "ファイル名やディレクトリ構造の条件からファイルを検索するコマンドはどれか。",
    choices: ["grep", "locate", "find", "which"],
    answer: 2,
    explain: "findは名前・サイズ・更新日時など様々な条件を指定してファイルシステムを走査し検索します。locateは事前に作成されたデータベースから検索します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "コマンドの出力からテキスト置換や削除を行うストリームエディタはどれか。",
    choices: ["awk", "sed", "tr", "cat"],
    answer: 1,
    explain: "sed(stream editor)は入力を1行ずつ処理しながら置換・削除などの編集を行います。「s/検索文字列/置換文字列/」という書式がよく使われます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "ファイルの所有者を変更するコマンドはどれか。",
    choices: ["chmod", "chown", "chgrp", "umask"],
    answer: 1,
    explain: "chownはファイルの所有者(および所有グループ)を変更します。chmodはパーミッション、chgrpは所有グループのみを変更します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "パイプ(|)の役割として正しいものはどれか。",
    choices: [
      "コマンドをバックグラウンドで実行する",
      "あるコマンドの標準出力を別のコマンドの標準入力に渡す",
      "コマンドの実行結果をファイルに保存する",
      "複数のコマンドを同時に並列実行する"
    ],
    answer: 1,
    explain: "パイプは左側のコマンドの標準出力を右側のコマンドの標準入力として接続します。ファイルへの保存はリダイレクト(> や >>)を使います。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "/etc/fstab の役割として正しいものはどれか。",
    choices: [
      "起動時に自動マウントするファイルシステムの情報を定義する",
      "インストール済みパッケージの一覧を保持する",
      "ユーザーのパスワード情報を保持する",
      "ネットワークインターフェースの設定を保持する"
    ],
    answer: 0,
    explain: "/etc/fstabには、起動時にマウントするファイルシステムのデバイス・マウントポイント・種類・オプションなどを定義します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "既存のファイルへの参照を追加し、同じinodeを共有するリンクはどれか。",
    choices: ["シンボリックリンク", "ハードリンク", "マウントポイント", "シンボリックマウント"],
    answer: 1,
    explain: "ハードリンクは同じinodeを指す別名で、元ファイルを消してもデータは残ります。シンボリックリンクは別inodeを持ち、パスを参照する仕組みです。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ディスクの空き容量をファイルシステムごとに確認するコマンドはどれか。",
    choices: ["du -sh", "df -h", "ls -l", "fdisk -l"],
    answer: 1,
    explain: "df -hはマウントされている各ファイルシステムの使用量・空き容量を人間に読みやすい形式で表示します。duはファイルやディレクトリ単位の使用量を表示します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルシステムの整合性をチェックし、必要に応じて修復するコマンドはどれか。",
    choices: ["mkfs", "fsck", "mount", "tune2fs"],
    answer: 1,
    explain: "fsck(file system check)はファイルシステムのエラーを検査・修復します。mkfsは新規にファイルシステムを作成するコマンドです。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "デバイスファイルが格納されているディレクトリはどれか。",
    choices: ["/dev", "/etc", "/var", "/opt"],
    answer: 0,
    explain: "/devにはハードディスクやシリアルポートなどのデバイスファイルが格納されています。デバイスドライバはこれらのファイルを通してアクセスされます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムのシャットダウンを指定した時間後に実行するコマンドはどれか。",
    choices: ["halt", "shutdown", "reboot", "kill"],
    answer: 1,
    explain: "shutdownは時刻や遅延時間を指定してシステムを安全に停止・再起動できます。例えば「shutdown -h +10」で10分後に停止します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "カーネルが読み込んでいるモジュールの一覧を表示するコマンドはどれか。",
    choices: ["lsmod", "lspci", "lsusb", "lsblk"],
    answer: 0,
    explain: "lsmodは現在ロードされているカーネルモジュールの一覧を表示します。lspciやlsusbはそれぞれPCI・USBデバイスの一覧表示です。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "systemdを使用するシステムで、サービスの状態を確認するコマンドはどれか。",
    choices: ["service status", "systemctl status", "initctl status", "chkconfig status"],
    answer: 1,
    explain: "systemctl statusで対象サービスが起動中か、有効化されているかなどを確認できます。systemdはSysVinitに代わる初期化システムです。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "yumやdnfのようなRPM系高レベルパッケージ管理ツールの特徴として正しいものはどれか。",
    choices: [
      "依存関係を自動的に解決してインストールする",
      "パッケージのファイルを一つずつ手動で配置する",
      "ソースコードからのビルドしか行えない",
      "Debian系専用のツールである"
    ],
    answer: 0,
    explain: "yum/dnfはリポジトリ情報を利用し、依存パッケージを自動的に解決してインストールします。rpmコマンド単体では依存解決は行われません。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "すでにインストールされているパッケージが、どのファイルを含んでいるかを確認するrpmのオプションはどれか。",
    choices: ["rpm -qi", "rpm -ql", "rpm -qf", "rpm -qc"],
    answer: 1,
    explain: "rpm -ql パッケージ名で、そのパッケージに含まれるファイルの一覧を表示します。-qiはパッケージ情報、-qfは指定ファイルがどのパッケージに属するかを調べます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "apt-getでインストール済みパッケージのバージョン情報も含めた一覧を確認したい場合に使うコマンドはどれか。",
    choices: ["apt-cache search", "dpkg -l", "apt-get update", "apt-get clean"],
    answer: 1,
    explain: "dpkg -lはインストール済みパッケージ名とバージョンなどの一覧を表示します。apt-cache searchはリポジトリ内のパッケージ検索に使います。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "テキストファイルの行数・単語数・バイト数を数えるコマンドはどれか。",
    choices: ["wc", "nl", "cut", "uniq"],
    answer: 0,
    explain: "wc(word count)はファイルの行数(-l)・単語数(-w)・バイト数(-c)を数えます。nlは行番号を付加して表示するコマンドです。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "ファイルの中身を並び替えて出力するコマンドはどれか。",
    choices: ["sort", "sed", "grep", "tee"],
    answer: 0,
    explain: "sortはファイルの内容を行単位で昇順・降順に並び替えます。-nオプションで数値順、-rオプションで逆順にできます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "実行結果を画面に表示しつつ、同時にファイルへも保存するコマンドはどれか。",
    choices: ["cat", "tee", "cp", "xargs"],
    answer: 1,
    explain: "teeはパイプで受け取った標準入力を画面に表示しつつ、指定したファイルにも書き込みます。「T字管」のように出力を分岐させることからこの名前が付いています。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "実行可能ファイルの絶対パスをPATH環境変数の中から検索して表示するコマンドはどれか。",
    choices: ["whereis", "which", "type", "locate"],
    answer: 1,
    explain: "whichはPATHに設定されたディレクトリを検索し、実行されるコマンドの絶対パスを表示します。whereisはマニュアルやソースの場所も含めて検索します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルシステムをマウントする際に使用するコマンドはどれか。",
    choices: ["mount", "fsck", "mkfs", "umount"],
    answer: 0,
    explain: "mountは指定したデバイスやパーティションを、指定したマウントポイントに接続します。取り外す場合はumountを使います。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ルートディレクトリ直下で、システム起動に必要な設定ファイルが格納されるディレクトリはどれか。",
    choices: ["/etc", "/tmp", "/usr", "/mnt"],
    answer: 0,
    explain: "/etcにはシステムやアプリケーションの設定ファイルが格納されます。fstabやpasswdなど、多くの重要な設定ファイルがここにあります。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ハードディスクのパーティション情報を確認・編集するコマンドはどれか。",
    choices: ["fdisk", "mkfs", "df", "du"],
    answer: 0,
    explain: "fdiskはパーティションテーブルの表示・作成・削除・変更を行うコマンドです。GPTディスクにはgdiskやpartedもよく使われます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "UEFIがBIOSと比較して持つ特徴として正しいものはどれか。",
    choices: [
      "2TBを超える大容量ディスクからの起動に対応している",
      "テキストベースの設定画面しか持たない",
      "MBR形式のパーティションにしか対応しない",
      "16ビット動作モードでのみ動作する"
    ],
    answer: 0,
    explain: "UEFIはGPT形式のディスクに対応し、2TBを超える大容量ディスクからの起動が可能です。BIOSはMBR形式が基本で容量に制限があります。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "PCIバスに接続されているデバイスの一覧を表示するコマンドはどれか。",
    choices: ["lspci", "lsusb", "lsblk", "lscpu"],
    answer: 0,
    explain: "lspciはPCIバスに接続されたデバイス情報を表示します。USBデバイスの一覧にはlsusbを使います。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "systemdでデフォルトのターゲット(旧ランレベルに相当)を確認するコマンドはどれか。",
    choices: ["systemctl get-default", "systemctl list-units", "systemctl daemon-reload", "systemctl isolate"],
    answer: 0,
    explain: "systemctl get-defaultで起動時に使われるデフォルトターゲットを確認できます。variables graphical.targetやmulti-user.targetなどが該当します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "カーネルのバージョン情報を表示するコマンドはどれか。",
    choices: ["uname -r", "hostname", "date", "who"],
    answer: 0,
    explain: "uname -rは現在動作しているカーネルのバージョンを表示します。uname -aとするとシステム全体の情報を確認できます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムを即座に再起動するコマンドとして適切なものはどれか。",
    choices: ["reboot", "halt", "poweroff", "logout"],
    answer: 0,
    explain: "rebootはシステムを即座に再起動します。haltは停止、poweroffは電源を切る点で動作が異なります。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "起動時のログを記録し、後から確認できるsystemdのコマンドはどれか。",
    choices: ["journalctl", "dmesg -c", "last", "history"],
    answer: 0,
    explain: "journalctlはsystemdのジャーナル(ログ)を参照するコマンドです。起動時のメッセージも「journalctl -b」で確認できます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "ハードウェアの割り込み要求(IRQ)の使用状況を確認できるファイルはどれか。",
    choices: ["/proc/interrupts", "/proc/meminfo", "/proc/version", "/proc/mounts"],
    answer: 0,
    explain: "/proc/interruptsには各デバイスが使用しているIRQ番号と割り込み回数が記録されています。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "USBデバイスの接続状況を確認するコマンドはどれか。",
    choices: ["lsusb", "lspci", "lsblk", "lsof"],
    answer: 0,
    explain: "lsusbは接続されているUSBデバイスの一覧とその詳細を表示します。lsofは開いているファイルの一覧を表示するコマンドです。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "カーネルモジュールをロードするコマンドはどれか。",
    choices: ["modprobe", "insmod", "どちらも使われる", "rmmod"],
    answer: 2,
    explain: "modprobeとinsmodはどちらもモジュールをロードできますが、modprobeは依存関係を解決してくれるため一般的にはこちらが推奨されます。rmmodはモジュールを削除するコマンドです。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "aptでシステム上のパッケージ情報を最新のリポジトリ情報に更新するコマンドはどれか。",
    choices: ["apt update", "apt upgrade", "apt install", "apt autoremove"],
    answer: 0,
    explain: "apt updateはリポジトリのパッケージ一覧(メタデータ)を最新化します。実際のパッケージ本体を更新するのはapt upgradeです。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "不要になった依存パッケージを一括で削除するaptのサブコマンドはどれか。",
    choices: ["apt autoremove", "apt purge", "apt clean", "apt list"],
    answer: 0,
    explain: "apt autoremoveは他のパッケージから依存されなくなったパッケージを自動的に削除します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "rpmパッケージをインストール済みの状態から確認せず強制的にインストールするオプションはどれか。",
    choices: ["--force", "--test", "--nodeps", "-q"],
    answer: 0,
    explain: "--forceは既存ファイルとの衝突チェックなどを無視して強制的にインストールします。依存関係を無視する場合は--nodepsを使います。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "dpkgパッケージのインストール状況(選択状態)を一覧するコマンドはどれか。",
    choices: ["dpkg --get-selections", "dpkg -c", "dpkg -x", "dpkg --configure"],
    answer: 0,
    explain: "dpkg --get-selectionsはパッケージごとのインストール選択状態(install/deinstall等)を一覧表示します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "aptのリポジトリ情報が記載されている設定ファイルはどれか。",
    choices: ["/etc/apt/sources.list", "/etc/yum.conf", "/etc/dpkg/dpkg.cfg", "/etc/hosts"],
    answer: 0,
    explain: "/etc/apt/sources.listにはパッケージ取得先のリポジトリURLが記載されています。関連する追加設定は/etc/apt/sources.list.d/にも置かれます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "rpmでパッケージに含まれるファイルの改ざんの有無を検証するオプションはどれか。",
    choices: ["-V", "-e", "-U", "-i"],
    answer: 0,
    explain: "rpm -Vはインストール済みパッケージのファイルサイズやパーミッションなどを検証し、変更があれば表示します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "特定のパッケージがどのリポジトリから提供されているか調べるyum/dnfのサブコマンドはどれか。",
    choices: ["repoquery", "provides", "list installed", "clean all"],
    answer: 0,
    explain: "dnf repoquery(またはyum repoquery)は指定したパッケージがどのリポジトリに存在するかなどの情報を確認できます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "ソースコードからソフトウェアをインストールする際の一般的な手順の順序として正しいものはどれか。",
    choices: [
      "./configure → make → make install",
      "make install → ./configure → make",
      "make → ./configure → make install",
      "make install → make → ./configure"
    ],
    answer: 0,
    explain: "一般的には環境を確認するconfigure、コンパイルするmake、インストールするmake installの順に実行します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "Debian系でローカルの.debファイルの依存関係を自動解決しつつインストールするコマンドはどれか。",
    choices: ["apt install ./package.deb", "dpkg -c package.deb", "dpkg -l", "apt-cache show"],
    answer: 0,
    explain: "apt install ./package.debとすることで、ローカルの.debファイルでも依存関係を自動解決しながらインストールできます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "共有ライブラリの依存関係情報を管理し、キャッシュを更新するコマンドはどれか。",
    choices: ["ldconfig", "ldd", "nm", "strip"],
    answer: 0,
    explain: "ldconfigは共有ライブラリのキャッシュ(ld.so.cache)を更新します。lddは実行ファイルが依存するライブラリを表示するコマンドです。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "テキストの指定した列(フィールド)だけを抜き出すコマンドはどれか。",
    choices: ["cut", "paste", "join", "split"],
    answer: 0,
    explain: "cutは行の中から指定した文字位置やフィールド(区切り文字で分けた列)を抜き出します。「-f」で列番号、「-d」で区切り文字を指定します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "連続する重複行をまとめる、または重複行を検出するコマンドはどれか。",
    choices: ["uniq", "sort", "wc", "diff"],
    answer: 0,
    explain: "uniqは隣接する重複行をまとめます。事前にsortしておかないと離れた場所にある重複行はまとめられません。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "2つのファイルの差分を表示するコマンドはどれか。",
    choices: ["diff", "cmp", "comm", "patch"],
    answer: 0,
    explain: "diffは2つのファイルの内容を比較し、行単位での差分を表示します。cmpはバイト単位での比較、patchはdiffの結果を適用するコマンドです。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "標準入力から受け取った引数を使って別のコマンドを実行するコマンドはどれか。",
    choices: ["xargs", "tee", "exec", "eval"],
    answer: 0,
    explain: "xargsは標準入力から受け取った文字列を引数として、指定したコマンドに渡して実行します。「find . | xargs rm」のような使い方が代表的です。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "ファイルの先頭部分だけを表示するコマンドはどれか。",
    choices: ["head", "tail", "less", "more"],
    answer: 0,
    explain: "headはファイルの先頭(デフォルト10行)を表示します。末尾を見たい場合はtailを使います。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "ログファイルなどをリアルタイムで追跡し、追記される内容を表示し続けるオプションはどれか。",
    choices: ["tail -f", "head -f", "cat -f", "less -f"],
    answer: 0,
    explain: "tail -fはファイルの末尾を表示した後、ファイルに追記された内容をリアルタイムで表示し続けます。ログの監視によく使われます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "正規表現を使ってパターンにマッチする行を拡張的に検索したい場合のgrepオプションはどれか。",
    choices: ["-E", "-c", "-v", "-l"],
    answer: 0,
    explain: "grep -E(またはegrep)は拡張正規表現を使用できるようにします。-vはマッチしない行を表示、-cはマッチ数のカウントです。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "コマンドの実行結果を数値的に処理し、列ごとの集計なども行えるテキスト処理言語はどれか。",
    choices: ["awk", "sed", "grep", "cut"],
    answer: 0,
    explain: "awkはフィールドごとにテキストを処理できるプログラミング言語で、集計や条件処理など柔軟なテキスト加工が可能です。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "コマンド履歴を表示するコマンドはどれか。",
    choices: ["history", "last", "who", "w"],
    answer: 0,
    explain: "historyは現在のシェルセッションで実行したコマンドの履歴を表示します。lastはログイン履歴を表示するコマンドです。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "現在実行中のプロセスをリアルタイムに監視し、CPU使用率順などで表示するコマンドはどれか。",
    choices: ["top", "ps", "jobs", "bg"],
    answer: 0,
    explain: "topは実行中のプロセスをリアルタイムに更新しながら一覧表示します。psは特定時点のプロセス状態をスナップショットとして表示します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルのパーミッションを数値(8進数)で変更するコマンドの例として正しいものはどれか。",
    choices: ["chmod 755 file.txt", "chown 755 file.txt", "chgrp 755 file.txt", "umask 755 file.txt"],
    answer: 0,
    explain: "chmod 755のように8進数でパーミッション(所有者rwx、グループr-x、その他r-x)を指定できます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "新規に作成するファイルのデフォルトパーミッションを制御する値はどれか。",
    choices: ["umask", "chmod", "chown", "setuid"],
    answer: 0,
    explain: "umaskは新規作成されるファイルやディレクトリから、デフォルトで除外されるパーミッションビットを設定します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "スワップ領域として使用するパーティションを有効化するコマンドはどれか。",
    choices: ["swapon", "swapoff", "mkswap", "fdisk"],
    answer: 0,
    explain: "swaponはスワップ領域を有効にします。事前にmkswapでスワップ用のフォーマットをしておく必要があります。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ディレクトリやファイルの実行者権限を一時的に所有者権限に変更する特殊なパーミッションビットはどれか。",
    choices: ["SUID", "スティッキービット", "ACL", "umask"],
    answer: 0,
    explain: "SUID(Set User ID)が設定された実行ファイルは、実行したユーザーに関わらず所有者の権限で動作します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "/tmpディレクトリのように、誰でも作成できるが他人のファイルは削除できないようにする特殊なパーミッションはどれか。",
    choices: ["スティッキービット", "SUID", "SGID", "umask"],
    answer: 0,
    explain: "スティッキービットが設定されたディレクトリでは、ファイルの所有者以外は削除・リネームができなくなります。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルシステムの種類やマウントオプションを一時的に変更(再マウント)する際に使うコマンドはどれか。",
    choices: ["mount -o remount", "umount -f", "fsck -y", "mkfs -t"],
    answer: 0,
    explain: "mount -o remountは既にマウントされているファイルシステムのオプションを、アンマウントせずに変更できます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "現在マウントされているファイルシステムの一覧を確認できるファイルはどれか。",
    choices: ["/proc/mounts", "/proc/version", "/proc/cpuinfo", "/proc/uptime"],
    answer: 0,
    explain: "/proc/mountsには現在マウントされているファイルシステムの一覧がリアルタイムに反映されます。mountコマンドの出力もここを参照しています。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "論理ボリュームマネージャ(LVM)で、ボリュームグループの一覧を表示するコマンドはどれか。",
    choices: ["vgdisplay", "lvdisplay", "pvdisplay", "vgcreate"],
    answer: 0,
    explain: "vgdisplayはボリュームグループ(VG)の情報を表示します。物理ボリュームはpvdisplay、論理ボリュームはlvdisplayで確認します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルシステムの種類をext4からext3などへ変更する場合に関係するコマンドはどれか。",
    choices: ["tune2fs", "fsck", "mount", "df"],
    answer: 0,
    explain: "tune2fsはext系ファイルシステムの属性を変更するコマンドで、ジャーナリングの有効・無効化などに使われます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "指定したディレクトリ以下のファイルサイズの合計を表示するコマンドはどれか。",
    choices: ["du -sh", "df -h", "wc -l", "ls -la"],
    answer: 0,
    explain: "du -shは指定したディレクトリ以下のファイルサイズ合計を人間に読みやすい単位で表示します。df -hはファイルシステム全体の空き容量を表示します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "GRUB2の設定ファイルとして正しいものはどれか。",
    choices: ["/etc/grub.conf", "/boot/grub/grub.cfg", "/etc/lilo.conf", "/boot/vmlinuz"],
    answer: 1,
    explain: "GRUB2は/boot/grub/grub.cfgを設定ファイルとして使用します。このファイルは直接編集せず、/etc/default/grubを編集して再生成するのが基本です。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "GRUB2の設定ファイルを自動生成するコマンドはどれか。",
    choices: ["grub-install", "grub-mkconfig", "grub-md5-crypt", "mkinitrd"],
    answer: 1,
    explain: "grub-mkconfig(Debian系ではupdate-grub)で/boot/grub/grub.cfgを再生成します。grub-installはブートローダ本体をディスクに書き込むコマンドです。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "カーネルが起動時に出力したメッセージを表示するコマンドはどれか。",
    choices: ["lastlog", "dmesg", "uptime", "vmstat"],
    answer: 1,
    explain: "dmesgはカーネルのリングバッファに記録されたメッセージを表示します。ハードウェア認識の状況を確認する際によく使われます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "カーネルが認識しているデバイス情報を階層構造で提供する仮想ファイルシステムはどれか。",
    choices: ["/sys", "/tmp", "/srv", "/opt"],
    answer: 0,
    explain: "/sys(sysfs)はデバイスやドライバの情報をツリー構造で提供します。/procがプロセス中心なのに対し、/sysはデバイス中心の情報を扱います。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "デバイスの接続に応じて/dev以下のデバイスファイルを動的に作成する仕組みはどれか。",
    choices: ["cron", "udev", "syslog", "inetd"],
    answer: 1,
    explain: "udevはカーネルからのイベントを受け取り、デバイスファイルを動的に作成・削除します。USBメモリの抜き差しなどに対応できます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "systemdでサービスをシステム起動時に自動起動する設定にするコマンドはどれか。",
    choices: ["systemctl start", "systemctl enable", "systemctl mask", "systemctl reload"],
    answer: 1,
    explain: "systemctl enableは自動起動を有効化します。startはその場での起動のみで、再起動後には反映されません。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "SysVinit環境でデフォルトのランレベルが定義されていた設定ファイルはどれか。",
    choices: ["/etc/inittab", "/etc/fstab", "/etc/passwd", "/etc/profile"],
    answer: 0,
    explain: "/etc/inittabにはデフォルトのランレベルや各ランレベルでの動作が定義されていました。systemd環境ではターゲットに置き換えられています。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システム稼働中にランレベルを変更するコマンドはどれか。",
    choices: ["runlevel", "telinit", "sysctl", "chkconfig"],
    answer: 1,
    explain: "telinit(またはinit)に数字を渡すことで稼働中にランレベルを切り替えられます。runlevelは確認のみを行うコマンドです。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "搭載メモリ量や使用状況が記録されている仮想ファイルはどれか。",
    choices: ["/proc/cpuinfo", "/proc/meminfo", "/proc/mounts", "/proc/interrupts"],
    answer: 1,
    explain: "/proc/meminfoには物理メモリの総量、空き容量、スワップの使用状況などが記録されています。freeコマンドもこの情報を参照しています。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "管理者が独自に作成・変更したsystemdのユニットファイルを配置する標準的なディレクトリはどれか。",
    choices: ["/lib/systemd/system", "/etc/systemd/system", "/var/systemd", "/usr/share/systemd"],
    answer: 1,
    explain: "/etc/systemd/systemは管理者が設定するユニットファイルの配置場所で、/lib配下のディストリビューション提供分より優先されます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "指定したファイルがどのRPMパッケージに含まれているかを調べるオプションはどれか。",
    choices: ["rpm -ql", "rpm -qi", "rpm -qf", "rpm -qa"],
    answer: 2,
    explain: "rpm -qf ファイルパス で、そのファイルを提供しているパッケージ名を表示します。逆にパッケージからファイル一覧を見るのは-qlです。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "rpmでパッケージをアップグレードし、未インストールなら新規インストールも行うオプションはどれか。",
    choices: ["-i", "-U", "-F", "-e"],
    answer: 1,
    explain: "-U(--upgrade)はアップグレードを行い、未インストールの場合は新規インストールします。-F(--freshen)はインストール済みの場合のみ更新します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "指定したファイルがどのDebianパッケージに属するかを調べるコマンドはどれか。",
    choices: ["dpkg -S", "dpkg -L", "dpkg -l", "dpkg -i"],
    answer: 0,
    explain: "dpkg -S ファイルパス でそのファイルを提供するパッケージを検索します。dpkg -L はパッケージに含まれるファイル一覧を表示します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "リポジトリ内のパッケージをキーワードで検索するコマンドはどれか。",
    choices: ["apt-cache search", "apt-cache depends", "apt-get clean", "dpkg --configure"],
    answer: 0,
    explain: "apt-cache searchはパッケージ名や説明文からキーワードにマッチするパッケージを検索します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "指定したパッケージが依存しているパッケージを一覧表示するコマンドはどれか。",
    choices: ["apt-cache search", "apt-cache depends", "apt-cache stats", "apt-get autoclean"],
    answer: 1,
    explain: "apt-cache dependsは対象パッケージの依存関係を表示します。逆に「そのパッケージに依存しているもの」はapt-cache rdependsで確認します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "ダウンロード済みのパッケージファイルを削除してディスク領域を解放するコマンドはどれか。",
    choices: ["apt update", "apt clean", "apt autoremove", "apt purge"],
    answer: 1,
    explain: "apt cleanは/var/cache/apt/archives配下にキャッシュされた.debファイルを削除します。autoremoveは不要な依存パッケージの削除です。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "実行ファイルが依存している共有ライブラリを一覧表示するコマンドはどれか。",
    choices: ["ldd", "ldconfig", "nm", "objdump"],
    answer: 0,
    explain: "ldd 実行ファイル で必要な共有ライブラリとその解決先を表示します。ldconfigはライブラリのキャッシュを更新するコマンドです。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "共有ライブラリの検索パスを追加設定するファイルはどれか。",
    choices: ["/etc/ld.so.conf", "/etc/profile", "/etc/fstab", "/etc/hosts"],
    answer: 0,
    explain: "/etc/ld.so.conf(および/etc/ld.so.conf.d/配下)に検索パスを記述し、ldconfigを実行することでキャッシュに反映されます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "RPMパッケージからファイルを展開して取り出す際に使うコマンドはどれか。",
    choices: ["rpm2cpio", "rpmbuild", "rpm -e", "rpm -V"],
    answer: 0,
    explain: "rpm2cpioでRPMをcpio形式に変換し、cpioコマンドと組み合わせてインストールせずにファイルを取り出せます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "パッケージ構成の変更(削除を伴う更新)も許可してシステム全体を更新するaptのサブコマンドはどれか。",
    choices: ["apt upgrade", "apt dist-upgrade", "apt install", "apt list"],
    answer: 1,
    explain: "apt dist-upgrade(apt full-upgrade)は依存関係の解決のために既存パッケージの削除も行いながら更新します。apt upgradeは削除を伴う更新は行いません。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "実行中のプロセスにシグナルを送って終了させるコマンドはどれか。",
    choices: ["stop", "kill", "end", "halt"],
    answer: 1,
    explain: "killはプロセスIDを指定してシグナルを送ります。プロセス名で指定する場合はkillallやpkillを使います。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "プロセスを強制終了させるシグナル(SIGKILL)の番号はどれか。",
    choices: ["1", "9", "15", "20"],
    answer: 1,
    explain: "SIGKILLは番号9で、プロセスに割り込みを許さず強制終了させます。15はSIGTERMで、終了処理を行う余地を与える通常の終了シグナルです。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "コマンドを優先度(nice値)を指定して実行するコマンドはどれか。",
    choices: ["nice", "renice", "top", "nohup"],
    answer: 0,
    explain: "niceは起動時に優先度を指定します。すでに動作中のプロセスの優先度を変更する場合はreniceを使います。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "バックグラウンドで動作中のジョブをフォアグラウンドに切り替えるコマンドはどれか。",
    choices: ["bg", "fg", "jobs", "disown"],
    answer: 1,
    explain: "fgはバックグラウンドジョブを前面に移します。bgは逆に停止中のジョブをバックグラウンドで再開させます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "ログアウト後もコマンドの実行を継続させるコマンドはどれか。",
    choices: ["nohup", "bg", "exec", "wait"],
    answer: 0,
    explain: "nohupを付けて実行すると、ハングアップシグナル(SIGHUP)を無視するため、ログアウト後も処理が継続します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "標準エラー出力だけをファイルにリダイレクトする記述はどれか。",
    choices: ["1> file", "2> file", "&> file", "< file"],
    answer: 1,
    explain: "標準エラー出力のファイルディスクリプタは2なので「2> file」と記述します。1は標準出力、「&>」は両方をまとめてリダイレクトします。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "複数のファイルを1つのアーカイブファイルにまとめるコマンドはどれか。",
    choices: ["gzip", "tar", "bzip2", "xz"],
    answer: 1,
    explain: "tarは複数のファイルを1つにまとめるアーカイブコマンドです。圧縮そのものはgzipやbzip2が担い、tarの-zや-jオプションで連携できます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "gzipで圧縮されたファイルを展開するコマンドとして正しいものはどれか。",
    choices: ["gzip -d", "gzip -c", "gzip -9", "gzip -l"],
    answer: 0,
    explain: "gzip -d(またはgunzip)で展開します。-cは標準出力への書き出し、-9は最高圧縮率の指定です。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "コマンドの使い方を記載したオンラインマニュアルを表示するコマンドはどれか。",
    choices: ["man", "info", "help", "どれも使える"],
    answer: 3,
    explain: "manは最も一般的なマニュアル表示コマンドですが、GNUツールではinfo、シェル組み込みコマンドではhelpも使われます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "キーワードからマニュアルページを検索するコマンドはどれか。",
    choices: ["whatis", "apropos", "which", "whereis"],
    answer: 1,
    explain: "aproposはキーワードにマッチするマニュアルページを検索します(man -kと同等)。whatisはコマンド名から簡単な説明を1行表示します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "パーティション上に新しくファイルシステムを作成するコマンドはどれか。",
    choices: ["fsck", "mkfs", "mount", "blkid"],
    answer: 1,
    explain: "mkfsは指定したデバイスにファイルシステムを作成(フォーマット)します。-tオプションでext4やxfsなど種類を指定します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ブロックデバイスのUUIDやファイルシステムの種類を表示するコマンドはどれか。",
    choices: ["blkid", "lsmod", "dmesg", "sync"],
    answer: 0,
    explain: "blkidは各デバイスのUUIDやラベル、ファイルシステム種別を表示します。/etc/fstabでUUID指定する際に役立ちます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "locateコマンドが使用する検索用データベースを更新するコマンドはどれか。",
    choices: ["updatedb", "makewhatis", "ldconfig", "sync"],
    answer: 0,
    explain: "updatedbはファイルパスのデータベースを作り直します。locateはこのデータベースを検索するため、直前に作成したファイルは見つからないことがあります。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ユーザーごとのディスク使用量を制限する仕組みはどれか。",
    choices: ["クォータ", "スワップ", "マウント", "ジャーナル"],
    answer: 0,
    explain: "クォータ(quota)機能でユーザーやグループごとにディスク使用量やファイル数の上限を設定できます。設定はedquota、確認はrepquotaを使います。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "システムのログファイルが標準的に格納されるディレクトリはどれか。",
    choices: ["/var/log", "/etc/log", "/usr/log", "/tmp/log"],
    answer: 0,
    explain: "/var/logにはsyslogやauth.logなど各種ログファイルが格納されます。/varは頻繁に内容が変化するデータを置くディレクトリです。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "管理者が独自に導入したソフトウェアを配置する標準的なディレクトリはどれか。",
    choices: ["/usr/bin", "/usr/local", "/bin", "/sbin"],
    answer: 1,
    explain: "/usr/localはディストリビューションのパッケージ管理外で、管理者が独自に導入したソフトウェアを配置する場所です。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "/etc/fstabに記載されたファイルシステムをまとめてマウントするコマンドはどれか。",
    choices: ["mount -a", "mount -o", "mount -t", "mount -r"],
    answer: 0,
    explain: "mount -aは/etc/fstabに記載されたエントリのうち、noautoが指定されていないものを一括でマウントします。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "所有者に実行権限を追加するchmodのシンボリック記法はどれか。",
    choices: ["chmod u+x file", "chmod g+x file", "chmod o+x file", "chmod a-x file"],
    answer: 0,
    explain: "uは所有者(user)、gはグループ、oはその他、aは全てを表します。+は権限の追加、-は削除、=は指定した権限への置き換えです。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ハードリンクに関する制約として正しいものはどれか。",
    choices: [
      "別のファイルシステムをまたいで作成できない",
      "同じディレクトリ内にしか作成できない",
      "元ファイルを削除すると必ず参照できなくなる",
      "テキストファイルにしか作成できない"
    ],
    answer: 0,
    explain: "ハードリンクは同じinodeを共有するため、別のファイルシステムをまたいで作成できません。またディレクトリに対しても通常は作成できません。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルの種類(テキスト、バイナリ、画像など)を判別するコマンドはどれか。",
    choices: ["stat", "file", "type", "ls -F"],
    answer: 1,
    explain: "fileはファイルの内容を解析して種類を判定します。statはファイルのサイズや更新日時などのメタ情報を表示するコマンドです。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "コンピュータの起動時、UEFIがGPT形式のディスクから起動対象を探す際に参照するパーティションはどれか。",
    choices: ["EFIシステムパーティション", "スワップパーティション", "拡張パーティション", "ブートパーティション(BIOS boot)"],
    answer: 0,
    explain: "UEFIはEFIシステムパーティション(ESP)にあるブートローダーを読み込んで起動します。BIOS方式のMBRとは異なる仕組みです。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "ノートPCなどでバッテリー情報を確認できる仮想ファイルが置かれる場所はどれか。",
    choices: ["/sys/class/power_supply", "/proc/cpuinfo", "/etc/power", "/dev/battery"],
    answer: 0,
    explain: "/sys/class/power_supply配下にバッテリーやACアダプタの状態を示すファイルが存在します。/sysはデバイスの状態を表す仮想ファイルシステムです。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "接続されたブロックデバイス(ディスク)の一覧をツリー状に表示するコマンドはどれか。",
    choices: ["lsblk", "lscpu", "lsusb", "lsattr"],
    answer: 0,
    explain: "lsblkはブロックデバイスとそのパーティション構成をツリー形式で表示します。マウントポイントも同時に確認できます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "CPUの情報(コア数、アーキテクチャなど)を整理して表示するコマンドはどれか。",
    choices: ["lscpu", "lspci", "lsblk", "lsmod"],
    answer: 0,
    explain: "lscpuはCPUのアーキテクチャ、コア数、ソケット数などを整理して表示します。/proc/cpuinfoよりも読みやすい形式です。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムの稼働時間や平均負荷(ロードアベレージ)を確認できるコマンドはどれか。",
    choices: ["uptime", "date", "cal", "who"],
    answer: 0,
    explain: "uptimeはシステムの起動からの経過時間と、直近1分・5分・15分の平均負荷を表示します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "systemdでサービスの自動起動を無効化しつつ、手動での起動も禁止するコマンドはどれか。",
    choices: ["systemctl mask", "systemctl disable", "systemctl stop", "systemctl reload"],
    answer: 0,
    explain: "systemctl maskは対象ユニットを/dev/nullにシンボリックリンクし、手動起動も含めて完全に起動できなくします。disableは自動起動のみを無効化します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムのメッセージログを一元的に管理するsystemdの仕組みはどれか。",
    choices: ["journald", "syslog-ng", "rsyslog", "klogd"],
    answer: 0,
    explain: "systemd-journald(journald)はカーネルやサービスのログをバイナリ形式で一元管理し、journalctlで参照します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "GRUBの起動メニューで、一時的にカーネルパラメータを編集したい場合に使うキーはどれか。",
    choices: ["e", "c", "r", "Tab(環境によりeやcの場合あり)"],
    answer: 3,
    explain: "GRUB2のメニュー画面では一般的に「e」で編集モード、「c」でコマンドラインに入れますが、バージョンや設定により多少異なります。試験ではeでの編集がよく問われます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "カーネルパラメータを実行時に変更・確認するコマンドはどれか。",
    choices: ["sysctl", "systemctl", "modprobe", "insmod"],
    answer: 0,
    explain: "sysctlは/proc/sys以下のカーネルパラメータを表示・変更します。永続化するには/etc/sysctl.confに記述します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムの起動に問題がある場合、シングルユーザーモードで起動する目的として適切なものはどれか。",
    choices: [
      "最小限のサービスのみで起動し、トラブルシューティングを行う",
      "ネットワークサービスをすべて有効にする",
      "GUIログイン画面を表示する",
      "複数ユーザーの同時ログインを許可する"
    ],
    answer: 0,
    explain: "シングルユーザーモードは最小限のサービスだけを起動する保守用のモードで、システム修復やパスワードリセットなどに使われます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "カーネルモジュールとその依存関係の情報を保持するファイルはどれか。",
    choices: ["/lib/modules/<バージョン>/modules.dep", "/etc/modprobe.conf", "/proc/modules", "/etc/fstab"],
    answer: 0,
    explain: "modules.depには各モジュールの依存関係が記録されており、modprobeはこの情報を参照して依存モジュールも自動的にロードします。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "systemdでタイマーを使って定期的にジョブを実行する仕組みはどれか。",
    choices: ["systemdタイマーユニット(.timer)", "cron", "at", "anacron"],
    answer: 0,
    explain: "systemdには.timerユニットによるスケジューリング機能があり、cronと同様の定期実行が可能です。旧来の仕組みとしてcronやatも引き続き利用されます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "起動時にどのサービスが有効化されているか一覧表示するコマンドはどれか。",
    choices: ["systemctl list-unit-files", "systemctl status", "systemctl show", "systemctl cat"],
    answer: 0,
    explain: "systemctl list-unit-filesは各ユニットファイルの有効(enabled)・無効(disabled)状態を一覧表示します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "PCに搭載されたメモリのモジュール情報(スロットや容量)を確認するコマンドはどれか。",
    choices: ["dmidecode", "free", "vmstat", "lsblk"],
    answer: 0,
    explain: "dmidecodeはBIOS/UEFIが保持するハードウェア情報(メモリスロット構成やマザーボード情報など)を表示します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "起動時のカーネルパラメータを指定する代表的な設定箇所はどれか。",
    choices: ["GRUBのlinux行(またはGRUB_CMDLINE_LINUX)", "/etc/fstab", "/etc/hosts", "~/.bashrc"],
    answer: 0,
    explain: "起動時のカーネルパラメータはGRUBの設定(/etc/default/grubのGRUB_CMDLINE_LINUXなど)で指定し、update-grub等で反映します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "systemdのターゲットのうち、GUIログイン画面まで起動するものはどれか。",
    choices: ["graphical.target", "multi-user.target", "rescue.target", "poweroff.target"],
    answer: 0,
    explain: "graphical.targetはmulti-user.targetに加えてディスプレイマネージャなどGUI関連のサービスも起動します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムを保守モード(レスキューモード)で起動するsystemdターゲットはどれか。",
    choices: ["rescue.target", "graphical.target", "multi-user.target", "reboot.target"],
    answer: 0,
    explain: "rescue.targetは最小限のサービスとシングルユーザーシェルを提供する保守用のターゲットです。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "PCIデバイスに割り当てられたリソース(メモリアドレスやIRQ)を確認できるファイルはどれか。",
    choices: ["/proc/ioports", "/proc/version", "/proc/uptime", "/proc/loadavg"],
    answer: 0,
    explain: "/proc/ioportsには各デバイスに割り当てられたI/Oポートアドレスの範囲が記録されています。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "ホットプラグ対応デバイス(USBメモリなど)の抜き差しイベントを検知して処理するデーモンはどれか。",
    choices: ["udevd", "cron", "syslogd", "atd"],
    answer: 0,
    explain: "udevd(systemd-udevd)はカーネルから送られるueventを受け取り、デバイスファイルの作成・削除やルールの適用を行います。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "特定のsystemdユニットの設定内容(ユニットファイルの中身)をそのまま表示するコマンドはどれか。",
    choices: ["systemctl cat", "systemctl show", "systemctl list-units", "systemctl edit"],
    answer: 0,
    explain: "systemctl catはユニットファイルの内容をそのまま出力します。systemctl showはプロパティを詳細に表示します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "カーネルのバージョンだけでなく、コンパイル日時やホスト名なども含めて表示するunameのオプションはどれか。",
    choices: ["-a", "-r", "-m", "-s"],
    answer: 0,
    explain: "uname -aはカーネル名・ホスト名・バージョン・アーキテクチャなど全ての情報をまとめて表示します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムのプロセッサアーキテクチャ(x86_64など)を表示するunameのオプションはどれか。",
    choices: ["-m", "-r", "-n", "-v"],
    answer: 0,
    explain: "uname -mはハードウェアのアーキテクチャ(machine hardware name)を表示します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "systemdユニットファイルの中で、他のユニットより先に起動してほしい依存関係を示す設定項目はどれか。",
    choices: ["Before=", "After=", "Wants=", "Requires="],
    answer: 1,
    explain: "After=は指定したユニットの後に起動することを示します。Before=は逆に先に起動することを示す設定です。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "ハードウェアクロック(RTC)とシステムクロックの時刻を確認・同期するコマンドはどれか。",
    choices: ["hwclock", "date", "timedatectl", "hwclockとtimedatectlのどちらも使われる"],
    answer: 3,
    explain: "旧来はhwclockでハードウェアクロックを操作していましたが、systemd環境ではtimedatectlも広く使われます。試験では両方の存在を把握しておく必要があります。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "ディスクのパーティション分割において、/(ルート)とは別に/homeを分離する主な利点はどれか。",
    choices: [
      "OSの再インストール時にユーザーデータを保護しやすい",
      "起動速度が必ず倍になる",
      "パーミッションの概念が不要になる",
      "スワップが不要になる"
    ],
    answer: 0,
    explain: "/homeを独立させると、OS再インストール時に/homeをフォーマットせずに残せるため、ユーザーデータの保護がしやすくなります。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "物理ボリュームをLVMで利用可能な状態にするコマンドはどれか。",
    choices: ["pvcreate", "vgcreate", "lvcreate", "mkfs"],
    answer: 0,
    explain: "pvcreateは物理ディスクやパーティションをLVMの物理ボリューム(PV)として初期化します。その後vgcreateでボリュームグループを作成します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "LVMの論理ボリューム(LV)を作成するコマンドはどれか。",
    choices: ["lvcreate", "vgcreate", "pvcreate", "lvresize"],
    answer: 0,
    explain: "lvcreateはボリュームグループの中に論理ボリュームを作成します。作成後、mkfsでファイルシステムを構築して使用します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "GRUB Legacyの設定ファイルとして使われていたものはどれか。",
    choices: ["/boot/grub/menu.lst", "/boot/grub/grub.cfg", "/etc/default/grub", "/etc/lilo.conf"],
    answer: 0,
    explain: "GRUB Legacyでは/boot/grub/menu.lstが設定ファイルでした。GRUB2では/boot/grub/grub.cfgに置き換わっています。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "GRUB2でブートローダー本体をディスクのMBRなどにインストールするコマンドはどれか。",
    choices: ["grub-install", "grub-mkconfig", "update-grub", "grub-set-default"],
    answer: 0,
    explain: "grub-installはブートローダー本体を指定したデバイスに書き込みます。設定ファイルの生成はgrub-mkconfigが担当します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "共有ライブラリのバージョン管理に使われる、実体ファイル名の末尾に付く番号は何と呼ばれるか。",
    choices: ["SONAME", "GUID", "revision", "epoch"],
    answer: 0,
    explain: "共有ライブラリはlibfoo.so.1のような形式でSONAME(共有オブジェクト名)によりバージョン管理されます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "aptパッケージのインストール前に、実際には適用せず動作だけ確認する(シミュレーションする)オプションはどれか。",
    choices: ["--simulate(-s)", "--fix-broken", "--no-install-recommends", "--allow-downgrades"],
    answer: 0,
    explain: "apt-get -s(--simulate)は実際にはインストールせず、どのような処理が行われるかだけを表示します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "dpkgでインストール処理が中断したパッケージの設定を完了させるコマンドはどれか。",
    choices: ["dpkg --configure -a", "dpkg -r", "dpkg -P", "dpkg -i"],
    answer: 0,
    explain: "dpkg --configure -aは未設定のまま残っているパッケージの設定処理をまとめて完了させます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "RPMパッケージをビルドするためのSPECファイルの役割として正しいものはどれか。",
    choices: [
      "パッケージのビルド手順やメタ情報を定義する",
      "パッケージのインストール先を暗号化する",
      "リポジトリのURLを保持する",
      "依存パッケージを自動的に削除する"
    ],
    answer: 0,
    explain: "SPECファイルにはソースの場所、ビルド手順、依存関係、パッケージのメタ情報などが記述され、rpmbuildでこれを元にRPMパッケージを作成します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "YUM/DNFでパッケージグループ(複数パッケージのまとまり)をインストールするサブコマンドはどれか。",
    choices: ["groupinstall", "install", "reinstall", "localinstall"],
    answer: 0,
    explain: "yum groupinstall(dnf group install)は「開発ツール」などパッケージグループ単位でまとめてインストールできます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "コンテナ技術の説明として適切なものはどれか。",
    choices: [
      "ホストOSのカーネルを共有しながらプロセスやファイルシステムを分離する",
      "必ず専用のハードウェアが必要になる",
      "仮想マシンと全く同じ仕組みでゲストOSを完全に起動する",
      "ネットワークを利用できない"
    ],
    answer: 0,
    explain: "コンテナはホストOSのカーネルを共有しつつ、namespaceやcgroupsなどの機能でプロセスやリソースを分離する軽量な仮想化技術です。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "完全仮想化(フル仮想化)の特徴として正しいものはどれか。",
    choices: [
      "ゲストOSを一切変更せずにそのまま実行できる",
      "ゲストOSのカーネルを必ず改変する必要がある",
      "ホストOSと同じカーネルしか動作しない",
      "ハードウェアが一切不要になる"
    ],
    answer: 0,
    explain: "完全仮想化はハードウェアを仮想的にエミュレートするため、ゲストOSを変更せずにそのまま動作させられます。準仮想化はゲストOS側の対応が必要です。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "準仮想化(パラバーチャリゼーション)の特徴として正しいものはどれか。",
    choices: [
      "ゲストOSがハイパーバイザーを認識し、専用のドライバなどで連携する",
      "ゲストOSは一切変更せずに動作する",
      "ハードウェアエミュレーションを一切行わない完全仮想化と同義である",
      "コンテナと全く同じ仕組みである"
    ],
    answer: 0,
    explain: "準仮想化はゲストOSがハイパーバイザーの存在を認識し、専用のインターフェースを通じて効率よく動作する仮想化方式です。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "クラウド環境で仮想マシンを起動する際に使われる、事前設定済みのディスクイメージを指す用語はどれか。",
    choices: ["テンプレート(イメージ)", "スナップショット", "リビジョン", "パッチ"],
    answer: 0,
    explain: "クラウドでは事前に用意されたOSやアプリ構成済みのテンプレート(イメージ)から仮想マシンを起動することが一般的です。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "rpmパッケージのインストール時に、依存関係のチェックを無視して強制的に進めるオプションはどれか。",
    choices: ["--nodeps", "--force", "--test", "-q"],
    answer: 0,
    explain: "--nodepsは依存関係のチェックを無視します。ファイルの衝突などを無視する場合は--forceを使います。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "apt-get downloadのように、実際にはインストールせずパッケージファイルだけを取得する操作の用途として適切なものはどれか。",
    choices: [
      "オフライン環境へ後で手動転送してインストールするため",
      "パーミッションを変更するため",
      "スワップ領域を作成するため",
      "カーネルモジュールをロードするため"
    ],
    answer: 0,
    explain: "パッケージファイルだけ取得しておけば、ネットワークにつながらない別のマシンへ転送してインストールする、といった使い方ができます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "Debian系でパッケージの依存関係が壊れている場合に修復を試みるコマンドはどれか。",
    choices: ["apt-get install -f", "apt-get clean", "apt-get autoremove", "apt-get update"],
    answer: 0,
    explain: "apt-get install -f(--fix-broken)は依存関係が壊れたパッケージ構成を修復しようと試みます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "rpmパッケージの署名(GPG鍵)を検証するオプションはどれか。",
    choices: ["--checksig", "--nodeps", "-e", "-U"],
    answer: 0,
    explain: "rpm --checksigはパッケージのGPG署名やチェックサムを検証し、改ざんの有無を確認します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "Zypper(openSUSEなどで使われるパッケージ管理ツール)の基本的な役割として正しいものはどれか。",
    choices: [
      "RPMベースの高レベルパッケージ管理を行う",
      "Debianパッケージの管理を行う",
      "ソースコードのみを扱う",
      "コンテナイメージ専用のツールである"
    ],
    answer: 0,
    explain: "ZypperはRPMをベースとした高レベルパッケージ管理ツールで、依存関係の解決やリポジトリ管理を行います。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "ボリュームグループの空き容量を確認する際に使うLVM関連コマンドはどれか。",
    choices: ["vgs", "lvs", "pvs", "vgs、lvs、pvsいずれも状況確認に使う"],
    answer: 3,
    explain: "vgs・lvs・pvsはそれぞれボリュームグループ、論理ボリューム、物理ボリュームの状態を簡潔な一覧形式で表示します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "システムのインストール時に、スワップ用のパーティションを設ける主な目的はどれか。",
    choices: [
      "物理メモリが不足した際にディスクを補助記憶として使う",
      "起動速度を必ず高速化する",
      "パーティションの数を減らす",
      "ネットワーク設定を保存する"
    ],
    answer: 0,
    explain: "スワップ領域は物理メモリが不足した際に、一部のデータを一時的にディスクへ退避させるために使われます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "yum/dnfでインストール済みパッケージのうち更新可能なものを一覧表示するサブコマンドはどれか。",
    choices: ["check-update", "list installed", "info", "history"],
    answer: 0,
    explain: "yum check-update(dnf check-update)は現在インストールされているパッケージのうち、更新版が存在するものを一覧表示します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "パッケージの操作履歴(インストールや削除の記録)を確認できるdnfのサブコマンドはどれか。",
    choices: ["history", "repolist", "clean", "makecache"],
    answer: 0,
    explain: "dnf historyはこれまでのトランザクション(インストール・削除・更新)の履歴を表示し、undoで元に戻すことも可能です。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "パッケージ管理システムを介さずソースコードからインストールしたソフトウェアを、後から一括アンインストールする際に困ることとして適切なものはどれか。",
    choices: [
      "パッケージ管理システムに記録が残らず、関連ファイルの把握が難しい",
      "必ずシステムが起動しなくなる",
      "ネットワーク設定がすべて初期化される",
      "スワップ領域が自動的に削除される"
    ],
    answer: 0,
    explain: "make installなどでソースからインストールしたソフトウェアはパッケージ管理データベースに記録されないため、後からの管理やアンインストールが難しくなります。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "プロセスの実行優先度を示す値で、値が小さいほど優先度が高くなるものはどれか。",
    choices: ["nice値", "PID", "UID", "シグナル番号"],
    answer: 0,
    explain: "nice値は-20から19までの範囲を取り、値が小さいほど優先度が高くなります。一般ユーザーは正の値(優先度を下げる方向)しか設定できません。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "実行中のプロセスのnice値を変更するコマンドはどれか。",
    choices: ["renice", "nice", "chnice", "priority"],
    answer: 0,
    explain: "reniceは既に実行中のプロセスの優先度を変更します。起動時に優先度を指定する場合はniceコマンドを使います。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "拡張正規表現で「1文字以上の繰り返し」を表すメタ文字はどれか。",
    choices: ["+", "*", "?", "."],
    answer: 0,
    explain: "+は直前の文字が1回以上繰り返されることを表します。*は0回以上、?は0回か1回、.は任意の1文字を表します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "正規表現で行頭を表すメタ文字はどれか。",
    choices: ["^", "$", "\\\\", "|"],
    answer: 0,
    explain: "^は行頭を表すメタ文字です。行末を表すのは$で、これらはgrepなどの検索条件でよく使われます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "正規表現で行末を表すメタ文字はどれか。",
    choices: ["$", "^", "*", "+"],
    answer: 0,
    explain: "$は行末を表すメタ文字です。「end$」のように指定すると、行末が「end」で終わる行にマッチします。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "viエディタでコマンドモードからテキスト入力モードに切り替える代表的なキーはどれか。",
    choices: ["i", ":", "Esc", "/"],
    answer: 0,
    explain: "iキーでカーソル位置の前から入力モードに入ります。入力モードからコマンドモードに戻るにはEscキーを使います。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "viエディタで編集内容を保存して終了するコマンドはどれか。",
    choices: [":wq", ":q!", ":e", "/pattern"],
    answer: 0,
    explain: ":wqは変更を保存(write)してから終了(quit)します。保存せずに強制終了する場合は:q!を使います。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "viエディタで文字列を検索するコマンドの書式はどれか。",
    choices: ["/検索文字列", ":s/検索文字列", "i検索文字列", "dd検索文字列"],
    answer: 0,
    explain: "/に続けて文字列を入力すると、カーソル位置より下方向を検索します。上方向への検索は?を使います。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "現在設定されているシェル環境変数の一覧を表示するコマンドはどれか。",
    choices: ["env", "set", "envもsetも表示できる(範囲が異なる)", "export"],
    answer: 2,
    explain: "envはプロセスに引き継がれる環境変数のみを表示し、setはシェル変数も含めた全ての変数を表示します。範囲が異なる点に注意が必要です。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "シェル変数を環境変数として子プロセスに引き継がせるコマンドはどれか。",
    choices: ["export", "set", "unset", "env"],
    answer: 0,
    explain: "exportを付けて宣言した変数は環境変数となり、その後起動する子プロセスにも引き継がれます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "設定した環境変数を削除するコマンドはどれか。",
    choices: ["unset", "export", "env -u", "rm"],
    answer: 0,
    explain: "unset 変数名で、設定済みの環境変数やシェル変数を削除できます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "複数行にわたる入力をコマンドの標準入力として渡す「ヒアドキュメント」の開始記法はどれか。",
    choices: ["<<", "<", ">>", "|"],
    answer: 0,
    explain: "<<デリミタで開始し、同じデリミタが現れるまでの複数行を標準入力として渡すのがヒアドキュメントです。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "1行の文字列をそのまま標準入力として渡す「ヒア文字列」の記法はどれか。",
    choices: ["<<<", "<<", "<", "|"],
    answer: 0,
    explain: "<<<文字列という形式で、1行分の文字列をそのままコマンドの標準入力として渡せます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "コマンドの実行結果を別のコマンドの引数として直接埋め込む「コマンド置換」の記法はどれか。",
    choices: ["$(コマンド)", "${変数}", "$[コマンド]", "%(コマンド)"],
    answer: 0,
    explain: "$(コマンド)またはバッククォートで囲むことで、コマンドの実行結果をその場に展開できます(コマンド置換)。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "バックグラウンドで実行されているジョブの一覧を表示するコマンドはどれか。",
    choices: ["jobs", "ps", "top", "bg"],
    answer: 0,
    explain: "jobsは現在のシェルで管理しているバックグラウンド・停止中のジョブ一覧を表示します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "実行中のコマンドを一時停止させるキー操作はどれか。",
    choices: ["Ctrl+Z", "Ctrl+C", "Ctrl+D", "Ctrl+A"],
    answer: 0,
    explain: "Ctrl+Zはフォアグラウンドのプロセスを一時停止(サスペンド)し、シェルの操作に戻ります。再開するにはfgやbgを使います。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "実行中のプロセスを強制終了するキー操作はどれか。",
    choices: ["Ctrl+C", "Ctrl+Z", "Ctrl+D", "Ctrl+S"],
    answer: 0,
    explain: "Ctrl+CはフォアグラウンドのプロセスにSIGINTを送り、多くの場合プロセスを終了させます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "sedで文字列を置換する基本的な書式はどれか。",
    choices: ["sed 's/検索/置換/' file", "sed 'p/検索/置換/' file", "sed 'd/検索/置換/' file", "sed 'g/検索/置換/' file"],
    answer: 0,
    explain: "sed 's/検索文字列/置換文字列/'が基本の置換書式です。行末にgを付けると行内の全マッチを置換します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "grepで大文字小文字を区別せずに検索するオプションはどれか。",
    choices: ["-i", "-v", "-c", "-n"],
    answer: 0,
    explain: "grep -iは大文字・小文字を区別せずにパターンマッチングを行います。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "grepでマッチした行の行番号も一緒に表示するオプションはどれか。",
    choices: ["-n", "-i", "-v", "-l"],
    answer: 0,
    explain: "grep -nはマッチした行の行番号を一緒に表示します。複数ファイル検索時に-lを使うとファイル名のみ表示されます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "findコマンドで、見つけたファイルに対して直接コマンドを実行するオプションはどれか。",
    choices: ["-exec", "-name", "-type", "-size"],
    answer: 0,
    explain: "find . -exec コマンド {} \\; のように書くことで、見つけたファイルそれぞれに対してコマンドを実行できます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "パーティションを作成する際、GPT形式のディスクを操作できるコマンドはどれか。",
    choices: ["gdisk", "fdisk(バージョンによりGPT対応)", "gdiskとfdiskの両方が使われる", "mkfsのみ"],
    answer: 2,
    explain: "GPTディスクの操作にはgdiskが伝統的に使われますが、近年のfdiskもGPTに対応しています。試験ではどちらも扱われることを押さえておく必要があります。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "XFSファイルシステムを新規作成するコマンドはどれか。",
    choices: ["mkfs.xfs", "mkfs.ext4", "mkswap", "tune2fs"],
    answer: 0,
    explain: "mkfs.xfs(またはmkfs -t xfs)でXFS形式のファイルシステムを作成します。ext4系はmkfs.ext4を使います。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "Btrfsファイルシステムの特徴として正しいものはどれか。",
    choices: [
      "スナップショットやサブボリュームなどの高度な機能を持つ",
      "ジャーナリング機能を一切持たない",
      "Windows専用のファイルシステムである",
      "パーティション分割ができない"
    ],
    answer: 0,
    explain: "Btrfsはスナップショット、サブボリューム、内蔵のボリューム管理など、ext系にはない高度な機能を持つ次世代ファイルシステムです。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ext2からext3への主な変更点として正しいものはどれか。",
    choices: [
      "ジャーナリング機能が追加された",
      "パーミッション機能が追加された",
      "最大ファイルサイズの制限が撤廃された",
      "GPTのみに対応するようになった"
    ],
    answer: 0,
    explain: "ext3はext2にジャーナリング機能を追加したもので、不正終了時の復旧が速くなりました。ext4ではさらに拡張エクステントなどが追加されています。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルシステムをマウントする際、読み取り専用でマウントするオプションはどれか。",
    choices: ["-o ro", "-o rw", "-t", "-a"],
    answer: 0,
    explain: "mount -o roで読み取り専用マウントになります。読み書き両方を許可する場合は-o rwを指定(省略時のデフォルトの場合が多い)します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "CD-ROMやDVDなどで使われる光学メディア用のファイルシステムはどれか。",
    choices: ["ISO 9660", "ext4", "XFS", "Btrfs"],
    answer: 0,
    explain: "ISO 9660はCD-ROMなどの光学メディアで標準的に使われるファイルシステム規格です。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ユーザーのホームディレクトリのデフォルトパーミッションに影響する設定はどれか。",
    choices: ["umask", "chmod", "chown", "quota"],
    answer: 0,
    explain: "umaskの値によって、新規作成されるファイルやディレクトリのデフォルトパーミッションから除外されるビットが決まります。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルの所有グループを変更するコマンドはどれか。",
    choices: ["chgrp", "chown", "chmod", "usermod"],
    answer: 0,
    explain: "chgrpはファイルの所有グループを変更します。chownでも「chown :グループ名」の形式でグループ変更が可能です。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "SGID(Set Group ID)がディレクトリに設定された場合の効果として正しいものはどれか。",
    choices: [
      "そのディレクトリ内に作成されたファイルの所有グループが親ディレクトリと同じになる",
      "ファイルの削除が誰にもできなくなる",
      "実行ファイルが所有者権限で動作するようになる",
      "パーミッションが自動的に777になる"
    ],
    answer: 0,
    explain: "ディレクトリにSGIDを設定すると、その中に作成されるファイルやサブディレクトリの所有グループが、親ディレクトリの所有グループを継承します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "FHS(ファイルシステム階層標準)で、可変データ(ログやメール、キャッシュなど)を格納するディレクトリはどれか。",
    choices: ["/var", "/usr", "/opt", "/srv"],
    answer: 0,
    explain: "/varは頻繁に内容が変化する可変データ(ログ、メールスプール、キャッシュなど)を格納するためのディレクトリです。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "FHSで、システム管理者用のコマンドやバイナリが格納されるディレクトリはどれか。",
    choices: ["/sbin", "/bin", "/lib", "/opt"],
    answer: 0,
    explain: "/sbinには主にroot権限で使うシステム管理用のコマンドが格納されます。一般ユーザー向けのコマンドは/binに格納されます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "FHSで、サードパーティ製のアドオンアプリケーションソフトウェアを格納するディレクトリはどれか。",
    choices: ["/opt", "/var", "/proc", "/dev"],
    answer: 0,
    explain: "/optはパッケージ管理システムの外で提供される、追加のアプリケーションソフトウェアパッケージを格納する場所です。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "FHSで、システムが提供するサービス用のデータ(Webサーバーの公開データなど)を格納するディレクトリはどれか。",
    choices: ["/srv", "/var", "/opt", "/mnt"],
    answer: 0,
    explain: "/srvはWebサーバーやFTPサーバーなど、システムが提供するサービス関連のデータを格納するためのディレクトリです。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "取り外し可能なメディア(USBメモリなど)を一時的にマウントする標準的な場所はどれか。",
    choices: ["/media", "/mnt", "/tmp", "/var"],
    answer: 0,
    explain: "/mediaはリムーバブルメディアの自動マウント用に使われることが多く、/mntは管理者が手動で一時的にマウントする際によく使われます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルシステムの断片化状況やブロックサイズなど、詳細情報を表示するコマンドはどれか。",
    choices: ["dumpe2fs", "df", "du", "mount"],
    answer: 0,
    explain: "dumpe2fsはext系ファイルシステムのスーパーブロック情報やブロックグループの詳細を表示します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ユーザーごとのディスク使用量の制限値を設定するコマンドはどれか。",
    choices: ["edquota", "repquota", "quotacheck", "quotaon"],
    answer: 0,
    explain: "edquotaは対話的にユーザーやグループのディスク使用量の制限値を編集します。repquotaは使用状況の確認、quotaonはクォータ機能自体の有効化に使います。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "クォータ機能を利用する前に、ディスク使用量の集計データベースを初期作成するコマンドはどれか。",
    choices: ["quotacheck", "edquota", "quotaon", "repquota"],
    answer: 0,
    explain: "quotacheckはファイルシステムをスキャンして、クォータ管理用の使用量データベースを作成・更新します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "シンボリックリンクを作成するコマンドの書式として正しいものはどれか。",
    choices: ["ln -s 元ファイル リンク名", "ln 元ファイル リンク名", "cp -s 元ファイル リンク名", "mv -s 元ファイル リンク名"],
    answer: 0,
    explain: "ln -sでシンボリックリンクを作成します。-sを付けない場合はハードリンクが作成されます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "リンク先の実体パスをたどって表示するコマンドはどれか。",
    choices: ["readlink", "ln", "stat", "file"],
    answer: 0,
    explain: "readlinkはシンボリックリンクが指す実際のパスを表示します。-fオプションで多段階のリンクも最終的な実パスまでたどれます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルシステムを安全に取り外す前に、ディスクキャッシュの内容を書き出す(同期する)コマンドはどれか。",
    choices: ["sync", "umount", "mount", "fsck"],
    answer: 0,
    explain: "syncはメモリ上のディスクキャッシュ(バッファ)を実際のディスクへ書き出します。アンマウント前に実行されることがあります。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "FHSで、システムの起動に必要な最小限のプログラムやライブラリを格納するディレクトリはどれか。",
    choices: ["/bin と /lib", "/opt", "/srv", "/var"],
    answer: 0,
    explain: "/binと/libには、システム起動やシングルユーザーモードで必要となる最小限のコマンドと共有ライブラリが格納されます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ハードディスクのI/O統計情報(読み書きの回数や待ち時間など)を確認できるコマンドはどれか。",
    choices: ["iostat", "df", "du", "mount"],
    answer: 0,
    explain: "iostatはCPU使用率とあわせて、各デバイスのI/O統計情報を表示します。ディスクの性能診断に使われます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルシステムの空きinode数を確認する際に使うコマンドのオプションはどれか。",
    choices: ["df -i", "df -h", "du -h", "df -T"],
    answer: 0,
    explain: "df -iはファイルシステムごとのinodeの総数・使用数・空き数を表示します。inodeが枯渇するとディスク容量に余裕があってもファイルを作成できなくなります。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "systemdのユニットの種類として存在するものを2つ選べ。",
    choices: ["service", "timer", "package", "repository", "archive"],
    answer: [0, 1],
    explain: "systemdにはservice(サービス)、timer(タイマー)、mount、socketなど多くのユニット種別があります。packageやrepositoryはパッケージ管理の用語で、systemdのユニット種別ではありません。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "ハードウェア情報を確認するコマンドとして正しい組み合わせを2つ選べ。",
    choices: ["lspci", "lsusb", "aptitude", "dpkg", "yum"],
    answer: [0, 1],
    explain: "lspciとlsusbはそれぞれPCIデバイス・USBデバイスの情報を表示するハードウェア確認コマンドです。aptitude、dpkg、yumはパッケージ管理系のツールです。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "systemctlコマンドで使えるサブコマンドを2つ選べ。",
    choices: ["enable", "status", "grep", "chmod", "mount"],
    answer: [0, 1],
    explain: "systemctl enableやsystemctl statusはサービスの管理に使う代表的なサブコマンドです。grep、chmod、mountはそれぞれ独立した別のコマンドです。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "起動時のログやカーネルメッセージを確認できるコマンドを2つ選べ。",
    choices: ["dmesg", "journalctl", "chown", "fdisk", "tar"],
    answer: [0, 1],
    explain: "dmesgはカーネルのリングバッファ、journalctlはsystemdのジャーナルログを確認するコマンドです。chown・fdisk・tarはログ確認とは無関係のコマンドです。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "GRUB2に関連するファイルまたはコマンドを2つ選べ。",
    choices: ["/boot/grub/grub.cfg", "grub-mkconfig", "/etc/fstab", "mkswap", "quotaon"],
    answer: [0, 1],
    explain: "/boot/grub/grub.cfgはGRUB2の設定ファイル、grub-mkconfigはその設定ファイルを生成するコマンドです。/etc/fstab、mkswap、quotaonはいずれも別の用途のものです。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "Debian系のパッケージ管理コマンドを2つ選べ。",
    choices: ["apt", "dpkg", "rpm", "yum", "zypper"],
    answer: [0, 1],
    explain: "aptとdpkgはDebian系のパッケージ管理コマンドです。rpm・yum・zypperはRPM系ディストリビューションで使われます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "RPM系のパッケージ管理コマンドを2つ選べ。",
    choices: ["yum", "dnf", "apt-get", "dpkg", "aptitude"],
    answer: [0, 1],
    explain: "yumとdnfはRPM系(Red Hat系)ディストリビューションの高レベルパッケージ管理コマンドです。apt-get、dpkg、aptitudeはDebian系のツールです。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "仮想化の分類として存在するものを2つ選べ。",
    choices: ["完全仮想化", "準仮想化", "完全物理化", "準物理化", "分散仮想化"],
    answer: [0, 1],
    explain: "仮想化には完全仮想化(フル仮想化)と準仮想化(パラバーチャリゼーション)という代表的な分類があります。「完全物理化」「準物理化」「分散仮想化」はいずれも一般的な用語ではありません。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "LVM(論理ボリュームマネージャ)に関連するコマンドを2つ選べ。",
    choices: ["pvcreate", "lvcreate", "mkfs", "fsck", "chmod"],
    answer: [0, 1],
    explain: "pvcreateは物理ボリューム、lvcreateは論理ボリュームを作成するLVM専用のコマンドです。mkfs・fsck・chmodはLVMに限らず使われる一般的なコマンドです。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "rpmコマンドでパッケージの情報を確認する目的で使われるオプションを2つ選べ。",
    choices: ["-q", "-V", "-e", "-U", "-F"],
    answer: [0, 1],
    explain: "-q(問い合わせ)と-V(検証)は情報確認系のオプションです。-e(削除)、-U(アップグレード)、-F(更新)はパッケージの状態を変更する操作系のオプションです。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "テキストストリームを処理するフィルターコマンドを2つ選べ。",
    choices: ["grep", "sed", "chmod", "mount", "useradd"],
    answer: [0, 1],
    explain: "grepとsedはテキストの検索・置換を行うフィルターコマンドです。chmod、mount、useraddはテキスト処理とは異なる目的のコマンドです。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "プロセスに関連する操作で使うコマンドを2つ選べ。",
    choices: ["kill", "nice", "chgrp", "ln", "tar"],
    answer: [0, 1],
    explain: "killはシグナル送信、niceは優先度指定と、どちらもプロセスに関する操作です。chgrp、ln、tarはファイルやアーカイブに関するコマンドです。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "ジョブ制御に関連するシェルの機能・コマンドを2つ選べ。",
    choices: ["fg", "bg", "cut", "wc", "diff"],
    answer: [0, 1],
    explain: "fgとbgはバックグラウンド・フォアグラウンドのジョブを切り替えるジョブ制御関連のコマンドです。cut、wc、diffはテキスト処理系のコマンドです。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "ファイルの圧縮・アーカイブに関連するコマンドを2つ選べ。",
    choices: ["tar", "gzip", "grep", "sort", "find"],
    answer: [0, 1],
    explain: "tarはアーカイブ作成、gzipは圧縮を行うコマンドです。grep、sort、findはいずれも圧縮やアーカイブとは異なる用途のコマンドです。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "正規表現の基本的なメタ文字として存在するものを2つ選べ。",
    choices: ["^", "$", "&", "%", "@"],
    answer: [0, 1],
    explain: "^は行頭、$は行末を表す代表的な正規表現のメタ文字です。&、%、@は正規表現の基本的なメタ文字としては使われません。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルシステムの整合性確認や作成に関連するコマンドを2つ選べ。",
    choices: ["fsck", "mkfs", "chown", "grep", "top"],
    answer: [0, 1],
    explain: "fsckは整合性チェック、mkfsはファイルシステムの新規作成を行うコマンドです。chown、grep、topはファイルシステム管理とは異なる目的のコマンドです。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "リンクファイルの作成や実体確認に使うコマンドを2つ選べ。",
    choices: ["ln", "readlink", "cut", "sort", "wc"],
    answer: [0, 1],
    explain: "lnはリンクの作成、readlinkはシンボリックリンクの実体パス確認に使います。cut、sort、wcはテキスト処理系のコマンドです。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "特殊なパーミッションビットとして存在するものを2つ選べ。",
    choices: ["SUID", "スティッキービット", "umask", "ACL専用ビット", "ジャーナルビット"],
    answer: [0, 1],
    explain: "SUIDとスティッキービットは実際に存在する特殊パーミッションです(SGIDも該当)。umaskはビットそのものではなくデフォルト値の制御、後の2つは実在の用語ではありません。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ディスクの使用量やinode数を確認するコマンドを2つ選べ。",
    choices: ["df", "du", "chmod", "ln", "mv"],
    answer: [0, 1],
    explain: "dfはファイルシステム全体、duはディレクトリ単位のディスク使用量を確認します。chmod、ln、mvはディスク使用量の確認とは異なる操作です。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "FHSで定められた、可変データを格納するディレクトリとして正しいものを2つ選べ(サブディレクトリ含む)。",
    choices: ["/var", "/var/log", "/bin", "/lib", "/sbin"],
    answer: [0, 1],
    explain: "/varとそのサブディレクトリである/var/logは可変データを格納する場所です。/bin、/lib、/sbinは主に起動に必要な固定的なプログラムやライブラリを格納します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "BIOSのブート順序(起動デバイスの優先順位)を設定する場所として正しいものはどれか。",
    choices: ["BIOS/UEFIのセットアップ画面", "GRUBの設定ファイル", "/etc/fstab", "カーネルのコンパイルオプション"],
    answer: 0,
    explain: "起動デバイスの優先順位はBIOS/UEFIのセットアップ画面で設定します。OSが起動する前の段階の設定です。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムのブートプロセスにおいて、カーネルが最初に実行するプロセス(PID 1)として現在主流のものはどれか。",
    choices: ["systemd", "cron", "sshd", "bash"],
    answer: 0,
    explain: "多くの現代的なディストリビューションでは、カーネルが最初に起動するプロセス(PID 1)としてsystemdが使われます。従来はSysVinitのinitが使われていました。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムのシャットダウン処理で、各プロセスに終了を通知するために送られる標準的なシグナルはどれか。",
    choices: ["SIGTERM", "SIGKILL", "SIGSTOP", "SIGCONT"],
    answer: 0,
    explain: "シャットダウン時はまずSIGTERMを送り、プロセスに正常終了の機会を与えます。応答がない場合に強制終了のSIGKILLが送られることがあります。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムのメモリ使用状況(空き容量、使用量、スワップ状況)を簡潔に表示するコマンドはどれか。",
    choices: ["free", "top", "vmstat", "free、top、vmstatいずれも確認に使える"],
    answer: 3,
    explain: "free・top・vmstatはいずれもメモリ状況の確認に使われます。freeは簡潔な一覧、topはリアルタイム監視、vmstatは仮想メモリの統計情報という違いがあります。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "GRUB2で複数のOSがインストールされている場合に、選択可能なメニュー項目を管理する仕組みとして正しいものはどれか。",
    choices: [
      "/etc/grub.d/以下のスクリプトからgrub.cfgが生成される",
      "全てのOSの情報は/etc/fstabに記載する",
      "各OSごとに個別のGRUBをインストールする必要がある",
      "カーネルのバージョンごとに手動でパーティションを分ける必要がある"
    ],
    answer: 0,
    explain: "GRUB2では/etc/grub.d/以下の複数のスクリプトを元に、grub-mkconfigが最終的な設定ファイル(grub.cfg)を自動生成します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "systemdのターゲットの中で、ネットワークサービスを含む複数ユーザーのCLI環境を提供するものはどれか。",
    choices: ["multi-user.target", "graphical.target", "rescue.target", "emergency.target"],
    answer: 0,
    explain: "multi-user.targetはネットワークを含む複数ユーザー向けのCLI環境を提供します。GUIまで含めるのはgraphical.targetです。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムが正常に起動できない緊急時に、最小限の環境(ルートファイルシステムをマウントするのみ)で起動するsystemdターゲットはどれか。",
    choices: ["emergency.target", "multi-user.target", "graphical.target", "reboot.target"],
    answer: 0,
    explain: "emergency.targetはrescue.targetよりもさらに最小限の状態で起動し、ファイルシステムのマウントすら自動では行わない緊急用のモードです。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "デバイスドライバがロードされていないためにハードウェアが認識されない場合、まず確認すべきコマンドとして適切なものはどれか。",
    choices: ["lsmod と dmesg", "chmod と chown", "grep と sed", "tar と gzip"],
    answer: 0,
    explain: "lsmodでモジュールがロードされているか、dmesgでカーネルがそのデバイスを認識した際のログを確認するのが基本的な切り分け方法です。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "カーネルモジュールをアンロード(削除)するコマンドはどれか。",
    choices: ["rmmod", "insmod", "modprobe -a", "lsmod -r"],
    answer: 0,
    explain: "rmmodはロード済みのカーネルモジュールを削除します。依存関係も考慮して削除する場合はmodprobe -rも使われます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "起動時にファイルシステムのチェックが自動的に行われる仕組みに関連する設定はどれか。",
    choices: ["/etc/fstabのfsck順序(パス番号)", "/etc/hosts", "/etc/passwd", "~/.bash_profile"],
    answer: 0,
    explain: "/etc/fstabの最後のフィールド(fsck順序)で、起動時に各ファイルシステムをチェックする順序や有無を指定できます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "systemdでサービスの依存関係を「起動を要求するが失敗しても続行する」形で指定する設定項目はどれか。",
    choices: ["Wants=", "Requires=", "Before=", "Conflicts="],
    answer: 0,
    explain: "Wants=は緩やかな依存関係を示し、指定したユニットの起動に失敗しても自身は続行します。Requires=は厳密な依存関係で、失敗すると自身も失敗扱いになります。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムが正常にシャットダウンされなかった場合に、次回起動時に自動でファイルシステムをチェックする理由として適切なものはどれか。",
    choices: [
      "不正終了によりファイルシステムの整合性が損なわれた可能性があるため",
      "新しいカーネルをインストールするため",
      "パッケージのキャッシュをクリアするため",
      "ネットワーク設定を初期化するため"
    ],
    answer: 0,
    explain: "不正な終了(電源断など)があった場合、ファイルシステムの整合性が保証されないため、次回起動時に自動的にfsckが実行されることがあります。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "systemdでシステム全体のログ保存容量に上限を設定する場合に編集する設定ファイルはどれか。",
    choices: ["/etc/systemd/journald.conf", "/etc/systemd/system.conf", "/etc/fstab", "/etc/default/grub"],
    answer: 0,
    explain: "journald.confでジャーナルログの最大サイズや保存期間などを設定できます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "特定のsystemdユニットが依存しているユニットの一覧を確認するコマンドはどれか。",
    choices: ["systemctl list-dependencies", "systemctl list-units", "systemctl list-jobs", "systemctl list-sockets"],
    answer: 0,
    explain: "systemctl list-dependenciesは指定したユニットが依存している(または依存されている)ユニットをツリー状に表示します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムの起動時間を短縮するための調査に使われる、各サービスの起動にかかった時間を表示するコマンドはどれか。",
    choices: ["systemd-analyze blame", "systemctl status", "journalctl -b", "uptime"],
    answer: 0,
    explain: "systemd-analyze blameは各サービスの起動にかかった時間を一覧表示し、起動が遅い原因の調査に使われます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "現在ログインしているユーザーの一覧と、それぞれの端末・ログイン時刻を表示するコマンドはどれか。",
    choices: ["who", "whoami", "id", "groups"],
    answer: 0,
    explain: "whoは現在システムにログインしているユーザーの一覧、端末、ログイン時刻を表示します。whoamiは自分自身のユーザー名のみを表示します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "自分自身のユーザーIDやグループIDを確認するコマンドはどれか。",
    choices: ["id", "who", "last", "w"],
    answer: 0,
    explain: "idコマンドは実行したユーザーのUID、GID、所属グループの一覧を表示します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムの起動オプションを一時的に変更したい場合、GRUB2のメニューでカーネル行を編集した後に起動を実行するキーはどれか。",
    choices: ["Ctrl+X または F10", "Ctrl+C", "Ctrl+Z", "Ctrl+D"],
    answer: 0,
    explain: "GRUB2の編集画面では、一般にCtrl+XまたはF10で編集した内容のまま起動します。バージョンにより多少操作が異なる場合があります。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "ネットワークインターフェースの一覧や状態を確認する現在推奨されているコマンドはどれか。",
    choices: ["ip addr", "ifconfig(非推奨だが使われることもある)", "ip addrとifconfigの両方が使われる", "netstat"],
    answer: 2,
    explain: "近年はipコマンド(ip addr)が推奨されていますが、ifconfigも従来からの慣習で引き続き使われることがあります。LPICでは両方を把握しておく必要があります。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "システムインストール時のパーティション設計で、一般的に推奨される最小限の構成として適切なものはどれか。",
    choices: [
      "ルート(/)とスワップの2つ",
      "必ず10個以上のパーティションに分割する",
      "パーティションを1つも作らない",
      "スワップのみを作成する"
    ],
    answer: 0,
    explain: "最小構成としてはルート(/)パーティションとスワップの2つがあれば動作します。用途に応じて/home、/var、/bootなどを分離することもあります。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "システムのブート専用パーティション(/boot)を分離する主な理由として適切なものはどれか。",
    choices: [
      "ブートローダーがアクセスできる範囲や暗号化の制約に対応するため",
      "スワップ容量を増やすため",
      "ネットワーク速度を向上させるため",
      "パッケージのインストール速度を上げるため"
    ],
    answer: 0,
    explain: "/bootを分離すると、ブートローダーが認識しにくいファイルシステム(暗号化やLVMなど)を使う場合でも起動用ファイルにアクセスしやすくなります。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "LVMで既存の論理ボリュームのサイズを拡張するコマンドはどれか。",
    choices: ["lvextend", "lvcreate", "vgcreate", "pvcreate"],
    answer: 0,
    explain: "lvextendは既存の論理ボリュームのサイズを拡張します。拡張後はファイルシステム側もresize2fsなどでサイズを合わせる必要があります。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "LVMのボリュームグループに新しい物理ボリュームを追加するコマンドはどれか。",
    choices: ["vgextend", "vgcreate", "lvextend", "pvresize"],
    answer: 0,
    explain: "vgextendは既存のボリュームグループに新しい物理ボリュームを追加し、利用可能な容量を増やします。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "aptでパッケージの詳細情報(説明、バージョン、依存関係など)を表示するコマンドはどれか。",
    choices: ["apt show", "apt list", "apt search", "apt depends"],
    answer: 0,
    explain: "apt showは指定したパッケージの詳細情報(説明文、バージョン、依存関係、サイズなど)を表示します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "dpkgでパッケージに含まれるファイルの一覧を、インストール前(パッケージファイルの状態)で確認するオプションはどれか。",
    choices: ["dpkg -c", "dpkg -l", "dpkg -L", "dpkg -s"],
    answer: 0,
    explain: "dpkg -c パッケージ.debで、まだインストールしていない.debファイルの中身(含まれるファイル一覧)を確認できます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "rpmパッケージのインストール状況やパッケージ情報(概要)を表示するオプションはどれか。",
    choices: ["rpm -qi", "rpm -ql", "rpm -qf", "rpm -qc"],
    answer: 0,
    explain: "rpm -qiはパッケージの説明、バージョン、ベンダー情報などのサマリーを表示します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "yumのリポジトリ設定ファイルが格納される標準的なディレクトリはどれか。",
    choices: ["/etc/yum.repos.d/", "/etc/apt/", "/etc/dpkg/", "/etc/rpm/"],
    answer: 0,
    explain: "yumやdnfのリポジトリ設定は/etc/yum.repos.d/以下の.repoファイルに記述されます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "コンテナ環境で広く使われるコンテナランタイム/プラットフォームの例として正しいものはどれか。",
    choices: ["Docker", "GRUB", "systemd-journald", "LVM"],
    answer: 0,
    explain: "Dockerはコンテナを作成・実行するための代表的なプラットフォームです。GRUB、systemd-journald、LVMはコンテナ技術とは異なる分野のものです。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "仮想マシンやコンテナを管理するための抽象化レイヤーであるハイパーバイザーの説明として正しいものはどれか。",
    choices: [
      "物理ハードウェア上で複数の仮想マシンを動作させるための管理ソフトウェア",
      "パッケージの依存関係を解決するツール",
      "ファイルシステムの整合性をチェックするツール",
      "ネットワークのルーティングを行うツール"
    ],
    answer: 0,
    explain: "ハイパーバイザーは物理ハードウェア上に複数の仮想マシンを構築・管理するためのソフトウェア(またはファームウェア)です。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "共有ライブラリを静的リンクではなく動的リンクにする利点として適切なものはどれか。",
    choices: [
      "複数のプログラムで同じライブラリを共有し、ディスクやメモリを節約できる",
      "実行速度が必ず速くなる",
      "ライブラリの更新が一切不要になる",
      "依存関係が完全になくなる"
    ],
    answer: 0,
    explain: "動的リンクでは複数のプログラムが同じ共有ライブラリを参照するため、ディスク容量やメモリの節約になります。ライブラリの更新時は再リンクなしで反映される利点もあります。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "パッケージのインストール時に発生する「依存関係の地獄(dependency hell)」を軽減するために高レベルパッケージ管理ツールが行うことはどれか。",
    choices: [
      "必要な依存パッケージを自動的に検出しインストールする",
      "全ての依存関係を無視してインストールする",
      "ファイルシステムを毎回再フォーマットする",
      "ネットワーク接続を切断する"
    ],
    answer: 0,
    explain: "apt/yum/dnfなどの高レベルツールはリポジトリのメタデータを参照し、必要な依存パッケージを自動的に検出・解決してインストールします。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "パッケージのアンインストール(パージ)と削除の違いとして正しいものはどれか。",
    choices: [
      "パージは設定ファイルも含めて削除し、削除(remove)は設定ファイルを残す",
      "パージは何も削除しない",
      "削除は設定ファイルも含めて全て消す",
      "パージと削除に違いはない"
    ],
    answer: 0,
    explain: "Debian系ではdpkg -rやapt removeが設定ファイルを残す削除、dpkg -Pやapt purgeが設定ファイルも含めた完全な削除(パージ)です。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "特定のバージョンを指定してパッケージをインストールするaptの書式として正しいものはどれか。",
    choices: ["apt install パッケージ名=バージョン", "apt install パッケージ名 --version", "apt install パッケージ名:バージョン", "apt --set-version パッケージ名"],
    answer: 0,
    explain: "apt install パッケージ名=バージョンという書式で、特定バージョンを指定してインストールできます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "rpmパッケージの依存関係(必要とするパッケージ)を確認するオプションはどれか。",
    choices: ["rpm -qR", "rpm -ql", "rpm -qi", "rpm -qc"],
    answer: 0,
    explain: "rpm -qR(--requires)は指定したパッケージが依存している(要求する)パッケージやライブラリの一覧を表示します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "システムの起動に使われるブートローダーの役割として最も適切なものはどれか。",
    choices: [
      "ファームウェアからカーネルを読み込み、制御を引き渡す",
      "ユーザーのログイン認証を行う",
      "ネットワーク接続を確立する",
      "ファイルシステムをフォーマットする"
    ],
    answer: 0,
    explain: "ブートローダー(GRUBなど)はファームウェア(BIOS/UEFI)からカーネルイメージを読み込み、起動処理をカーネルに引き渡す役割を持ちます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "パッケージ管理ツールにおける「メタパッケージ」の説明として正しいものはどれか。",
    choices: [
      "それ自体には実体がほとんどなく、複数のパッケージをまとめてインストールさせるためのパッケージ",
      "パッケージの依存関係を一切持たないパッケージ",
      "ソースコードのみで構成されるパッケージ",
      "必ずカーネルモジュールを含むパッケージ"
    ],
    answer: 0,
    explain: "メタパッケージは実体的なファイルをほとんど持たず、関連する複数のパッケージへの依存を定義することで、まとめてインストールさせる目的で使われます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "dpkgでインストール済みパッケージの設定ファイルの状態(変更されているかなど)を確認する際の関連コマンドはどれか。",
    choices: ["debsums", "dpkg -l", "apt list", "dpkg --configure"],
    answer: 0,
    explain: "debsumsはインストール済みファイルのチェックサムを検証し、パッケージ提供時から変更されていないかを確認するツールです。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "コマンドライン上でTab キーを2回押した際の動作として一般的なものはどれか。",
    choices: [
      "補完候補の一覧を表示する",
      "コマンド履歴を全て削除する",
      "シェルを終了する",
      "現在の行をコメントアウトする"
    ],
    answer: 0,
    explain: "Tabキーを2回押すと、一致する補完候補が複数ある場合にその一覧が表示されます。1回で確定する場合は候補が1つに絞られている場合です。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "直前に実行したコマンドを再実行するシェルの機能・記法はどれか。",
    choices: ["!!", "$$", "&&", "||"],
    answer: 0,
    explain: "!!は直前に実行したコマンドをそのまま再実行するシェルの機能です。&&やdouble ampersandは論理積での連結、||は論理和での連結に使われます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "複数のコマンドを「前のコマンドが成功した場合のみ」実行するための記法はどれか。",
    choices: ["コマンド1 && コマンド2", "コマンド1 || コマンド2", "コマンド1 ; コマンド2", "コマンド1 | コマンド2"],
    answer: 0,
    explain: "&&は前のコマンドが正常終了(終了ステータス0)した場合にのみ後続のコマンドを実行します。||は逆に失敗した場合に実行されます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "コマンドの実行結果に関係なく、複数のコマンドを順番に実行するための記法はどれか。",
    choices: ["コマンド1 ; コマンド2", "コマンド1 && コマンド2", "コマンド1 || コマンド2", "コマンド1 & コマンド2"],
    answer: 0,
    explain: "セミコロン(;)で区切ると、前のコマンドの成否に関わらず順番に実行されます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "コマンドをバックグラウンドで実行するために末尾に付ける記号はどれか。",
    choices: ["&", "|", ";", "&&"],
    answer: 0,
    explain: "コマンドの末尾に&を付けると、そのコマンドはバックグラウンドで実行され、シェルはすぐに次の入力を受け付けます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "ワイルドカードのうち、任意の1文字にマッチするものはどれか。",
    choices: ["?", "*", "[]", "~"],
    answer: 0,
    explain: "?は任意の1文字にマッチします。*は0文字以上の任意の文字列、[]は指定した文字集合のいずれか1文字にマッチします。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "ワイルドカードのうち、0文字以上の任意の文字列にマッチするものはどれか。",
    choices: ["*", "?", "[]", "^"],
    answer: 0,
    explain: "*は0文字以上の任意の文字列にマッチする最も基本的なワイルドカードです。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "エイリアス(コマンドの別名)を設定するコマンドはどれか。",
    choices: ["alias", "export", "set", "unset"],
    answer: 0,
    explain: "alias 名前='コマンド'という書式で、よく使うコマンドに短い別名を付けられます。解除する場合はunaliasを使います。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "コマンドがエイリアスなのか、通常のコマンドなのか、シェル組み込みコマンドなのかを判別するコマンドはどれか。",
    choices: ["type", "which", "whereis", "file"],
    answer: 0,
    explain: "typeコマンドは指定した名前がエイリアス・関数・組み込みコマンド・外部コマンドのいずれであるかを判別します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "テキストファイルの内容を1画面ずつスクロールしながら表示するコマンドとして、前方・後方どちらにもスクロールできるものはどれか。",
    choices: ["less", "more", "cat", "head"],
    answer: 0,
    explain: "lessは前方・後方どちらにもスクロールでき、検索機能も充実しています。moreは基本的に前方スクロールのみに対応した古いページャです。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "ファイルの内容を逆順(最終行から先頭行へ)に表示するコマンドはどれか。",
    choices: ["tac", "cat", "rev", "sort -r"],
    answer: 0,
    explain: "tacはcatの逆綴りで、ファイルの行を逆順(下から上)に表示します。revは各行の文字順を左右反転させるコマンドです。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "各行の文字を左右反転して表示するコマンドはどれか。",
    choices: ["rev", "tac", "sort", "cut"],
    answer: 0,
    explain: "revは各行の文字の並び順を左右反転します。行の順序自体を逆にするのはtacです。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "複数のファイルを行単位で結合して並べて出力するコマンドはどれか。",
    choices: ["paste", "cut", "join", "split"],
    answer: 0,
    explain: "pasteは複数ファイルの対応する行をタブなどで区切って横に結合します。共通のキーで結合する場合はjoinを使います。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "共通のキーを持つ2つのファイルを、そのキーで結合するコマンドはどれか。",
    choices: ["join", "paste", "cat", "comm"],
    answer: 0,
    explain: "joinは事前にソートされた2つのファイルを、共通のフィールド(キー)で結合します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "大きなファイルを指定したサイズごとに分割するコマンドはどれか。",
    choices: ["split", "cut", "paste", "join"],
    answer: 0,
    explain: "splitはファイルを指定したサイズや行数ごとに分割し、複数の小さなファイルとして出力します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "コマンドの実行結果の終了ステータス(成功・失敗)を確認するシェル変数はどれか。",
    choices: ["$?", "$$", "$0", "$#"],
    answer: 0,
    explain: "$?は直前に実行したコマンドの終了ステータスを保持しています。0であれば正常終了、それ以外はエラーを示します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "現在実行中のシェルスクリプト自身のプロセスIDを参照するシェル変数はどれか。",
    choices: ["$$", "$?", "$0", "$@"],
    answer: 0,
    explain: "$$は現在のシェル(またはスクリプト)自身のプロセスIDを保持しています。$0はスクリプト名自体を保持します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "シェルスクリプトに渡された全ての引数を表す特殊変数はどれか。",
    choices: ["$@", "$?", "$$", "$0"],
    answer: 0,
    explain: "$@はスクリプトに渡された全ての引数を表します。$1、$2のように個別の引数を参照することもできます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "パーティションのサイズを変更(拡張・縮小)する際に関連するコマンドとして正しいものはどれか。",
    choices: ["parted や resize2fs", "chmod や chown", "grep や sed", "tar や gzip"],
    answer: 0,
    explain: "partedはパーティションサイズの変更、resize2fsはext系ファイルシステムのサイズ変更に使われます。両方を組み合わせて使うことが多いです。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "GPT形式のディスクを対話的に操作する際に使われるコマンドはどれか。",
    choices: ["gdisk", "fdisk(伝統的にMBR向け)", "mkfs", "df"],
    answer: 0,
    explain: "gdiskはGPT形式のパーティションテーブルを対話的に操作するために設計されたツールです。近年のfdiskもGPTに対応しています。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "既存のパーティションテーブルの内容を、対話操作なしで一覧表示するコマンドはどれか。",
    choices: ["fdisk -l", "fdisk -i", "mkfs -l", "mount -l"],
    answer: 0,
    explain: "fdisk -lはシステムに接続されている全てのディスクのパーティションテーブルを一覧表示します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ext4ファイルシステムでジャーナリングモードなどの属性を確認・変更するコマンドはどれか。",
    choices: ["tune2fs", "mkfs.ext4", "fsck.ext4", "e2label"],
    answer: 0,
    explain: "tune2fsはext2/ext3/ext4ファイルシステムの各種属性(ジャーナリングの有無、ラベル、マウント回数など)を確認・変更できます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルシステムのラベル(名前)を設定・確認するコマンドはどれか。",
    choices: ["e2label", "tune2fs", "blkid", "e2label、tune2fs、blkidいずれも関連する"],
    answer: 3,
    explain: "e2labelは専用のラベル設定コマンド、tune2fsは-Lオプションでラベル変更が可能、blkidは確認に使えます。いずれもラベルに関連するコマンドです。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "マウントされているファイルシステムを強制的にアンマウントするオプションはどれか。",
    choices: ["umount -f", "umount -a", "umount -l", "umount -r"],
    answer: 0,
    explain: "umount -fは応答しないファイルシステム(NFSなど)を強制的にアンマウントする際に使います。-lは遅延アンマウント(lazy unmount)です。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "現在使用中(ビジー状態)のためすぐにはアンマウントできないファイルシステムを、使用が終わり次第アンマウントするオプションはどれか。",
    choices: ["umount -l", "umount -f", "umount -a", "umount -v"],
    answer: 0,
    explain: "umount -l(lazy unmount)はすぐには切り離さず、ファイルシステムがビジーでなくなった時点で実際に切り離されます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ディレクトリのパーミッションで実行権限(x)が持つ意味として正しいものはどれか。",
    choices: [
      "そのディレクトリに移動(cd)したり中のファイルにアクセスしたりできる",
      "ファイルの内容を実行プログラムとして起動できる",
      "ファイルを削除できる",
      "ファイルの所有者を変更できる"
    ],
    answer: 0,
    explain: "ディレクトリに対する実行権限は、そのディレクトリに移動したり、中のファイルの詳細情報にアクセスしたりするために必要です。通常のファイルの実行権限とは意味が異なります。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "chmodで全てのユーザーに読み取り権限のみを付与する記述はどれか。",
    choices: ["chmod a+r file", "chmod a+x file", "chmod a+w file", "chmod a-r file"],
    answer: 0,
    explain: "chmod a+rは全ユーザー(a=all)に読み取り権限(r)を追加します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "chmodでパーミッションを絶対値ではなく、既存の権限に対して追加・削除する記法を何と呼ぶか。",
    choices: ["シンボリックモード", "数値モード(8進数モード)", "バイナリモード", "拡張モード"],
    answer: 0,
    explain: "u+x、g-wのような記法はシンボリックモードと呼ばれ、既存の権限に対して追加・削除・設定を行います。755のような数値指定は数値モード(絶対モード)です。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルのアクセス制御リスト(ACL)を設定するコマンドはどれか。",
    choices: ["setfacl", "getfacl", "chmod", "chown"],
    answer: 0,
    explain: "setfaclは通常のパーミッションより細かい単位でアクセス権を設定できるACL(アクセス制御リスト)を設定します。確認にはgetfaclを使います。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルに設定されたACL(アクセス制御リスト)を確認するコマンドはどれか。",
    choices: ["getfacl", "setfacl", "lsattr", "chattr"],
    answer: 0,
    explain: "getfaclはファイルやディレクトリに設定されているACLの内容を表示します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルに変更不可などの拡張属性(イミュータブル属性)を設定するコマンドはどれか。",
    choices: ["chattr", "chmod", "chown", "setfacl"],
    answer: 0,
    explain: "chattr +iのように指定すると、root権限であってもそのファイルを変更・削除できないイミュータブル属性を設定できます。確認はlsattrで行います。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルに設定された拡張属性(chattrで設定したもの)を確認するコマンドはどれか。",
    choices: ["lsattr", "chattr", "getfacl", "stat"],
    answer: 0,
    explain: "lsattrはchattrで設定した拡張属性(イミュータブルなど)の一覧を表示します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "FHSにおいて、カーネルや起動に必要なファイルの一部(GRUBの設定など)が格納されるディレクトリはどれか。",
    choices: ["/boot", "/root", "/var/boot", "/usr/boot"],
    answer: 0,
    explain: "/bootにはカーネルイメージ、initrd、GRUBの設定ファイルなど、システム起動に直接必要なファイルが格納されます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "FHSにおいて、root(スーパーユーザー)のホームディレクトリとして標準的なものはどれか。",
    choices: ["/root", "/home/root", "/usr/root", "/etc/root"],
    answer: 0,
    explain: "一般ユーザーのホームは/home/ユーザー名ですが、rootのホームディレクトリは慣習的に/rootに置かれます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムの現在時刻とタイムゾーンをsystemd環境で確認・設定するコマンドはどれか。",
    choices: ["timedatectl", "hwclock", "date -s", "cal"],
    answer: 0,
    explain: "timedatectlはsystemd環境で時刻・タイムゾーン・NTP同期の状態を確認・設定するための統合コマンドです。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムのタイムゾーンを変更するtimedatectlのサブコマンドはどれか。",
    choices: ["set-timezone", "set-time", "set-ntp", "status"],
    answer: 0,
    explain: "timedatectl set-timezone Asia/Tokyoのように指定して、システムのタイムゾーンを変更できます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "NTPによる時刻同期の有効・無効を切り替えるtimedatectlのサブコマンドはどれか。",
    choices: ["set-ntp", "set-time", "set-timezone", "list-timezones"],
    answer: 0,
    explain: "timedatectl set-ntp true/falseで、NTPサーバーとの自動時刻同期を有効・無効にできます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "起動時に自動実行されるsystemdサービスのうち、ネットワークが利用可能になるまで待機したい場合に指定する設定はどれか。",
    choices: ["After=network-online.target", "Before=network-online.target", "Conflicts=network.target", "WantedBy=multi-user.target"],
    answer: 0,
    explain: "After=network-online.targetを指定すると、ネットワークが実際に利用可能になってからそのサービスが起動するようになります。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "カーネルパラメータをブート時に一時的に(再起動しても保持されない形で)変更する場合に使うコマンドはどれか。",
    choices: ["sysctl -w", "sysctl -p", "sysctl --system", "sysctl -a"],
    answer: 0,
    explain: "sysctl -w パラメータ=値で一時的に値を変更できます。永続化するには/etc/sysctl.confに記述してsysctl -pで反映します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "/etc/sysctl.confに記述した設定を、再起動せずにすぐ反映させるコマンドはどれか。",
    choices: ["sysctl -p", "sysctl -w", "sysctl -a", "sysctl -n"],
    answer: 0,
    explain: "sysctl -pは/etc/sysctl.conf(または指定したファイル)の内容を読み込んで、その場で反映します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムの起動時にfsckを強制的に実行させたい場合に作成するファイルはどれか。",
    choices: ["/forcefsck", "/etc/forcefsck.conf", "/var/forcefsck", "/boot/forcefsck"],
    answer: 0,
    explain: "一部のディストリビューションでは、ルート直下に/forcefsckという空ファイルを作成しておくと、次回起動時に強制的にファイルシステムチェックが行われます(近年はtune2fs -Cなど別の方法も使われます)。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムのハードウェアクロックをUTCで管理するかローカルタイムで管理するかを設定する項目はどれか。",
    choices: ["timedatectl set-local-rtc", "timedatectl set-timezone", "date -u", "hwclock -r"],
    answer: 0,
    explain: "timedatectl set-local-rtc true/falseで、ハードウェアクロックをローカルタイムとUTCのどちらで扱うか設定できます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "デバイスの取り外し(イジェクト)を安全に行うためのコマンドはどれか。",
    choices: ["eject", "umount のみで十分", "mount -r", "sync のみで十分"],
    answer: 0,
    explain: "ejectコマンドはCD/DVDドライブなどのメディアを安全に取り出す際に使われます。USBメモリなどはumountとsyncの組み合わせで対応することが一般的です。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "systemdユニットファイルで、サービスの実行コマンドを指定するセクション内の設定項目はどれか。",
    choices: ["ExecStart=", "WantedBy=", "Description=", "After="],
    answer: 0,
    explain: "ExecStart=は[Service]セクション内で、サービス開始時に実行するコマンドを指定します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "systemdユニットファイルの[Install]セクションで、どのターゲットから有効化されるかを指定する項目はどれか。",
    choices: ["WantedBy=", "ExecStart=", "After=", "Description="],
    answer: 0,
    explain: "WantedBy=multi-user.targetのように指定すると、systemctl enableした際にそのターゲットの依存関係としてリンクが作成されます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムログの中から特定の優先度(エラーなど)のメッセージのみを絞り込んで表示するjournalctlのオプションはどれか。",
    choices: ["-p", "-b", "-f", "-u"],
    answer: 0,
    explain: "journalctl -p errのように指定すると、指定した優先度以上(この場合エラー以上)のログのみを表示できます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "特定のsystemdサービスに関するログのみを表示するjournalctlのオプションはどれか。",
    choices: ["-u", "-p", "-b", "-k"],
    answer: 0,
    explain: "journalctl -u サービス名で、指定したサービスに関連するログのみを絞り込んで表示できます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "journalctlでカーネルメッセージのみを表示するオプションはどれか。",
    choices: ["-k", "-u", "-p", "-b"],
    answer: 0,
    explain: "journalctl -kはカーネルメッセージ(dmesg相当の内容)のみを表示します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムの起動シーケンスに関連する用語の組み合わせとして正しいものを2つ選べ。",
    choices: ["ファームウェア", "ブートローダー", "パッケージリポジトリ", "ACL", "クォータ"],
    answer: [0, 1],
    explain: "ファームウェア(BIOS/UEFI)とブートローダー(GRUBなど)は起動シーケンスの初期段階に関わる用語です。パッケージリポジトリ、ACL、クォータは起動シーケンスとは直接関係しません。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "システムインストール時に選択するファイルシステムの種類として、Linuxで一般的に使われるものを2つ選べ。",
    choices: ["ext4", "XFS", "NTFS", "FAT16", "HFS+"],
    answer: [0, 1],
    explain: "ext4とXFSはLinuxで標準的に使われるファイルシステムです。NTFS、FAT16、HFS+は主に他OS向けのファイルシステムです。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "aptで壊れたパッケージ状態を修復する際に使われるオプションを2つ選べ。",
    choices: ["--fix-broken", "--fix-missing", "--purge", "--simulate", "--no-download"],
    answer: [0, 1],
    explain: "--fix-brokenは依存関係の修復、--fix-missingは取得できないパッケージがある場合の修復を試みるオプションです。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "ソースコードからのインストールで一般的に使われるツール・コマンドを2つ選べ。",
    choices: ["make", "gcc", "rpm", "dpkg", "yum"],
    answer: [0, 1],
    explain: "makeはビルド自動化ツール、gccはコンパイラで、どちらもソースコードからのビルドに使われます。rpm、dpkg、yumはバイナリパッケージの管理ツールです。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "パッケージのGPG署名検証に関連する要素を2つ選べ。",
    choices: ["公開鍵", "署名(シグネチャ)", "inode", "スワップ", "クォータ"],
    answer: [0, 1],
    explain: "GPG署名検証では、パッケージ提供元の公開鍵とパッケージに付与された署名を照合します。inode、スワップ、クォータは署名検証とは無関係です。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "システムの仮想化に関連する技術要素を2つ選べ。",
    choices: ["ハイパーバイザー", "コンテナ", "inode", "クォータ", "ACL"],
    answer: [0, 1],
    explain: "ハイパーバイザーとコンテナはどちらも仮想化に関連する技術です。inode、クォータ、ACLはファイルシステムや権限管理に関する用語です。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "シェルの起動時に読み込まれる設定ファイルの組み合わせとして正しいものを2つ選べ(bashの場合)。",
    choices: ["~/.bashrc", "~/.bash_profile", "/etc/fstab", "/etc/hosts", "/etc/crontab"],
    answer: [0, 1],
    explain: "~/.bashrcや~/.bash_profileはbashの起動時に読み込まれる個人設定ファイルです。/etc/fstab、/etc/hosts、/etc/crontabはシェル設定とは異なる用途のファイルです。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "リダイレクトに関連する記号を2つ選べ。",
    choices: [">", "<", "&&", "||", ";"],
    answer: [0, 1],
    explain: ">は標準出力のリダイレクト、<は標準入力のリダイレクトに使われる記号です。&&、||、;はコマンドの連結に使われます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "テキストファイルの行数や文字数を数える目的で使えるコマンドを2つ選べ。",
    choices: ["wc", "nl", "chmod", "mount", "fdisk"],
    answer: [0, 1],
    explain: "wcは行数・単語数・バイト数を数え、nlは行番号を付加して表示します。chmod、mount、fdiskはファイル数のカウントとは無関係です。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "プロセスの一覧を表示するコマンドを2つ選べ(オプションの違いにより表示範囲は異なる)。",
    choices: ["ps", "top", "chmod", "df", "ln"],
    answer: [0, 1],
    explain: "psは一時点のプロセス状態、topはリアルタイムのプロセス状態を表示します。chmod、df、lnはプロセス一覧とは無関係のコマンドです。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "コマンドの実行結果を別のコマンドへ渡す方法として存在するものを2つ選べ。",
    choices: ["パイプ(|)", "コマンド置換($())", "umask", "chattr", "quota"],
    answer: [0, 1],
    explain: "パイプは標準出力を次のコマンドの標準入力に渡し、コマンド置換はコマンドの実行結果を文字列として埋め込みます。umask、chattr、quotaはこれらとは異なる機能です。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "スワップ領域の使用状況を確認するコマンドを2つ選べ。",
    choices: ["free", "swapon -s", "chmod", "ln", "tar"],
    answer: [0, 1],
    explain: "freeはメモリとスワップの使用量を表示し、swapon -sは有効なスワップ領域の一覧と使用状況を表示します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルシステムのタイプを新規作成できるコマンドの例を2つ選べ。",
    choices: ["mkfs.ext4", "mkfs.xfs", "fsck.ext4", "tune2fs", "blkid"],
    answer: [0, 1],
    explain: "mkfs.ext4とmkfs.xfsはそれぞれのファイルシステム形式を新規作成するコマンドです。fsck.ext4は整合性チェック、tune2fsは属性変更、blkidは情報確認のためのコマンドです。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルのメタ情報(所有者、パーミッション、タイムスタンプなど)を確認するコマンドを2つ選べ。",
    choices: ["stat", "ls -l", "cut", "wc", "sort"],
    answer: [0, 1],
    explain: "statは詳細なメタ情報、ls -lは所有者やパーミッションを含む一覧形式の情報を表示します。cut、wc、sortはテキスト処理系のコマンドです。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "クォータ機能に関連するコマンドを2つ選べ。",
    choices: ["quotaon", "quotaoff", "chmod", "ln", "mount -a"],
    answer: [0, 1],
    explain: "quotaonはクォータ機能を有効化、quotaoffは無効化するコマンドです。chmod、ln、mount -aはクォータ機能とは直接関係しません。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルシステムの階層標準(FHS)において、一時ファイルを格納する目的のディレクトリを2つ選べ。",
    choices: ["/tmp", "/var/tmp", "/opt", "/srv", "/root"],
    answer: [0, 1],
    explain: "/tmpと/var/tmpはどちらも一時ファイルを格納するディレクトリですが、/var/tmpは再起動をまたいでも保持されることが期待される点が異なります。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "現在のホスト名を確認・一時的に変更するコマンドはどれか。",
    choices: ["hostname", "hostnamectl(永続的な変更向け)", "hostnameとhostnamectlの両方が使われる", "uname -n のみ"],
    answer: 2,
    explain: "hostnameコマンドは一時的な確認・変更、hostnamectlは/etc/hostnameも含めた永続的な変更に使われます。両方とも試験範囲で扱われます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムのホスト名が永続的に保存されているファイルはどれか。",
    choices: ["/etc/hostname", "/etc/hosts", "/etc/fstab", "/etc/resolv.conf"],
    answer: 0,
    explain: "/etc/hostnameにはシステムのホスト名が記録されており、起動時にこの値が読み込まれます。/etc/hostsは名前解決用の別ファイルです。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "ディストリビューション名やバージョンなどのOS情報を確認できる標準的なファイルはどれか。",
    choices: ["/etc/os-release", "/etc/hostname", "/etc/fstab", "/etc/profile"],
    answer: 0,
    explain: "/etc/os-releaseには、ディストリビューション名・バージョン・IDなどのOS情報が標準化された形式で記載されています。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "起動時にルートファイルシステムをマウントする前に必要なドライバなどを一時的に読み込むための仕組みはどれか。",
    choices: ["initramfs(初期RAMファイルシステム)", "systemd-journald", "GRUBメニュー", "/etc/fstab"],
    answer: 0,
    explain: "initramfsはカーネルが起動した直後に一時的にマウントされる最小限のファイルシステムで、ルートファイルシステムをマウントするために必要なドライバなどを含みます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "initramfsイメージを生成する代表的なツールを2つ選べ。",
    choices: ["dracut", "mkinitramfs", "grub-install", "tune2fs", "modprobe"],
    answer: [0, 1],
    explain: "dracut(主にRed Hat系)とmkinitramfs(主にDebian系)は、それぞれのディストリビューションでinitramfsイメージを生成するために使われるツールです。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "現在有効なマウント情報を保持する、mountコマンドが参照する動的なファイルはどれか。",
    choices: ["/etc/mtab(または/proc/mounts)", "/etc/fstab", "/etc/hosts", "/etc/exports"],
    answer: 0,
    explain: "/etc/mtab(近年は多くの環境で/proc/mountsへのリンクとして実装)には現在マウントされているファイルシステムの状態が記録されています。/etc/fstabは起動時の「設定」であり動的な状態とは異なります。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "接続されているブロックデバイスのパーティション情報がリアルタイムに反映される仮想ファイルはどれか。",
    choices: ["/proc/partitions", "/proc/version", "/proc/cpuinfo", "/proc/uptime"],
    answer: 0,
    explain: "/proc/partitionsには現在認識されているブロックデバイスとそのパーティションの一覧が表示されます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "カーネルがサポートしているファイルシステムの種類一覧を確認できるファイルはどれか。",
    choices: ["/proc/filesystems", "/proc/mounts", "/proc/devices", "/proc/modules"],
    answer: 0,
    explain: "/proc/filesystemsには、現在のカーネルが認識・サポートしているファイルシステムの種類が一覧表示されます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "カーネルモジュールが自動的にロードされないよう禁止(ブラックリスト化)する設定を記述する場所はどれか。",
    choices: ["/etc/modprobe.d/以下の設定ファイル", "/etc/fstab", "/etc/hosts", "/boot/grub/grub.cfg"],
    answer: 0,
    explain: "/etc/modprobe.d/以下に「blacklist モジュール名」と記述することで、そのモジュールの自動ロードを禁止できます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "カーネルモジュールの詳細情報(パラメータ、依存関係、説明)を表示するコマンドはどれか。",
    choices: ["modinfo", "lsmod", "insmod", "depmod"],
    answer: 0,
    explain: "modinfoは指定したモジュールの説明、バージョン、パラメータ、依存関係などの詳細情報を表示します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "UEFI環境で起動エントリの追加・削除・確認を行うコマンドはどれか。",
    choices: ["efibootmgr", "grub-install", "update-grub", "dmidecode"],
    answer: 0,
    explain: "efibootmgrはUEFIファームウェアが保持するブートエントリ(起動対象OSの一覧)を確認・編集するコマンドです。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "仮想コンソール(テキスト画面)を切り替える操作として一般的なものはどれか。",
    choices: ["Ctrl+Alt+F1〜F6などのキー操作", "Ctrl+Alt+Delete", "Ctrl+Shift+Esc", "Alt+Tab"],
    answer: 0,
    explain: "多くのLinux環境ではCtrl+Alt+ファンクションキーで複数の仮想コンソール(テキストログイン画面)を切り替えられます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "現在ログインしている仮想コンソールを切り替えるコマンドはどれか。",
    choices: ["chvt", "vtswitch", "ttyswitch", "consolechange"],
    answer: 0,
    explain: "chvt 番号で指定した仮想コンソール(tty)に切り替えることができます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムが搭載しているハードウェアの詳細情報を包括的に一覧表示するコマンドはどれか。",
    choices: ["lshw", "lsmod", "lsattr", "lsblk"],
    answer: 0,
    explain: "lshwはCPU、メモリ、ディスク、ネットワークなど、システムのハードウェア全体の詳細情報を包括的に表示します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "RPMパッケージをDebianパッケージ形式(またはその逆)に変換するツールはどれか。",
    choices: ["alien", "rpm2cpio", "dpkg-deb", "apt-file"],
    answer: 0,
    explain: "alienはRPM・deb・tgzなど異なるパッケージ形式間で変換を行うツールです。ただし変換後の動作は完全には保証されません。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "ソースコードからインストールしたソフトウェアを、パッケージとして管理できるようにする(擬似パッケージを作る)ためによく使われるツールはどれか。",
    choices: ["checkinstall", "rpm -e", "apt clean", "dpkg -l"],
    answer: 0,
    explain: "checkinstallはmake installの代わりに使うことで、インストール内容を追跡し、後からdpkgやrpmで管理・削除できるパッケージを作成します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "すでにインストール済みのパッケージの設定を再度対話的に行うDebian系のコマンドはどれか。",
    choices: ["dpkg-reconfigure", "dpkg -i", "dpkg -P", "dpkg -l"],
    answer: 0,
    explain: "dpkg-reconfigureはインストール済みパッケージの設定(debconfの設定項目)を再度対話的に行うためのコマンドです。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "近年、異なるディストリビューション間でも動作するよう設計された、アプリケーションをコンテナ的に配布するパッケージ形式を2つ選べ。",
    choices: ["Snap", "Flatpak", "RPM", "deb", "tar.gz"],
    answer: [0, 1],
    explain: "SnapとFlatpakは依存関係を含めてパッケージ化し、ディストリビューションに依存せず動作させることを目指した比較的新しいパッケージ形式です。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "リポジトリのメタデータ(パッケージ一覧情報)を生成するRPM系のコマンドはどれか。",
    choices: ["createrepo", "reposync", "yum-config-manager", "repoquery"],
    answer: 0,
    explain: "createrepoは指定したディレクトリ内のRPMパッケージからリポジトリ用のメタデータを生成し、独自のyum/dnfリポジトリを構築できるようにします。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "リモートリポジトリのパッケージをローカルにまるごとミラーリング(同期)するコマンドはどれか。",
    choices: ["reposync", "createrepo", "yum clean", "rpm -Va"],
    answer: 0,
    explain: "reposyncは指定したリポジトリのパッケージをローカルディレクトリにダウンロード(同期)し、ローカルミラーリポジトリの構築に使われます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "apt環境で特定のパッケージだけ優先度を変えて特定バージョンを優先的にインストールさせる設定(APT Pinning)を記述するファイルはどれか。",
    choices: ["/etc/apt/preferences", "/etc/apt/sources.list", "/etc/dpkg/dpkg.cfg", "/etc/apt/apt.conf"],
    answer: 0,
    explain: "/etc/apt/preferences(またはpreferences.d/以下)にPin設定を記述することで、複数のリポジトリが同じパッケージを提供する場合の優先度を制御できます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "ルートディレクトリを切り替えて、別の環境であるかのようにコマンドを実行する仕組みはどれか。",
    choices: ["chroot", "chmod", "chown", "chgrp"],
    answer: 0,
    explain: "chrootは指定したディレクトリを新しいルートディレクトリとして扱い、その中だけで動作するように環境を切り替えます。トラブルシューティングや新環境の構築に使われます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "最小限のDebian系ベースシステムを、パッケージマネージャを使わずにブートストラップ(構築)するツールはどれか。",
    choices: ["debootstrap", "apt-get", "dpkg", "aptitude"],
    answer: 0,
    explain: "debootstrapは最小限のDebian系ベースシステムを、既存のシステム上の別ディレクトリに構築するためのツールで、chrootと組み合わせて使われることが多いです。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "Debian系のaptに対する対話的なテキストUIパッケージ管理ツールはどれか。",
    choices: ["aptitude", "dpkg-deb", "apt-mark", "apt-cache"],
    answer: 0,
    explain: "aptitudeはaptと同等の機能を持ちつつ、対話的なテキストベースのUIでパッケージを閲覧・管理できるツールです。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "特定のパッケージを自動更新の対象から除外(保留)するdpkg/aptの機能はどれか。",
    choices: ["apt-mark hold", "apt-mark unhold", "apt clean", "apt autoremove"],
    answer: 0,
    explain: "apt-mark holdは指定したパッケージを、apt upgrade等の際に更新対象から除外(保留)します。解除する場合はapt-mark unholdを使います。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "指定した書式に従って文字列や数値を整形出力するコマンドはどれか。",
    choices: ["printf", "echo", "cat", "tee"],
    answer: 0,
    explain: "printfはC言語のprintf関数に似た書式指定子(%sや%dなど)を使って、柔軟な形式で出力できます。echoよりも細かい制御が可能です。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "シェルスクリプト内で数値や文字列の比較・評価を行う伝統的なコマンドはどれか。",
    choices: ["test(または[ ])", "expr", "printf", "eval"],
    answer: 0,
    explain: "test(角括弧[ ]と同等)は条件式を評価し、真偽を終了ステータスとして返します。if文の条件部分などでよく使われます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "シェルスクリプトで簡単な数式の計算を行う伝統的なコマンドはどれか。",
    choices: ["expr", "test", "printf", "let(bash組み込み)"],
    answer: 0,
    explain: "exprは簡単な数式や文字列の評価を行う外部コマンドです。bashではletや$((...))というより新しい構文も使われます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "パス文字列からファイル名部分だけを取り出すコマンドはどれか。",
    choices: ["basename", "dirname", "cut", "cut -d"],
    answer: 0,
    explain: "basenameはパスからディレクトリ部分を除いたファイル名部分を取り出します。ディレクトリ部分を取り出す場合はdirnameを使います。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "パス文字列からディレクトリ部分だけを取り出すコマンドはどれか。",
    choices: ["dirname", "basename", "cut", "readlink"],
    answer: 0,
    explain: "dirnameはパスからファイル名部分を除いたディレクトリ部分を取り出します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "連続した数値の並びを生成するコマンドはどれか。",
    choices: ["seq", "expr", "test", "date"],
    answer: 0,
    explain: "seq 1 10のように指定すると、1から10までの連続した数値を生成できます。ループ処理などと組み合わせてよく使われます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "指定した秒数だけ処理を停止(待機)させるコマンドはどれか。",
    choices: ["sleep", "wait", "delay", "pause"],
    answer: 0,
    explain: "sleep 秒数で、指定した時間だけコマンドの実行を停止させます。シェルスクリプトの待機処理でよく使われます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "指定したコマンドを一定間隔で繰り返し実行し、結果の変化を確認できるコマンドはどれか。",
    choices: ["watch", "sleep", "cron", "at"],
    answer: 0,
    explain: "watchは指定したコマンドを一定間隔(デフォルト2秒)で繰り返し実行し、画面を更新しながら結果を表示します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "端末での操作内容をログとして記録するコマンドはどれか。",
    choices: ["script", "history", "log", "record"],
    answer: 0,
    explain: "scriptコマンドは実行中のターミナルセッションの入出力内容をそのままファイルに記録します。作業ログの保存によく使われます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "1つの端末上で複数の仮想的な端末セッションを管理し、切断後も処理を継続できるツールを2つ選べ。",
    choices: ["screen", "tmux", "script", "watch", "seq"],
    answer: [0, 1],
    explain: "screenとtmuxはどちらも端末多重化ツールで、1つの接続の中に複数のセッションを持たせたり、SSH切断後も処理を継続させたりできます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "シェルからジョブの管理対象外にして、シェル終了後もプロセスを継続させるコマンドはどれか。",
    choices: ["disown", "nohup", "kill", "wait"],
    answer: 0,
    explain: "disownは実行中のジョブをシェルのジョブ管理テーブルから切り離します。ログアウト時のSIGHUP対策としてnohupと似た目的で使われることがあります。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "指定した時間内にコマンドが終了しない場合、強制的に終了させるコマンドはどれか。",
    choices: ["timeout", "sleep", "wait", "kill"],
    answer: 0,
    explain: "timeout 秒数 コマンドとすることで、指定時間内にコマンドが終了しない場合に自動的に終了させることができます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "プロセスが利用できるリソース(ファイル記述子の数やメモリなど)の上限を設定・確認するシェルの組み込みコマンドはどれか。",
    choices: ["ulimit", "nice", "renice", "nohup"],
    answer: 0,
    explain: "ulimitはシェルおよびそこから起動されるプロセスが使用できるリソースの上限(ファイル記述子数、プロセス数など)を設定・確認します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "既にマウントされているディレクトリツリーの一部を、別の場所にも見せる(バインドマウントする)オプションはどれか。",
    choices: ["mount --bind", "mount -a", "mount -t", "mount -o remount"],
    answer: 0,
    explain: "mount --bindは既存のディレクトリを別のマウントポイントにも同時に見せる「バインドマウント」を行います。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "必要になったタイミングで自動的にファイルシステムをマウントし、一定時間使われないと自動アンマウントする仕組みはどれか。",
    choices: ["autofs", "fstab", "udev", "cron"],
    answer: 0,
    explain: "autofsはアクセスがあった時に自動的にマウントし、使われなくなったら自動的にアンマウントするオンデマンドマウントの仕組みです。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ディスク全体やパーティションを暗号化するLinux標準の仕組みはどれか。",
    choices: ["LUKS(dm-crypt)", "GPG", "SSH", "SELinux"],
    answer: 0,
    explain: "LUKS(Linux Unified Key Setup)はdm-cryptを利用したディスク暗号化の標準的な仕組みです。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "複数のディスクを組み合わせて冗長性や性能を高める技術(ソフトウェアRAID)を管理するコマンドはどれか。",
    choices: ["mdadm", "lvcreate", "fdisk", "parted"],
    answer: 0,
    explain: "mdadmはLinuxのソフトウェアRAID(md デバイス)を作成・管理するためのコマンドです。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ハードディスクの不良ブロック(バッドセクタ)を検査するコマンドはどれか。",
    choices: ["badblocks", "fsck", "mkfs", "df"],
    answer: 0,
    explain: "badblocksはディスク上の不良ブロックをスキャンして検出するコマンドです。フォーマット前の検査などに使われます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルに実際のディスク領域を事前に確保(予約)するコマンドはどれか。",
    choices: ["fallocate", "truncate", "dd", "touch"],
    answer: 0,
    explain: "fallocateは指定したサイズ分のディスク領域を、実際にデータを書き込まずに事前確保します。ファイルサイズの変更にはtruncateも使われますが、領域確保の意味合いが異なります。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルのサイズを指定した値に切り詰める、または拡張するコマンドはどれか。",
    choices: ["truncate", "fallocate", "dd", "split"],
    answer: 0,
    explain: "truncateはファイルのサイズを指定した値に変更(切り詰めまたは拡張)します。拡張した場合、増えた部分は0で埋められます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "findコマンドで、指定したパーミッションに一致するファイルを検索するオプションはどれか。",
    choices: ["-perm", "-type", "-name", "-size"],
    answer: 0,
    explain: "find . -perm 644のように指定すると、指定したパーミッションに一致するファイルを検索できます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "findコマンドで、更新日時が指定した日数以内のファイルを検索するオプションはどれか。",
    choices: ["-mtime", "-perm", "-type", "-name"],
    answer: 0,
    explain: "find . -mtime -7のように指定すると、7日以内に更新されたファイルを検索できます。マイナスは「以内」、プラスは「より前」を意味します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ディスクI/Oのパフォーマンスに関するパラメータを確認・設定するコマンドはどれか。",
    choices: ["hdparm", "iostat", "dumpe2fs", "blkid"],
    answer: 0,
    explain: "hdparmはハードディスクの動作パラメータ(読み込みキャッシュの有無など)を確認・設定するコマンドです。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "statコマンドで表示形式をカスタマイズして特定の情報だけを出力するオプションはどれか。",
    choices: ["--format(-c)", "--full", "--type", "--all"],
    answer: 0,
    explain: "stat --format='%s' ファイルのように指定すると、ファイルサイズなど特定の情報だけを抜き出して表示できます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "シンボリックリンクとハードリンクの違いに関する説明として正しいものはどれか。",
    choices: [
      "シンボリックリンクは別のinodeを持ち元ファイルへのパスを保持するが、ハードリンクは同じinodeを共有する",
      "シンボリックリンクとハードリンクはどちらも全く同じ仕組みである",
      "ハードリンクは別のファイルシステムをまたいで自由に作成できる",
      "シンボリックリンクは元ファイルを削除しても必ず有効なままである"
    ],
    answer: 0,
    explain: "シンボリックリンクは独自のinodeを持ち、パス文字列として元ファイルを参照します。元ファイルを消すとリンク切れになります。ハードリンクは同じinodeを共有するため、元ファイルを消してもデータ自体は残ります。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "定期的にコマンドを実行するスケジューラのうち、システム全体の定期ジョブを記述する伝統的な設定ファイルはどれか。",
    choices: ["/etc/crontab", "/etc/fstab", "/etc/hosts", "/etc/profile"],
    answer: 0,
    explain: "/etc/crontabにはシステム全体で実行される定期ジョブが記述されます。実行するユーザー名のフィールドがある点がユーザーのcrontabと異なります。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "ユーザー個別のcron設定を編集するコマンドはどれか。",
    choices: ["crontab -e", "crontab -l", "crontab -r", "at -e"],
    answer: 0,
    explain: "crontab -eで現在のユーザーのcron設定を編集できます。一覧表示は-l、削除は-rオプションを使います。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "一度だけ、指定した時刻に1回限りの処理を実行させるコマンドはどれか。",
    choices: ["at", "cron", "anacron", "watch"],
    answer: 0,
    explain: "atは指定した時刻に1回だけコマンドを実行するようスケジュールします。定期的な繰り返し実行はcronの役割です。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムが常時稼働していない環境(ノートPCなど)でも、電源が入った際に未実行の定期ジョブを実行してくれる仕組みはどれか。",
    choices: ["anacron", "at", "systemd-run", "batch"],
    answer: 0,
    explain: "anacronはcronと異なり、システムが停止していた間に実行されなかったジョブを、次回起動時にまとめて実行してくれます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "旧来のSysVinit環境で、サービスの起動スクリプトが格納されていた標準的なディレクトリはどれか。",
    choices: ["/etc/init.d/", "/etc/systemd/system/", "/usr/lib/systemd/", "/etc/cron.d/"],
    answer: 0,
    explain: "SysVinit環境では/etc/init.d/以下に各サービスの起動・停止スクリプトが配置され、ランレベルごとのシンボリックリンクで制御されていました。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "SysVinit環境で、サービスをランレベルごとに自動起動するかどうかを設定する伝統的なコマンドはどれか。",
    choices: ["chkconfig", "systemctl", "cron", "at"],
    answer: 0,
    explain: "chkconfigは主にRed Hat系のSysVinit環境で、サービスの自動起動設定をランレベルごとに管理するコマンドでした。Debian系ではupdate-rc.dが使われていました。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "カーネルの起動メッセージを抑制し、シンプルな起動画面(スプラッシュ)を表示させるカーネルパラメータの例はどれか。",
    choices: ["quiet splash", "single", "init=/bin/bash", "noapic"],
    answer: 0,
    explain: "quiet splashはカーネルの詳細な起動メッセージを抑制し、グラフィカルなスプラッシュ画面を表示させるための代表的なカーネルパラメータです。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "GRUBのカーネル行に「single」というパラメータを追加した場合の効果はどれか。",
    choices: ["シングルユーザーモードで起動する", "起動を停止する", "ネットワークを無効化する", "スワップを無効化する"],
    answer: 0,
    explain: "singleパラメータを付けて起動すると、シングルユーザーモード(ランレベル1相当)で起動し、保守作業を行いやすくなります。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "ジャーナルログのタイムスタンプ形式などをカスタマイズしてdmesgの出力を見やすくするオプションはどれか。",
    choices: ["dmesg -T", "dmesg -c", "dmesg -n", "dmesg -k"],
    answer: 0,
    explain: "dmesg -Tは、通常は起動からの経過秒数で表示されるタイムスタンプを、人間が読みやすい形式の日時に変換して表示します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "RPMパッケージの署名検証に必要な公開鍵をシステムにインポートするコマンドはどれか。",
    choices: ["rpm --import", "rpm --export", "rpm -qa", "rpm -V"],
    answer: 0,
    explain: "rpm --import 公開鍵ファイルで、パッケージの署名検証に使うGPG公開鍵をシステムに登録できます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "dnf/yum環境で新しいリポジトリを設定ファイルなしにコマンドから直接追加するコマンドはどれか。",
    choices: ["yum-config-manager --add-repo", "yum clean all", "yum history", "yum check-update"],
    answer: 0,
    explain: "yum-config-manager --add-repo URLで、リポジトリ設定ファイルを手動作成せずに新しいリポジトリを追加できます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "dpkgでインストール済みパッケージについて詳細な検索(正規表現含む)を行うコマンドはどれか。",
    choices: ["dpkg-query", "dpkg-deb", "dpkg-reconfigure", "dpkg-divert"],
    answer: 0,
    explain: "dpkg-queryはdpkg -lなどより柔軟な出力形式や検索条件でパッケージ情報を照会できるコマンドです。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "システムのCPUアーキテクチャ(amd64など)をdpkgの観点から確認するコマンドはどれか。",
    choices: ["dpkg --print-architecture", "dpkg -l", "dpkg -c", "dpkg -s"],
    answer: 0,
    explain: "dpkg --print-architectureは、システムのネイティブなパッケージアーキテクチャ(amd64、arm64など)を表示します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "1つのシステム上で複数のCPUアーキテクチャ向けパッケージを共存させる仕組みをDebian系では何と呼ぶか。",
    choices: ["マルチアーキテクチャ(multiarch)", "クロスコンパイル", "デュアルブート", "サブシステム"],
    answer: 0,
    explain: "マルチアーキテクチャ(multiarch)は、例えば64ビット環境に32ビット向けライブラリを共存させるなど、複数アーキテクチャのパッケージを管理する仕組みです。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "Red Hat系ディストリビューションで、GUIを使った自動インストールの設定情報を記述するファイル形式はどれか。",
    choices: ["Kickstartファイル", "Preseedファイル", "cloud-config", "Ansible Playbook"],
    answer: 0,
    explain: "Kickstartファイルは、Red Hat系のインストーラ(Anaconda)向けに、パーティション構成やパッケージ選択などを事前定義して自動インストールを行うための設定ファイルです。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "Debian系ディストリビューションで、GUIを使わない自動インストールの設定情報を記述するファイル形式はどれか。",
    choices: ["Preseedファイル", "Kickstartファイル", "cloud-config", "Vagrantfile"],
    answer: 0,
    explain: "PreseedファイルはDebianインストーラに対して、インストール時の質問への回答を事前に設定しておくための仕組みです。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "ファイルの内容が改ざんされていないかを確認するために、チェックサム(ハッシュ値)を計算するコマンドの例はどれか。",
    choices: ["md5sum、sha256sum", "chmod、chown", "mount、umount", "grep、sed"],
    answer: 0,
    explain: "md5sumやsha256sumはファイルの内容からハッシュ値(チェックサム)を計算し、ファイルの改ざんやダウンロード時の破損を検出するために使われます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "2つのファイルが完全に一致するかどうかをバイト単位で比較するコマンドはどれか。",
    choices: ["cmp", "diff", "comm", "join"],
    answer: 0,
    explain: "cmpは2つのファイルをバイト単位で比較し、最初に異なるバイト位置を報告します。行単位の差分を見たい場合はdiffを使います。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "2つのソート済みファイルを比較して、共通行・片方のみの行を3列に分けて表示するコマンドはどれか。",
    choices: ["comm", "cmp", "diff", "paste"],
    answer: 0,
    explain: "commは2つのソート済みファイルを比較し、「1番目のみ」「2番目のみ」「両方に共通」の3列に分けて出力します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "文字を別の文字に置き換えたり、文字集合を削除したりするコマンドはどれか。",
    choices: ["tr", "sed", "cut", "awk"],
    answer: 0,
    explain: "trは「tr 'a-z' 'A-Z'」のように、文字単位での置換や削除を行うシンプルなフィルターコマンドです。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "長い行を指定した幅で折り返して表示するコマンドはどれか。",
    choices: ["fold", "fmt", "expand", "unexpand"],
    answer: 0,
    explain: "foldは指定した文字数で行を折り返します。段落の整形も含めて行いたい場合はfmtを使います。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "タブ文字をスペースに変換するコマンドはどれか。",
    choices: ["expand", "unexpand", "fold", "fmt"],
    answer: 0,
    explain: "expandはタブ文字を指定した数のスペースに変換します。逆にスペースをタブに変換する場合はunexpandを使います。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "複数の列のデータを整形して読みやすい表形式に整えるコマンドはどれか。",
    choices: ["column", "paste", "join", "cut"],
    answer: 0,
    explain: "columnは区切り文字で分けられたテキストデータを、桁を揃えた表形式に整形して表示します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "ファイルの内容を8進数や16進数でダンプ(バイト単位)表示するコマンドの例を2つ選べ。",
    choices: ["od", "xxd", "cat", "less", "wc"],
    answer: [0, 1],
    explain: "odとxxdはどちらもファイルの内容をバイナリレベル(8進数や16進数)でダンプ表示するコマンドです。バイナリファイルの中身を確認する際に使われます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "シェルスクリプトの中で、特定のシグナルを受け取った際に指定した処理を実行させるコマンドはどれか。",
    choices: ["trap", "kill", "wait", "signal"],
    answer: 0,
    explain: "trapはシグナルを受け取った際に実行する処理(コマンド)を指定します。終了処理のクリーンアップなどによく使われます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "標準入力から1行読み込んでシェル変数に格納する組み込みコマンドはどれか。",
    choices: ["read", "echo", "cat", "printf"],
    answer: 0,
    explain: "read 変数名で、標準入力から1行を読み込んで指定した変数に格納します。対話的なシェルスクリプトでよく使われます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "現在のシェルの終了ステータスを、そのまま指定した値で終了させるコマンドはどれか。",
    choices: ["exit", "return", "break", "continue"],
    answer: 0,
    explain: "exit 数値でシェル(またはスクリプト)を終了し、指定した数値を終了ステータスとして返します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ネットワーク越しにファイルシステムを共有するための、Unix系で標準的なプロトコルはどれか。",
    choices: ["NFS", "SMB", "FTP", "HTTP"],
    answer: 0,
    explain: "NFS(Network File System)はUnix/Linux系環境で標準的に使われるネットワークファイル共有のプロトコルです。設定は/etc/exportsで行います。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "NFSサーバーが共有するディレクトリとアクセス許可を設定するファイルはどれか。",
    choices: ["/etc/exports", "/etc/fstab", "/etc/hosts", "/etc/nfs.conf"],
    answer: 0,
    explain: "/etc/exportsにNFSで共有するディレクトリと、アクセスを許可するホストやオプションを記述します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "マウントオプションのうち、そのファイルシステム上での実行ファイルの実行を禁止するものはどれか。",
    choices: ["noexec", "nosuid", "nodev", "ro"],
    answer: 0,
    explain: "noexecはマウントしたファイルシステム上にある実行ファイルの実行を禁止します。USBメモリなどセキュリティ上の理由で使われます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "マウントオプションのうち、SUID・SGIDビットの効果を無効化するものはどれか。",
    choices: ["nosuid", "noexec", "nodev", "sync"],
    answer: 0,
    explain: "nosuidはそのファイルシステム上にあるファイルのSUID・SGIDビットを無視(無効化)します。権限昇格のリスクを下げる目的で使われます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "クォータで設定する「ソフトリミット」と「ハードリミット」の違いとして正しいものはどれか。",
    choices: [
      "ソフトリミットは猶予期間付きで超過を許容し、ハードリミットは超過を一切許可しない",
      "ソフトリミットの方が常に厳しい制限である",
      "ハードリミットはディスク使用量ではなくCPU使用率を制限する",
      "ソフトリミットとハードリミットに違いはない"
    ],
    answer: 0,
    explain: "ソフトリミットは一定の猶予期間の間は超過を許容しますが、ハードリミットに達すると一切の書き込みができなくなります。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "現在マウントされているファイルシステムをツリー形式で見やすく一覧表示するコマンドはどれか。",
    choices: ["findmnt", "mount", "df", "blkid"],
    answer: 0,
    explain: "findmntはマウントされているファイルシステムの情報をツリー形式で見やすく表示し、条件を指定した検索も可能です。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "特定のファイルやディレクトリを、現在どのプロセスが開いているかを調べるコマンドはどれか。",
    choices: ["lsof", "ps", "top", "free"],
    answer: 0,
    explain: "lsofは開いているファイル(オープンされているファイルディスクリプタ)と、それを開いているプロセスの対応を確認できます。アンマウントできない原因調査などに使われます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "特定のファイルやマウントポイントを使用しているプロセスを特定し、必要に応じて終了させることもできるコマンドはどれか。",
    choices: ["fuser", "lsof", "top", "ps"],
    answer: 0,
    explain: "fuserは指定したファイルやマウントポイントを使用しているプロセスのPIDを表示し、-kオプションでそれらを終了させることもできます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ACLよりもさらに柔軟な、任意の名前と値のペアをファイルに付与できる仕組みを設定するコマンドはどれか。",
    choices: ["setfattr", "setfacl", "chattr", "chmod"],
    answer: 0,
    explain: "setfattrは拡張属性(extended attribute)と呼ばれる任意のキーと値のペアをファイルに付与するコマンドです。確認にはgetfattrを使います。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルに設定された拡張属性(setfattrで設定したもの)を確認するコマンドはどれか。",
    choices: ["getfattr", "setfattr", "getfacl", "lsattr"],
    answer: 0,
    explain: "getfattrはsetfattrで設定した拡張属性の内容を確認するコマンドです。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "実際のデータサイズよりも見かけ上のファイルサイズが大きい「スパースファイル」の説明として正しいものはどれか。",
    choices: [
      "データが存在しない部分(0で埋められた部分)についてはディスク領域を消費しない",
      "常に実際のファイルサイズと同じディスク領域を消費する",
      "圧縮されたファイルのことである",
      "暗号化されたファイルのことである"
    ],
    answer: 0,
    explain: "スパースファイルは、内容が0であるような「穴」の部分については実際のディスク領域を割り当てず、見かけ上のサイズよりも少ない容量で済む仕組みです。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "duコマンドで、指定した階層の深さまでのディレクトリごとの使用量を表示するオプションはどれか。",
    choices: ["--max-depth", "-h", "-a", "-c"],
    answer: 0,
    explain: "du --max-depth=1のように指定すると、指定した階層までのディレクトリごとの使用量のみを表示し、深すぎる詳細を省略できます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "実行終了したにもかかわらず、親プロセスが終了ステータスを回収していないプロセスの状態を何と呼ぶか。",
    choices: ["ゾンビ(defunct)プロセス", "オーファン(孤児)プロセス", "デーモンプロセス", "カーネルスレッド"],
    answer: 0,
    explain: "ゾンビプロセスは実行終了後もプロセステーブルに情報が残った状態で、親プロセスがwait()を呼んで回収するまで残り続けます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "親プロセスが先に終了してしまい、他のプロセス(通常initやsystemd)に引き取られたプロセスを何と呼ぶか。",
    choices: ["オーファン(孤児)プロセス", "ゾンビプロセス", "デーモンプロセス", "カーネルスレッド"],
    answer: 0,
    explain: "オーファンプロセスは親プロセスが先に終了した子プロセスのことで、通常はPID1(systemdなど)がその後の親として引き継ぎます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "psコマンドで、全ユーザーの全プロセスをBSDスタイルの書式で表示するオプションの組み合わせはどれか。",
    choices: ["ps aux", "ps -l", "ps -f", "ps -j"],
    answer: 0,
    explain: "ps auxはBSDスタイルのオプションで全ユーザーの全プロセスを表示する、非常によく使われる組み合わせです。SystemVスタイルではps -efが同様の目的で使われます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "特定のプロセスIDに対応する詳細情報(コマンドライン、状態、環境変数など)が格納されている場所はどれか。",
    choices: ["/proc/[PID]/以下の各ファイル", "/etc/[PID]/", "/var/run/[PID]/", "/sys/[PID]/"],
    answer: 0,
    explain: "/proc/[PID]/以下には、そのプロセスのコマンドライン(cmdline)、状態(status)、環境変数(environ)などの詳細情報を格納した仮想ファイルが存在します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "プロセスが実際に発行しているシステムコールを追跡・表示するデバッグ用コマンドはどれか。",
    choices: ["strace", "ltrace", "top", "ps"],
    answer: 0,
    explain: "straceはプロセスが発行するシステムコールをリアルタイムに追跡して表示します。ライブラリ関数呼び出しを追跡する場合はltraceを使います。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "実行中のプロセスとその状態(実行中、スリープ、ゾンビなど)を1文字の記号で確認できるpsの項目はどれか。",
    choices: ["STAT(S列)", "PID", "TTY", "TIME"],
    answer: 0,
    explain: "psの出力にあるSTAT(またはS)列には、R(実行可能)、S(スリープ)、Z(ゾンビ)などプロセスの状態が1文字で表示されます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "systemdでログインセッションやユーザーの状態を管理・確認するコマンドはどれか。",
    choices: ["loginctl", "systemctl", "journalctl", "timedatectl"],
    answer: 0,
    explain: "loginctlはsystemd-logindが管理するログインセッションやユーザー、シートの情報を確認・操作するコマンドです。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "aptでバイナリパッケージではなく、ソースパッケージ(ビルド用のソースコード一式)を取得するコマンドはどれか。",
    choices: ["apt-get source", "apt-get build-dep", "apt-cache policy", "apt list --installed"],
    answer: 0,
    explain: "apt-get sourceは指定したパッケージのソースコード(ビルド用一式)をダウンロードします。ビルドに必要な依存パッケージを揃えるにはapt-get build-depを使います。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "dnfで、あるパッケージを別のパッケージ(競合するパッケージ)に置き換える操作を行うサブコマンドはどれか。",
    choices: ["dnf swap", "dnf install", "dnf remove", "dnf list"],
    answer: 0,
    explain: "dnf swapは、あるパッケージを削除しつつ別のパッケージをインストールするという2つの操作を1つのトランザクションとして安全に行います。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "dnfでインストール済みのパッケージを、意図的に古いバージョンへ戻すサブコマンドはどれか。",
    choices: ["dnf downgrade", "dnf upgrade", "dnf reinstall", "dnf autoremove"],
    answer: 0,
    explain: "dnf downgradeは指定したパッケージを、リポジトリにある古いバージョンへ戻すために使われます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "dpkgに、通常とは異なるアーキテクチャ(32ビット等)のパッケージを扱えるよう追加設定するコマンドはどれか。",
    choices: ["dpkg --add-architecture", "dpkg --print-architecture", "dpkg -i", "dpkg -l"],
    answer: 0,
    explain: "dpkg --add-architecture i386のように指定すると、マルチアーキテクチャ環境として追加のアーキテクチャ向けパッケージを扱えるようになります。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "カーネルを更新した際に、対応するinitramfsイメージを再生成するDebian系のコマンドはどれか。",
    choices: ["update-initramfs", "update-grub", "grub-mkconfig", "dpkg-reconfigure"],
    answer: 0,
    explain: "update-initramfsはDebian系で、カーネルの更新に合わせてinitramfsイメージを再生成するために使われます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "システムにインストールされているカーネルイメージパッケージの命名として、Debian系で一般的なものはどれか。",
    choices: ["linux-image-バージョン", "kernel-バージョン", "vmlinuz-package", "boot-kernel"],
    answer: 0,
    explain: "Debian系ではlinux-image-バージョンという名前でカーネルパッケージが提供されるのが一般的です。Red Hat系ではkernelという名前のパッケージが使われます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "yumやdnfで、インストール済みのパッケージを一旦削除してから同じバージョンを入れ直すサブコマンドはどれか。",
    choices: ["reinstall", "downgrade", "swap", "check"],
    answer: 0,
    explain: "yum reinstall(dnf reinstall)は現在のバージョンのまま、パッケージを削除して再インストールします。破損したファイルの復旧などに使われます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "bashのコマンドライン編集で、直前に実行したコマンドを検索する操作はどれか。",
    choices: ["Ctrl+R(逆方向インクリメンタル検索)", "Ctrl+A", "Ctrl+E", "Ctrl+K"],
    answer: 0,
    explain: "Ctrl+Rを押すと、コマンド履歴に対してインクリメンタルな逆方向検索が始まり、入力した文字列にマッチする過去のコマンドを探せます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "bashのコマンドライン編集で、カーソルを行頭に移動させるキー操作はどれか。",
    choices: ["Ctrl+A", "Ctrl+E", "Ctrl+K", "Ctrl+U"],
    answer: 0,
    explain: "Ctrl+Aはカーソルを行頭に移動します。行末に移動する場合はCtrl+Eを使います。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "bashのコマンドライン編集で、カーソル位置から行末までを削除するキー操作はどれか。",
    choices: ["Ctrl+K", "Ctrl+U", "Ctrl+A", "Ctrl+E"],
    answer: 0,
    explain: "Ctrl+Kはカーソル位置から行末までの文字を削除します。行頭までを削除する場合はCtrl+Uを使います。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "findで見つけたファイル名にスペースなどの特殊文字が含まれていても安全にxargsへ渡すための組み合わせはどれか。",
    choices: ["find ... -print0 と xargs -0", "find ... -print と xargs", "find ... -name と xargs -n", "find ... -exec と xargs -p"],
    answer: 0,
    explain: "find -print0でヌル文字区切りの出力にし、xargs -0でそれを受け取ることで、ファイル名にスペースや改行が含まれていても正しく処理できます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "システムの言語・地域設定(ロケール)を確認するコマンドはどれか。",
    choices: ["locale", "date", "cal", "hostname"],
    answer: 0,
    explain: "localeコマンドは現在のロケール設定(言語、文字コード、日付形式など)を確認できます。設定を変更する環境変数にはLANGやLC_ALLがあります。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "システム全体のロケール(言語設定)を指定する主要な環境変数はどれか。",
    choices: ["LANG", "PATH", "HOME", "PS1"],
    answer: 0,
    explain: "LANG環境変数はシステム全体のデフォルトロケールを指定します。個別のカテゴリを上書きしたい場合はLC_*系の変数を使い、LC_ALLは全てを強制的に上書きします。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "テキストファイルの文字エンコーディングを変換するコマンドはどれか。",
    choices: ["iconv", "tr", "sed", "awk"],
    answer: 0,
    explain: "iconvは指定した文字エンコーディング間でテキストファイルを変換するコマンドです(例: SJISからUTF-8への変換)。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "grepで検索にマッチした部分の文字列のみを表示するオプションはどれか。",
    choices: ["-o", "-c", "-v", "-l"],
    answer: 0,
    explain: "grep -oはマッチした行全体ではなく、マッチした部分の文字列だけを抜き出して表示します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "grepでマッチした行の前後の文脈行も一緒に表示するオプションはどれか。",
    choices: ["-C", "-o", "-c", "-l"],
    answer: 0,
    explain: "grep -C 数字で、マッチした行の前後を指定した行数分あわせて表示します。前だけなら-A、後ろだけなら-Bを使います。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "sedで置換結果を画面表示するだけでなく、直接元のファイルを書き換えるオプションはどれか。",
    choices: ["-i", "-n", "-e", "-r"],
    answer: 0,
    explain: "sed -iは処理結果を標準出力に出すのではなく、直接元のファイルを上書きします。バックアップを取りたい場合は-i.bakのように拡張子を指定します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "sortコマンドで、指定したフィールド(列)を基準にソートするオプションはどれか。",
    choices: ["-k", "-n", "-r", "-u"],
    answer: 0,
    explain: "sort -k 2で2番目のフィールドを基準にソートします。数値順にしたい場合は-n、逆順にしたい場合は-rと組み合わせます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "uniqコマンドで、重複行をまとめる際に、その行が何回出現したかも一緒に表示するオプションはどれか。",
    choices: ["-c", "-d", "-u", "-i"],
    answer: 0,
    explain: "uniq -cは各行の出現回数を行頭に付加して表示します。重複行のみ表示したい場合は-d、重複のない行のみは-uを使います。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "awkでフィールドの区切り文字を変更するオプションはどれか。",
    choices: ["-F", "-f", "-v", "-e"],
    answer: 0,
    explain: "awk -F ':' のように指定すると、デフォルトの空白文字ではなく指定した文字をフィールドの区切りとして扱います。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "mount -tオプションで「auto」を指定した場合の動作として正しいものはどれか。",
    choices: [
      "ファイルシステムの種類を自動的に検出してマウントする",
      "自動的にアンマウントされる",
      "自動的にファイルシステムを作成する",
      "常にread-onlyでマウントされる"
    ],
    answer: 0,
    explain: "mount -t autoは、ファイルシステムの種類を明示的に指定せず、カーネルに自動検出させてマウントする指定です(多くの場合デフォルトの挙動でもあります)。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "MBR形式のディスクで、パーティションを4つ以上作成したい場合に必要になる概念はどれか。",
    choices: ["拡張パーティションと論理パーティション", "スワップパーティションの分割", "GPTへの変換のみ", "LVMの物理ボリューム化"],
    answer: 0,
    explain: "MBR形式では基本パーティションは最大4つまでのため、それ以上必要な場合は1つを拡張パーティションとし、その中に複数の論理パーティションを作成します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "GPT形式のパーティションで、それぞれのパーティションの種類を識別するために使われる識別子はどれか。",
    choices: ["GUID(パーティションタイプGUID)", "inode番号", "UUID(ファイルシステムのUUID)のみ", "メジャー番号"],
    answer: 0,
    explain: "GPTでは各パーティションにパーティションタイプを示すGUIDが割り当てられます。ファイルシステム自体のUUIDとは別の識別子です。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "デバイスファイルの命名で、最初に検出されたSATA/SCSI/USBディスクを表す一般的な名前はどれか。",
    choices: ["/dev/sda", "/dev/hda", "/dev/nvme0n1", "/dev/xvda"],
    answer: 0,
    explain: "/dev/sdaは最初に検出されたSATA/SCSI/USB接続のディスクを表す標準的な命名です。2台目以降は/dev/sdb、/dev/sdcと続きます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "NVMe接続のSSDに使われる典型的なデバイス名の形式はどれか。",
    choices: ["/dev/nvme0n1", "/dev/sda", "/dev/hda", "/dev/mmcblk0"],
    answer: 0,
    explain: "NVMe接続のディスクは/dev/nvme0n1のような形式で命名されます(0番目のコントローラの1番目の名前空間)。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "デバイスファイルに割り当てられる、デバイスの種類とインスタンスを識別する2つの番号を何と呼ぶか。",
    choices: ["メジャー番号とマイナー番号", "UUIDとGUID", "inodeとブロック番号", "PIDとPPID"],
    answer: 0,
    explain: "デバイスファイルにはメジャー番号(デバイスの種類・ドライバを示す)とマイナー番号(同種のデバイス内での識別)が割り当てられています。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "特殊なデバイスファイル(キャラクタデバイスやブロックデバイス)を手動で作成するコマンドはどれか。",
    choices: ["mknod", "mkfs", "touch", "ln"],
    answer: 0,
    explain: "mknodはメジャー番号・マイナー番号を指定してデバイスファイルを手動で作成するコマンドです。近年はudevが自動作成するため直接使う機会は減っています。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "書き込んだデータを単に捨てる(何も起こらない)特殊なデバイスファイルはどれか。",
    choices: ["/dev/null", "/dev/zero", "/dev/random", "/dev/tty"],
    answer: 0,
    explain: "/dev/nullに書き込んだデータは単に破棄されます。不要な出力を捨てたい場合に「コマンド > /dev/null」のように使われます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "読み込むと無限に0のバイト列を返す特殊なデバイスファイルはどれか。",
    choices: ["/dev/zero", "/dev/null", "/dev/random", "/dev/urandom"],
    answer: 0,
    explain: "/dev/zeroを読み込むと、無限に0のバイト列が返されます。空のファイルの作成やメモリ領域の初期化に使われることがあります。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "暗号鍵の生成などに使われる、乱数を生成する特殊なデバイスファイルを2つ選べ。",
    choices: ["/dev/random", "/dev/urandom", "/dev/null", "/dev/zero", "/dev/tty"],
    answer: [0, 1],
    explain: "/dev/randomと/dev/urandomはどちらも乱数を生成する特殊デバイスファイルです。/dev/randomはエントロピー不足時に待機することがあり、/dev/urandomは待機せず生成し続けます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "指定したinode番号を持つファイルを検索するfindコマンドのオプションはどれか。",
    choices: ["-inum", "-name", "-perm", "-size"],
    answer: 0,
    explain: "find . -inum 番号で、指定したinode番号に一致するファイルを検索できます。ハードリンクされた全てのファイルを見つけたい場合などに使われます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "過去1分・5分・15分の平均負荷が記録されている仮想ファイルはどれか。",
    choices: ["/proc/loadavg", "/proc/stat", "/proc/uptime", "/proc/version"],
    answer: 0,
    explain: "/proc/loadavgにはuptimeコマンドでも表示される平均負荷(ロードアベレージ)の値が記録されています。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "CPUの使用状況やコンテキストスイッチ回数など、カーネル全体の統計情報が記録されている仮想ファイルはどれか。",
    choices: ["/proc/stat", "/proc/loadavg", "/proc/meminfo", "/proc/mounts"],
    answer: 0,
    explain: "/proc/statにはCPU使用時間の内訳やコンテキストスイッチ数、起動時刻からのプロセス数など、システム全体の統計情報が記録されています。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムのCPU使用率やI/O待ち時間を時系列で記録・確認できるパフォーマンス監視ツールはどれか。",
    choices: ["sar", "top", "ps", "who"],
    answer: 0,
    explain: "sar(sysstatパッケージに含まれる)は、CPU・メモリ・ディスクI/Oなどの統計情報を定期的に記録し、過去のデータも確認できるツールです。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "マルチコアCPUの各コアごとの使用率を表示するコマンドはどれか。",
    choices: ["mpstat", "vmstat", "iostat", "uptime"],
    answer: 0,
    explain: "mpstatはマルチプロセッサ環境で、CPUコアごとの使用率を個別に表示できるコマンドです。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "vmstatコマンドで確認できる情報として適切なものはどれか。",
    choices: [
      "プロセス数、メモリ、スワップ、I/O、CPUの状況を1画面で確認できる",
      "ネットワークインターフェースの設定のみを確認できる",
      "インストール済みパッケージの一覧のみを確認できる",
      "ファイルのパーミッションのみを確認できる"
    ],
    answer: 0,
    explain: "vmstatはプロセス数、メモリ使用量、スワップの活動、I/O、CPU使用率など、システム全体の稼働状況を1つの画面でまとめて確認できます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "プロセスやリソースをグループ化し、CPUやメモリの使用量を制限・管理するLinuxカーネルの機能はどれか。",
    choices: ["cgroups(コントロールグループ)", "namespaces", "SELinux", "AppArmor"],
    answer: 0,
    explain: "cgroupsはプロセスをグループ化し、CPU・メモリ・I/Oなどのリソース使用量を制限・監視するためのカーネル機能で、コンテナ技術の基盤の一つです。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "プロセスから見えるプロセスID空間やネットワーク、ファイルシステムなどを隔離するLinuxカーネルの機能はどれか。",
    choices: ["namespaces(名前空間)", "cgroups", "systemd-journald", "SELinux"],
    answer: 0,
    explain: "namespacesはプロセスごとに見えるリソース(PID、ネットワーク、マウントポイントなど)を隔離するカーネル機能で、コンテナの分離を実現する基盤技術です。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "cgroupsの階層構造を確認するコマンドはどれか。",
    choices: ["systemd-cgls", "systemctl status", "journalctl", "loginctl"],
    answer: 0,
    explain: "systemd-cglsは現在のcgroup階層をツリー形式で表示し、どのプロセスがどのcgroupに属しているかを確認できます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムクラッシュ時にメモリの内容(カーネルダンプ)を保存する仕組みに関連する機能はどれか。",
    choices: ["kdump(kexecを利用したクラッシュダンプ機構)", "cron", "udev", "quota"],
    answer: 0,
    explain: "kdumpはシステムクラッシュ発生時に、kexecの仕組みを使って別のカーネルを起動し、クラッシュ時のメモリ内容(コアダンプ)を保存する仕組みです。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "プロセスが異常終了した際に生成される、メモリの状態を記録したファイル(コアダンプ)のサイズ上限を設定するコマンドはどれか。",
    choices: ["ulimit -c", "ulimit -n", "ulimit -u", "ulimit -f"],
    answer: 0,
    explain: "ulimit -cはコアダンプファイルの最大サイズを設定します。0に設定するとコアダンプの生成が無効になります。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムをスリープ(サスペンド)状態にするsystemdのコマンドはどれか。",
    choices: ["systemctl suspend", "systemctl hibernate", "systemctl poweroff", "systemctl reboot"],
    answer: 0,
    explain: "systemctl suspendはメモリに状態を保持したまま低消費電力状態に移行します。ディスクに状態を保存して完全に電源を切るのはsystemctl hibernateです。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムの状態をディスクに保存してから電源を切り、次回起動時に復元する機能はどれか。",
    choices: ["ハイバネーション(休止状態)", "サスペンド", "リブート", "シャットダウン"],
    answer: 0,
    explain: "ハイバネーション(休止状態)はメモリの内容をディスク上のスワップ領域などに保存してから電源を切り、次回起動時に元の状態を復元する機能です。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "yumのパッケージグループの一覧を表示するサブコマンドはどれか。",
    choices: ["yum group list", "yum group install", "yum group remove", "yum group info"],
    answer: 0,
    explain: "yum group list(dnf group list)は、インストール可能なパッケージグループの一覧を表示します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "dnfで、あるアプリケーションの複数バージョンをまとめて管理できる仕組み(モジュール)を一覧するサブコマンドはどれか。",
    choices: ["dnf module list", "dnf group list", "dnf history", "dnf repolist"],
    answer: 0,
    explain: "dnf moduleはApplication Streamsという仕組みを利用し、同じアプリケーションの異なるバージョン(モジュール)を切り替えてインストールできるようにするRHEL系の機能です。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "インストール済みのSnapパッケージの一覧を確認するコマンドはどれか。",
    choices: ["snap list", "snap install", "snap find", "snap info"],
    answer: 0,
    explain: "snap listは現在インストールされているSnapパッケージの一覧とバージョンを表示します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "インストール済みのFlatpakアプリケーションの一覧を確認するコマンドはどれか。",
    choices: ["flatpak list", "flatpak install", "flatpak search", "flatpak info"],
    answer: 0,
    explain: "flatpak listは現在インストールされているFlatpakアプリケーションの一覧を表示します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "aptで、リポジトリごとの優先度(ピン留めの状態)を確認するコマンドはどれか。",
    choices: ["apt-cache policy", "apt-cache search", "apt-cache depends", "apt-cache stats"],
    answer: 0,
    explain: "apt-cache policyはパッケージごとのインストール状況と、各リポジトリの優先度(Pin-Priority)を確認できます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "apt cleanとapt autocleanの違いとして正しいものはどれか。",
    choices: [
      "autocleanは現在入手できない(古くなった)パッケージのキャッシュのみを削除する",
      "autocleanは全てのキャッシュを無条件に削除する",
      "cleanはキャッシュを一切削除しない",
      "cleanとautocleanに違いはない"
    ],
    answer: 0,
    explain: "apt cleanはキャッシュされた全ての.debファイルを削除しますが、apt autocleanはもう入手できない(リポジトリから削除された)古いバージョンのキャッシュのみを削除します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "yumで過去のトランザクション(パッケージ操作)を取り消す(元に戻す)サブコマンドはどれか。",
    choices: ["yum history undo", "yum history redo", "yum history list", "yum history info"],
    answer: 0,
    explain: "yum history undo IDで、指定したトランザクションIDの操作を取り消して以前の状態に戻すことができます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "あるパッケージが提供している機能(仮想パッケージ名やファイル)から、該当するパッケージを検索するdnfのサブコマンドはどれか。",
    choices: ["dnf provides", "dnf search", "dnf list", "dnf info"],
    answer: 0,
    explain: "dnf provides ファイルパスのように指定すると、そのファイルを提供しているパッケージを検索できます。コマンドが見つからない時の原因調査にも使われます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "RPMパッケージのバージョン比較に使われる、通常のバージョン番号より優先される特別なフィールドはどれか。",
    choices: ["Epoch(エポック)", "Release", "Vendor", "Group"],
    answer: 0,
    explain: "Epochはバージョン番号の付け方が変わった場合などに、通常のバージョン比較よりも優先して使われる整数フィールドです。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "bashのシェルスクリプトで条件分岐を行う基本構文の開始・終了キーワードの組み合わせはどれか。",
    choices: ["if 〜 fi", "for 〜 done", "while 〜 done", "case 〜 esac"],
    answer: 0,
    explain: "bashの条件分岐はif ... then ... fiという構文で記述します。forやwhileはfor...done、while...doneのように対応するキーワードで閉じます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "bashのシェルスクリプトで繰り返し処理(forループ)を終了させるキーワードはどれか。",
    choices: ["done", "fi", "esac", "end"],
    answer: 0,
    explain: "forループやwhileループはdoneキーワードで終了を示します。if文はfi、case文はesacで終了を示します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "bashのシェルスクリプトで複数の条件に応じて処理を分岐させる構文(switch文に相当)を終了させるキーワードはどれか。",
    choices: ["esac", "done", "fi", "end"],
    answer: 0,
    explain: "case文はcase 〜 esacという構文で記述します。esacはcaseを逆から綴ったものです。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "シェルスクリプトの実行内容を1行ずつ画面に表示しながらデバッグするために使うオプションはどれか。",
    choices: ["set -x", "set -e", "set -u", "set -o"],
    answer: 0,
    explain: "set -xは実行される各コマンドを展開後の形で画面に表示しながら実行するデバッグ用のオプションです。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "シェルスクリプトの途中でエラー(0以外の終了ステータス)が発生した場合、即座にスクリプトを終了させるオプションはどれか。",
    choices: ["set -e", "set -x", "set -v", "set -n"],
    answer: 0,
    explain: "set -eを指定すると、コマンドが失敗した時点でスクリプトの実行が即座に中断されます。エラーハンドリングを厳格にしたい場合に使われます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "bashで整数の四則演算を行う構文として正しいものはどれか。",
    choices: ["$((式))", "$[式]のみ", "${式}", "$<式>"],
    answer: 0,
    explain: "$((式))はbashにおける算術式展開の構文で、加減乗除などの整数演算を行えます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "bashで{1..5}のように記述した場合の展開結果として正しいものはどれか。",
    choices: ["1 2 3 4 5に展開される(ブレース展開)", "何も展開されない", "エラーになる", "1..5という文字列のまま出力される"],
    answer: 0,
    explain: "{1..5}はブレース展開と呼ばれる機能で、1から5までの連続した値に展開されます。ループ処理などでよく利用されます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "既存のパーティションを対話的ではなく、スクリプトから操作できるモードで動作させるコマンドはどれか。",
    choices: ["parted(スクリプトモードにも対応)", "fdisk(対話操作のみ)", "mkfs", "df"],
    answer: 0,
    explain: "partedは対話モードに加えて、コマンドライン引数を直接指定するスクリプトモードでもパーティション操作ができます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "パーティションを拡張した後、その上のファイルシステムのサイズもあわせて拡張するext系のコマンドはどれか。",
    choices: ["resize2fs", "xfs_growfs", "mkfs.ext4", "tune2fs -L"],
    answer: 0,
    explain: "resize2fsはext2/ext3/ext4ファイルシステムのサイズを拡張(または縮小)します。XFSの場合はxfs_growfsを使います(縮小には対応していません)。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "XFSファイルシステムのサイズを拡張するコマンドはどれか。",
    choices: ["xfs_growfs", "resize2fs", "mkfs.xfs", "xfs_repair"],
    answer: 0,
    explain: "xfs_growfsはマウント済みのXFSファイルシステムのサイズを拡張します。XFSは仕様上、縮小には対応していません。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "XFSファイルシステムの整合性を修復するコマンドはどれか。",
    choices: ["xfs_repair", "fsck.ext4", "resize2fs", "tune2fs"],
    answer: 0,
    explain: "xfs_repairはXFSファイルシステムの整合性をチェック・修復するための専用コマンドです。ext系のfsckに相当します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "スワップ領域にラベルを付けて作成するmkswapのオプションはどれか。",
    choices: ["-L", "-U", "-c", "-v"],
    answer: 0,
    explain: "mkswap -L ラベル名で、作成するスワップ領域にラベルを付けられます。/etc/fstabでラベル指定によるマウントを行う際に活用できます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "現在有効になっているスワップ領域の一覧と使用状況が記録されている仮想ファイルはどれか。",
    choices: ["/proc/swaps", "/proc/mounts", "/proc/meminfo", "/proc/partitions"],
    answer: 0,
    explain: "/proc/swapsには現在有効なスワップ領域(パーティションやファイル)の一覧、サイズ、使用量、優先度が記録されています。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "メモリ上に一時的なファイルシステムを作成する、揮発性のファイルシステムはどれか。",
    choices: ["tmpfs", "ext4", "XFS", "ISO 9660"],
    answer: 0,
    explain: "tmpfsはメモリ(および必要に応じてスワップ)上に作られる揮発性のファイルシステムで、/tmpや/dev/shmなどでよく使われます。再起動すると内容は消えます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "複数のディレクトリを重ね合わせて1つのファイルシステムのように見せる、コンテナ技術でよく使われるファイルシステムはどれか。",
    choices: ["OverlayFS", "tmpfs", "procfs", "sysfs"],
    answer: 0,
    explain: "OverlayFSは複数のディレクトリ(レイヤー)を重ね合わせて1つのファイルシステムとして見せる仕組みで、Dockerなどのコンテナ技術で広く使われています。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "通常のファイルをブロックデバイスであるかのように扱う「ループバックマウント」を行うためのオプションはどれか。",
    choices: ["mount -o loop", "mount -o bind", "mount -o remount", "mount -o ro"],
    answer: 0,
    explain: "mount -o loopを使うと、ISOイメージファイルなどの通常のファイルを、あたかもブロックデバイスであるかのようにマウントできます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルをループバックデバイスとして関連付ける、より低レベルなコマンドはどれか。",
    choices: ["losetup", "mount", "fdisk", "parted"],
    answer: 0,
    explain: "losetupはファイルをループバックデバイス(/dev/loop0など)として関連付けたり解除したりするコマンドです。mount -o loopは内部的にこれを利用しています。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "ログイン前に表示されるメッセージ(「Welcome to...」等)を設定するファイルはどれか。",
    choices: ["/etc/issue", "/etc/motd", "/etc/profile", "/etc/hostname"],
    answer: 0,
    explain: "/etc/issueはログインプロンプトの前に表示されるメッセージを設定します。ログイン後に表示されるメッセージは/etc/motd(message of the day)です。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "ログイン成功後に表示される「今日のメッセージ」を設定するファイルはどれか。",
    choices: ["/etc/motd", "/etc/issue", "/etc/hosts", "/etc/fstab"],
    answer: 0,
    explain: "/etc/motd(message of the day)には、ログイン成功後に表示されるお知らせメッセージを記述します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムにログインしている全ユーザーの端末にメッセージを一斉送信するコマンドはどれか。",
    choices: ["wall", "write", "mesg", "who"],
    answer: 0,
    explain: "wallはログイン中の全ユーザーの端末にメッセージを一斉送信します。特定の1ユーザーに送る場合はwriteを使います。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "他のユーザーからのwrite/wallによるメッセージ受信を許可・拒否する設定を切り替えるコマンドはどれか。",
    choices: ["mesg", "wall", "write", "who"],
    answer: 0,
    explain: "mesg y/nで、他のユーザーからのメッセージ(write/wall)を受け取るかどうかを自分の端末で設定できます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "予約されているシステムのシャットダウンを取り消すオプションはどれか。",
    choices: ["shutdown -c", "shutdown -h", "shutdown -r", "shutdown now"],
    answer: 0,
    explain: "shutdown -cは、shutdownコマンドで予約された(まだ実行されていない)シャットダウン処理を取り消します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムに搭載されている論理CPU(プロセッサ)の数を単純に表示するコマンドはどれか。",
    choices: ["nproc", "lscpu(詳細情報も含む)", "nprocとlscpuの両方が使われる", "uptime"],
    answer: 2,
    explain: "nprocは論理CPU数だけをシンプルに表示し、lscpuはコア数や物理CPU数なども含めた詳細な情報を表示します。どちらもCPU数の確認に使われます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "特定のプロセスを指定したCPUコアだけで動作するよう固定する(CPUアフィニティを設定する)コマンドはどれか。",
    choices: ["taskset", "nice", "renice", "ulimit"],
    answer: 0,
    explain: "tasksetはプロセスが使用できるCPUコアを指定し、特定のコアにだけ処理を割り当てる(CPUアフィニティを設定する)ためのコマンドです。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "dmesgのリングバッファの内容を全て消去(クリア)するオプションはどれか。",
    choices: ["dmesg -c", "dmesg -T", "dmesg -k", "dmesg -w"],
    answer: 0,
    explain: "dmesg -cは現在の内容を表示した後、カーネルのリングバッファをクリアします。新しいメッセージだけを追いたい場合に使われます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "yumやdnfの高度な機能(repoqueryなど)を提供する追加パッケージ群はどれか。",
    choices: ["yum-utils(またはdnf-utils)", "yum-core", "rpm-build", "createrepo-core"],
    answer: 0,
    explain: "yum-utils(dnf系ではdnf-utils/dnf-plugins-core)には、repoqueryなど標準のyum/dnfには含まれない便利な追加コマンドが収録されています。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "特定のファイルを提供しているDebianパッケージを、インストールされていないものも含めて検索するコマンドはどれか。",
    choices: ["apt-file search", "dpkg -S", "apt-cache search", "dpkg -l"],
    answer: 0,
    explain: "apt-file searchはリポジトリ全体のパッケージ内容を検索し、まだインストールしていないパッケージの中からも指定ファイルを提供するものを探せます。dpkg -Sはインストール済みパッケージのみが対象です。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "更新可能なパッケージの一覧をaptで確認するコマンドはどれか。",
    choices: ["apt list --upgradable", "apt list --installed", "apt list --all-versions", "apt search"],
    answer: 0,
    explain: "apt list --upgradableは、現在インストールされているパッケージのうち、更新版が利用可能なものだけを一覧表示します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "2つのdpkgパッケージのバージョン番号の大小を比較するコマンドはどれか。",
    choices: ["dpkg --compare-versions", "dpkg -l", "dpkg --print-avail", "dpkg --audit"],
    answer: 0,
    explain: "dpkg --compare-versions バージョン1 lt バージョン2のように使い、スクリプト内でバージョン番号の比較(より小さい・大きいなど)を行えます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "設定が中途半端な状態で残っているパッケージがないかをチェックするdpkgのオプションはどれか。",
    choices: ["dpkg --audit", "dpkg --compare-versions", "dpkg -c", "dpkg -L"],
    answer: 0,
    explain: "dpkg --auditは、インストールが不完全な状態で放置されているパッケージがないかをチェックし、問題があれば報告します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "rpmで、インストール済みのパッケージのうち特定の1ファイルだけを検証するオプションの使い方として正しいものはどれか。",
    choices: ["rpm -Vf ファイルパス", "rpm -qf ファイルパス", "rpm -ql パッケージ名", "rpm -qi パッケージ名"],
    answer: 0,
    explain: "rpm -Vf ファイルパスで、そのファイルを含むパッケージ全体ではなく、指定したファイル単体の検証結果を確認できます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "xargsで、1回に渡す引数の個数を制限するオプションはどれか。",
    choices: ["-n", "-p", "-0", "-I"],
    answer: 0,
    explain: "xargs -n 数値で、1回のコマンド実行に渡す引数の最大個数を指定できます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "xargsで、コマンドを実行する前に確認を求める(対話的に実行する)オプションはどれか。",
    choices: ["-p", "-n", "-0", "-t"],
    answer: 0,
    explain: "xargs -pは実際に実行する前に確認を求め、yを入力した場合のみコマンドが実行されます。危険な操作の前に安全性を確認したい場合に便利です。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "findコマンドで、検索するディレクトリの深さ(階層)を指定して制限するオプションはどれか。",
    choices: ["-maxdepth", "-mindepth のみ", "-maxdepthと-mindepthの両方が存在する", "-depth"],
    answer: 2,
    explain: "-maxdepthは検索する最大階層、-mindepthは検索を開始する最小階層を指定します。両方とも検索範囲を制御するために使われます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "findコマンドで、指定したファイルより新しく更新されたファイルを検索するオプションはどれか。",
    choices: ["-newer", "-mtime", "-atime", "-ctime"],
    answer: 0,
    explain: "find . -newer 基準ファイルで、基準ファイルよりも新しく更新されたファイルを検索できます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "locateコマンドで大文字小文字を区別せずに検索するオプションはどれか。",
    choices: ["-i", "-c", "-r", "-e"],
    answer: 0,
    explain: "locate -iは大文字・小文字を区別せずにファイルパスを検索します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "コマンドの実行ファイルパスに加えて、マニュアルページやソースの場所も含めて検索するコマンドはどれか。",
    choices: ["whereis", "which", "locate", "type"],
    answer: 0,
    explain: "whereisはコマンドの実行ファイルだけでなく、対応するマニュアルページやソースコードの場所も検索して表示します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "ファイル1つずつだけでなく、指定したディレクトリの中身すべてのサイズも表示するduのオプションはどれか。",
    choices: ["-a", "-s", "-h", "-c"],
    answer: 0,
    explain: "du -aは、ディレクトリの合計だけでなく個々のファイルのサイズも含めて表示します。ディレクトリ単位の合計のみでよい場合は-sを使います。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "sortコマンドで、区切り文字(デフォルトは空白)を変更するオプションはどれか。",
    choices: ["-t", "-k", "-n", "-r"],
    answer: 0,
    explain: "sort -t ':'のように指定すると、区切り文字を変更して-kで指定するフィールドの区切りとして使用できます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "ファイルの内容がすでにソート済みかどうかを確認するsortのオプションはどれか。",
    choices: ["-c", "-u", "-r", "-n"],
    answer: 0,
    explain: "sort -cは入力がすでにソートされているかどうかをチェックし、ソートされていない場合はエラーを報告します(出力の並び替えは行いません)。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "ファイルの末尾から、特定の行番号以降を表示するtailの記法はどれか。",
    choices: ["tail -n +行番号", "tail -c 行番号", "tail -f 行番号", "tail -q 行番号"],
    answer: 0,
    explain: "tail -n +10のように「+」を付けて指定すると、10行目から末尾までを表示します(通常の-n 10は末尾10行を意味します)。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "ファイルの先頭から指定したバイト数だけを表示するheadのオプションはどれか。",
    choices: ["-c", "-n", "-b", "-l"],
    answer: 0,
    explain: "head -c 100は先頭から100バイト分だけを表示します。行数で指定する場合は-nを使います。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "wcコマンドで、バイト数ではなく文字数(マルチバイト文字を考慮した文字数)を数えるオプションはどれか。",
    choices: ["-m", "-c", "-l", "-w"],
    answer: 0,
    explain: "wc -mは文字数を数えます。-cはバイト数を数えるため、マルチバイト文字(日本語など)を含む場合は結果が異なります。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "/etc/fstabの各フィールドのうち、dumpコマンドによるバックアップ対象かどうかを示すフィールドはどれか。",
    choices: ["dumpフィールド(5番目)", "passフィールド(6番目)", "optionsフィールド(4番目)", "typeフィールド(3番目)"],
    answer: 0,
    explain: "/etc/fstabの5番目のフィールド(dump)は、dumpコマンドによるバックアップ対象かどうかを示すフラグで、通常は0(対象外)か1(対象)が指定されます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "/etc/fstabの各フィールドのうち、起動時のfsckチェック順序を示すフィールドはどれか。",
    choices: ["passフィールド(6番目)", "dumpフィールド(5番目)", "optionsフィールド(4番目)", "typeフィールド(3番目)"],
    answer: 0,
    explain: "/etc/fstabの6番目のフィールド(pass)は、起動時にfsckを実行する順序を示します。0はチェックしない、1はルートファイルシステム、2はそれ以外という慣例があります。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルシステム全体をバックアップする伝統的なUnix系のコマンドの組み合わせはどれか。",
    choices: ["dump と restore", "tar と gzip", "rsync と scp", "cp と mv"],
    answer: 0,
    explain: "dumpとrestoreは、ファイルシステム単位でのバックアップとリストアを行う伝統的なUnix系のツールです(ext系ファイルシステム向け)。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "差分のみを効率よく転送してファイルやディレクトリを同期するコマンドはどれか。",
    choices: ["rsync", "cp", "dump", "dd"],
    answer: 0,
    explain: "rsyncは転送元と転送先の差分だけを効率的に転送する仕組みを持ち、バックアップやミラーリングに広く使われます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "tarで特定のファイルやディレクトリをアーカイブ対象から除外するオプションはどれか。",
    choices: ["--exclude", "--include", "--diff", "--append"],
    answer: 0,
    explain: "tar --exclude=パターンで、指定したパターンに一致するファイルをアーカイブの対象から除外できます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "標準入出力を介してファイルをアーカイブ・展開できる、tarと似た目的のコマンドはどれか。",
    choices: ["cpio", "dd", "split", "join"],
    answer: 0,
    explain: "cpioはファイルリストを標準入力から受け取り、アーカイブの作成・展開を行う古くからあるコマンドです。RPMの内部でも利用されています。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "findコマンドで、条件に一致したファイルを見つけ次第削除するオプションはどれか。",
    choices: ["-delete", "-exec rm", "-remove", "-rm"],
    answer: 0,
    explain: "find . -name '*.tmp' -deleteのように指定すると、条件に一致したファイルをその場で削除できます。-exec rm {} \\;でも同様のことが可能です。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルのタイムスタンプを、現在時刻ではなく任意の日時に指定して変更するtouchのオプションはどれか。",
    choices: ["-t", "-c", "-a", "-m"],
    answer: 0,
    explain: "touch -t 日時 ファイルで、任意の日時にタイムスタンプを設定できます。-aはアクセス時刻のみ、-mは更新時刻のみを変更する際に使われます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ディスク使用量の集計時に、別のファイルシステムをまたがず同一ファイルシステム内だけに限定するduのオプションはどれか。",
    choices: ["-x", "-a", "-s", "-h"],
    answer: 0,
    explain: "du -xは集計対象を同一ファイルシステム内に限定し、他のファイルシステムがマウントされているサブディレクトリを集計対象から除外します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "クォータの猶予期間(ソフトリミット超過後、書き込みが完全に禁止されるまでの期間)を設定するコマンドはどれか。",
    choices: ["edquota -t", "edquota -u", "quotaon -a", "repquota -a"],
    answer: 0,
    explain: "edquota -tは、ソフトリミットを超過してからハードリミットのように扱われるまでの猶予期間(グレースピリオド)を設定します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "全ユーザーのディスククォータ使用状況をまとめてレポートするコマンドはどれか。",
    choices: ["repquota -a", "edquota -a", "quotaon -a", "quotacheck -a"],
    answer: 0,
    explain: "repquota -aは、クォータが有効になっている全てのファイルシステムについて、各ユーザーの使用状況をまとめて表示します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "現在ログイン中のユーザーとその作業内容(実行中のコマンド)を一緒に表示するコマンドはどれか。",
    choices: ["w", "who", "last", "id"],
    answer: 0,
    explain: "wはwhoの情報に加えて、各ユーザーが現在何のコマンドを実行しているか、CPU使用時間なども表示します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "過去のログイン履歴(ログイン・ログアウトの記録)を表示するコマンドはどれか。",
    choices: ["last", "who", "w", "id"],
    answer: 0,
    explain: "lastは/var/log/wtmpを参照して、過去のログイン・ログアウトの履歴を表示します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "ログイン失敗の履歴を表示するコマンドはどれか。",
    choices: ["lastb", "last", "who", "w"],
    answer: 0,
    explain: "lastbは/var/log/btmpを参照し、ログイン失敗の履歴を表示します(有効化されていない環境もあります)。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "ログイン成功履歴が記録されるログファイルはどれか。",
    choices: ["/var/log/wtmp", "/var/log/btmp", "/var/log/messages", "/var/log/dmesg"],
    answer: 0,
    explain: "/var/log/wtmpにはログイン・ログアウトの成功履歴が記録されており、lastコマンドがこれを参照します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムが仮想マシン上で動作しているかどうかを検出するsystemd関連のコマンドはどれか。",
    choices: ["systemd-detect-virt", "systemctl status", "hostnamectl", "loginctl"],
    answer: 0,
    explain: "systemd-detect-virtは現在の環境が仮想化されているか、されている場合はどの仮想化技術(KVM、VMwareなど)かを検出します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "ホスト名を永続的に変更する際、hostnamectlで使うサブコマンドはどれか。",
    choices: ["hostnamectl set-hostname", "hostnamectl status", "hostnamectl list", "hostnamectl show"],
    answer: 0,
    explain: "hostnamectl set-hostname 新しい名前で、/etc/hostnameも含めて永続的にホスト名を変更します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "GRUB2で、メニューが表示されてから自動的にデフォルト項目が起動されるまでの待ち時間を指定する変数はどれか。",
    choices: ["GRUB_TIMEOUT", "GRUB_DEFAULT", "GRUB_DISTRIBUTOR", "GRUB_CMDLINE_LINUX"],
    answer: 0,
    explain: "/etc/default/grub内のGRUB_TIMEOUTで、メニュー表示から自動起動までの待ち時間(秒)を指定します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "GRUB2で、デフォルトで起動するメニュー項目(何番目のエントリか)を指定する変数はどれか。",
    choices: ["GRUB_DEFAULT", "GRUB_TIMEOUT", "GRUB_HIDDEN_TIMEOUT", "GRUB_TERMINAL"],
    answer: 0,
    explain: "GRUB_DEFAULTでデフォルトの起動対象(番号または名前)を指定します。savedを指定すると前回起動した項目を記憶させることもできます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "有効になっているスワップ領域を簡潔な表形式で確認するswaponのオプションはどれか。",
    choices: ["swapon --show", "swapon -a", "swapon -d", "swapon -e"],
    answer: 0,
    explain: "swapon --showは、有効なスワップ領域をNAME・TYPE・SIZE・USED・PRIOという列を持つ表形式で表示します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "rpm -Uvhというオプションの組み合わせの意味として正しいものはどれか。",
    choices: [
      "アップグレード、詳細表示、進捗をハッシュマークで表示",
      "削除、詳細表示、依存関係を無視",
      "問い合わせ、検証、強制実行",
      "インストール、静音、確認プロンプトなし"
    ],
    answer: 0,
    explain: "-Uはアップグレード(未インストールなら新規インストール)、-vは詳細表示(verbose)、-hはハッシュマーク(#)による進捗表示を意味します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "パッケージをビルドするために必要な依存パッケージ(開発用ライブラリなど)をまとめてインストールするaptのサブコマンドはどれか。",
    choices: ["apt-get build-dep", "apt-get source", "apt-get install", "apt-cache depends"],
    answer: 0,
    explain: "apt-get build-depは、指定したパッケージをソースからビルドするために必要な依存パッケージをまとめてインストールします。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "現在のパッケージ選択状態(インストール/未インストール)をファイルに書き出すdpkgのオプションはどれか。",
    choices: ["dpkg --get-selections", "dpkg --set-selections", "dpkg -l", "dpkg -s"],
    answer: 0,
    explain: "dpkg --get-selections > ファイルで現在のパッケージ選択状態を書き出せます。別のマシンで同じ構成を再現する際にdpkg --set-selectionsで読み込みます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "書き出しておいたパッケージ選択状態のファイルを読み込み、同じ構成を再現するdpkgのオプションはどれか。",
    choices: ["dpkg --set-selections", "dpkg --get-selections", "dpkg -i", "dpkg -c"],
    answer: 0,
    explain: "dpkg --set-selections < ファイルで、以前dpkg --get-selectionsで書き出しておいたパッケージ選択状態を読み込み、apt-get dselect-upgradeなどと組み合わせて環境を再現します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "まだインストールしていないRPMパッケージファイルに対して、内容を問い合わせるオプションはどれか。",
    choices: ["rpm -qp", "rpm -qa", "rpm -qi", "rpm -ql"],
    answer: 0,
    explain: "rpm -qp パッケージ.rpmで、インストール前のパッケージファイルに対して直接問い合わせを行えます。通常の-qはインストール済みパッケージが対象です。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "特定の機能やファイルを提供しているパッケージをyum/dnfで検索するサブコマンドはどれか。",
    choices: ["yum whatprovides", "yum search", "yum list", "yum info"],
    answer: 0,
    explain: "yum whatprovides '*/ファイル名'のように指定すると、そのファイルを提供しているパッケージを検索できます(dnf provides と同等です)。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "入力された行の順序をランダムにシャッフルするコマンドはどれか。",
    choices: ["shuf", "sort -R のみ", "shuf、sort -Rいずれも使われる", "rev"],
    answer: 2,
    explain: "shufは専用のシャッフルコマンドで、sort -Rでもランダムな並び替えに近いことができます。どちらも行のシャッフルに利用されます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "タブや行末の空白などの非表示文字を可視化して表示するcatのオプションはどれか。",
    choices: ["-A", "-n", "-s", "-b"],
    answer: 0,
    explain: "cat -Aはタブ(^I)や行末($)などの非表示文字を可視化して表示し、意図しない空白文字の混入などを発見しやすくします。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "バイナリファイルの中から人間が読める文字列部分だけを抽出するコマンドはどれか。",
    choices: ["strings", "od", "xxd", "file"],
    answer: 0,
    explain: "stringsはバイナリファイルの中から、印字可能な文字列(ある程度の長さのASCII文字列など)だけを抽出して表示します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "ファイルの種類をMIMEタイプ形式で表示するfileコマンドのオプションはどれか。",
    choices: ["-i", "-b", "-z", "-k"],
    answer: 0,
    explain: "file -iは、通常の説明文ではなくMIMEタイプ(例: text/plain; charset=utf-8)の形式でファイルの種類を表示します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "シェルが記憶しているコマンドの実行パスのキャッシュを確認・操作する組み込みコマンドはどれか。",
    choices: ["hash", "which", "type", "alias"],
    answer: 0,
    explain: "hashはシェルが過去に検索したコマンドのフルパスをキャッシュしており、そのキャッシュの確認やクリア(hash -r)に使われます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "bashの補完機能で使われる候補生成のための組み込みコマンドはどれか。",
    choices: ["compgen", "complete", "compgenとcompleteの両方が関連する", "readline"],
    answer: 2,
    explain: "compgenは補完候補を生成し、completeはどのコマンドに対してどの補完方法を使うかを設定します。どちらもbashの補完機能に関連する組み込みコマンドです。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルをコピーする際、パーミッションやタイムスタンプなどの属性をできるだけ保持してコピーするcpのオプションはどれか。",
    choices: ["-a(アーカイブモード)", "-r", "-f", "-i"],
    answer: 0,
    explain: "cp -aはアーカイブモードと呼ばれ、パーミッション・所有者・タイムスタンプ・シンボリックリンクなどをできるだけそのまま保持してコピーします。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "cpコマンドでパーミッションとタイムスタンプのみを保持してコピーするオプションはどれか。",
    choices: ["-p", "-a", "-r", "-u"],
    answer: 0,
    explain: "cp -pはパーミッション・所有者・タイムスタンプを保持してコピーします。-aはこれに加えてシンボリックリンクや再帰コピーの動作も含みます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "rsyncでパーミッションやタイムスタンプなどを保持しつつ再帰的に同期する、よく使われるオプションの組み合わせはどれか。",
    choices: ["-a(アーカイブモード)", "-v", "-z", "-n"],
    answer: 0,
    explain: "rsync -aはアーカイブモードで、再帰的なコピーに加えてパーミッションやタイムスタンプ、シンボリックリンクなどの属性を保持します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルをコピーすると同時にパーミッションを指定して配置する、インストール作業向けのコマンドはどれか。",
    choices: ["install", "cp", "mv", "dd"],
    answer: 0,
    explain: "installコマンドはファイルのコピーと同時に、パーミッションや所有者の設定、ディレクトリの作成までを1つの操作で行えます。Makefileのインストール処理でよく使われます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルを削除する際に、単なる削除ではなくディスク上のデータを上書きして復元困難にするコマンドはどれか。",
    choices: ["shred", "rm", "truncate", "unlink"],
    answer: 0,
    explain: "shredはファイルの内容を意味のないデータで複数回上書きしてから削除し、単純なrmよりも復元が困難な状態にします。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ディスクやパーティションに残っている、以前のファイルシステムの署名(識別情報)を消去するコマンドはどれか。",
    choices: ["wipefs", "mkfs", "fdisk", "blkid"],
    answer: 0,
    explain: "wipefsは、ディスクに残っている古いファイルシステムやRAIDなどの署名情報を検出・消去するために使われます。フォーマット前のクリーンアップに役立ちます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "パーティション操作を非対話的なスクリプト形式で行える、fdiskに似た古典的なコマンドはどれか。",
    choices: ["sfdisk", "cfdisk", "parted", "gdisk"],
    answer: 0,
    explain: "sfdiskは入力ファイルやコマンドライン引数を使って、非対話的にパーティションテーブルを操作できるコマンドです。バックアップやスクリプトでの一括操作に向いています。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "画面上でカーソル操作を使い、視覚的にパーティションを編集できるテキストUIツールはどれか。",
    choices: ["cfdisk", "sfdisk", "mkfs", "df"],
    answer: 0,
    explain: "cfdiskはncursesベースの画面を使い、カーソル操作で視覚的にパーティションを編集できるツールです。fdiskよりも直感的に操作できます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "LVMのボリュームグループを有効化・無効化するコマンドはどれか。",
    choices: ["vgchange", "vgcreate", "vgextend", "vgdisplay"],
    answer: 0,
    explain: "vgchange -a y/nで、ボリュームグループを有効化(活性化)または無効化できます。システム起動時やメンテナンス時に使われます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "既存の論理ボリュームを削除するコマンドはどれか。",
    choices: ["lvremove", "lvcreate", "lvextend", "lvdisplay"],
    answer: 0,
    explain: "lvremoveは指定した論理ボリュームを削除します。削除する前にファイルシステムをアンマウントしておく必要があります。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "システムに接続されているディスクを走査し、LVMの物理ボリュームを検出するコマンドはどれか。",
    choices: ["pvscan", "pvcreate", "pvdisplay", "pvremove"],
    answer: 0,
    explain: "pvscanはシステムに接続されているブロックデバイスをスキャンし、LVMの物理ボリュームとして認識されているものを検出・表示します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "LVMの物理・論理・ボリュームグループなどを統一的に管理する、より低レベルなカーネルの仕組みはどれか。",
    choices: ["デバイスマッパー(device mapper)", "udev", "cgroups", "namespaces"],
    answer: 0,
    explain: "デバイスマッパーはLVMやディスク暗号化(dm-crypt)の基盤となるカーネルの仕組みで、dmsetupコマンドで直接操作することもできます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "OSの中核としてハードウェアを直接制御し、プロセス管理やメモリ管理などを行うソフトウェアを何と呼ぶか。",
    choices: ["カーネル", "シェル", "デーモン", "ディストリビューション"],
    answer: 0,
    explain: "カーネルはOSの中核部分で、ハードウェアを直接制御し、プロセスやメモリ、ファイルシステムなどの管理を行います。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "ユーザーからのコマンド入力を受け付け、カーネルに処理を依頼する仲介役のプログラムを何と呼ぶか。",
    choices: ["シェル", "カーネル", "ファームウェア", "ブートローダー"],
    answer: 0,
    explain: "シェル(bashなど)はユーザーが入力したコマンドを解釈し、カーネルに処理を依頼する仲介役のプログラムです。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "ユーザーが直接操作しなくても、バックグラウンドで常駐して特定のサービスを提供し続けるプロセスを何と呼ぶか。",
    choices: ["デーモン", "シェル", "カーネル", "ジョブ"],
    answer: 0,
    explain: "デーモンはバックグラウンドで常駐し、Webサーバーやログ収集などの特定のサービスを継続的に提供するプロセスです。名前の末尾が「d」で終わることが多いです(sshdなど)。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "Linuxカーネルに、様々なソフトウェアの組み合わせを加えて配布・利用可能にしたものを何と呼ぶか。",
    choices: ["ディストリビューション", "パッケージ", "リポジトリ", "デーモン"],
    answer: 0,
    explain: "ディストリビューション(Ubuntu、CentOSなど)は、Linuxカーネルに各種ツール・パッケージ管理システムなどを組み合わせて配布可能にしたものです。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "プロセスやユーザーごとに使用できるリソース量の上限を永続的に設定するファイルはどれか。",
    choices: ["/etc/security/limits.conf", "/etc/fstab", "/etc/hosts", "/etc/profile"],
    answer: 0,
    explain: "/etc/security/limits.confには、ユーザーやグループごとにファイル記述子数やプロセス数などの上限(ulimit相当)を永続的に設定できます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "GRUB2の環境ブロック(保存されたデフォルト起動項目など)を編集・確認するコマンドはどれか。",
    choices: ["grub-editenv", "grub-install", "grub-mkconfig", "grub-set-default"],
    answer: 0,
    explain: "grub-editenvはGRUB2が保存している環境変数(前回起動したエントリの記憶など)を確認・編集するためのコマンドです。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "64ビットのx86アーキテクチャを表す一般的な表記はどれか。",
    choices: ["x86_64", "i386", "armhf", "arm64"],
    answer: 0,
    explain: "x86_64(またはamd64)は64ビットのx86アーキテクチャを表す表記です。32ビット版はi386やi686と表記されます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムを強制的に即座にシャットダウンする(通常の終了処理を待たない)オプションの例はどれか。",
    choices: ["poweroff -f", "poweroff --wait", "poweroff -h", "poweroff -c"],
    answer: 0,
    explain: "poweroff -fはinit(またはsystemd)を経由せず、より直接的かつ強制的にシステムを停止させます。緊急時以外は通常のshutdown/poweroffが推奨されます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "多数のソフトウェアパッケージを集めて、インターネットなどを通じて配布するための保管場所を何と呼ぶか。",
    choices: ["リポジトリ", "デーモン", "カーネル", "シェル"],
    answer: 0,
    explain: "リポジトリはパッケージ管理システムがパッケージを取得する配布元(保管場所)のことです。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "あるソフトウェアが動作するために必要とする、別のソフトウェアやライブラリのことを何と呼ぶか。",
    choices: ["依存関係(依存パッケージ)", "リポジトリ", "メタデータ", "スナップショット"],
    answer: 0,
    explain: "依存関係とは、あるパッケージが正しく動作するために必要とする他のパッケージやライブラリのことです。パッケージ管理ツールはこれを自動的に解決します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "コンパイル済みの実行ファイルなどを含み、そのまま展開・インストールして使えるパッケージ形式を何と呼ぶか。",
    choices: ["バイナリパッケージ", "ソースパッケージ", "メタパッケージ", "仮想パッケージ"],
    answer: 0,
    explain: "バイナリパッケージはあらかじめコンパイルされた実行ファイルなどを含み、インストール後すぐに使用できます。ソースコードのままのものはソースパッケージと呼ばれます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "aptがダウンロードしたパッケージファイル(.deb)がキャッシュとして保存される標準的なディレクトリはどれか。",
    choices: ["/var/cache/apt/archives", "/etc/apt/archives", "/tmp/apt", "/usr/cache/apt"],
    answer: 0,
    explain: "/var/cache/apt/archivesには、apt installなどでダウンロードされた.debパッケージファイルがキャッシュとして保存されます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "パッケージ更新後に再起動が必要なサービスを検出してくれるツールの例はどれか。",
    choices: ["needrestart", "apt clean", "dpkg -l", "rpm -qa"],
    answer: 0,
    explain: "needrestartは、共有ライブラリの更新などに伴い再起動が必要なサービスやプロセスを検出し、再起動を促してくれるツールです。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "RPMパッケージに含まれるインストール前後のスクリプト(pre/postスクリプトなど)を確認するオプションはどれか。",
    choices: ["rpm -q --scripts", "rpm -ql", "rpm -qi", "rpm -qf"],
    answer: 0,
    explain: "rpm -q --scriptsは、パッケージに埋め込まれたインストール前・後、削除前・後などのスクリプトの内容を表示します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "標準入力に割り当てられているファイルディスクリプタ番号はどれか。",
    choices: ["0", "1", "2", "3"],
    answer: 0,
    explain: "標準入力は0、標準出力は1、標準エラー出力は2という番号のファイルディスクリプタが割り当てられています。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "標準エラー出力に割り当てられているファイルディスクリプタ番号はどれか。",
    choices: ["2", "0", "1", "3"],
    answer: 0,
    explain: "標準エラー出力のファイルディスクリプタ番号は2です。標準出力(1)と分けてリダイレクトしたい場合に「2>」のように指定します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "現在のディレクトリを表す特殊な記号はどれか。",
    choices: [".", "..", "~", "*"],
    answer: 0,
    explain: "「.」は現在のディレクトリ(カレントディレクトリ)を表します。1つ上の親ディレクトリは「..」で表されます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "1つ上の階層(親ディレクトリ)を表す特殊な記号はどれか。",
    choices: ["..", ".", "~", "-"],
    answer: 0,
    explain: "「..」は親ディレクトリを表します。「cd ..」で1つ上の階層に移動できます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "現在のユーザーのホームディレクトリを表す特殊な記号はどれか。",
    choices: ["~", ".", "..", "$"],
    answer: 0,
    explain: "「~」(チルダ)は現在のユーザーのホームディレクトリを表します。「~ユーザー名」で特定ユーザーのホームディレクトリを指定することもできます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "コマンドを検索する際に参照される、実行ファイルが置かれているディレクトリの一覧を保持する環境変数はどれか。",
    choices: ["PATH", "HOME", "SHELL", "TERM"],
    answer: 0,
    explain: "PATH環境変数には、コマンドを実行する際に検索されるディレクトリの一覧がコロン区切りで設定されています。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "bashのプロンプトの表示形式をカスタマイズする環境変数はどれか。",
    choices: ["PS1", "PATH", "HOME", "IFS"],
    answer: 0,
    explain: "PS1はプライマリプロンプト(通常のコマンド入力待ちの際に表示される文字列)の書式を制御する環境変数です。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルシステム上で、ファイルのメタデータ(パーミッション、所有者、タイムスタンプ、データの位置など)を保持する管理単位を何と呼ぶか。",
    choices: ["inode", "スーパーブロック", "ジャーナル", "マウントポイント"],
    answer: 0,
    explain: "inodeはファイルごとに割り当てられる管理情報の単位で、ファイル名以外のほぼ全てのメタデータとデータブロックへのポインタを保持します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルシステム全体の構成情報(サイズ、空き容量、inode数など)を保持する特別な領域を何と呼ぶか。",
    choices: ["スーパーブロック", "inode", "ジャーナル", "エクステント"],
    answer: 0,
    explain: "スーパーブロックはファイルシステム全体に関する管理情報(サイズ、ブロック数、inode数など)を保持する特別な領域です。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "書き込み操作を実行する前に、変更内容を記録しておき、不正終了時の復旧を早める仕組みを持つファイルシステムを何と呼ぶか。",
    choices: ["ジャーナリングファイルシステム", "スパースファイルシステム", "ネットワークファイルシステム", "仮想ファイルシステム"],
    answer: 0,
    explain: "ジャーナリングファイルシステム(ext3/ext4、XFSなど)は、実際の変更前にジャーナル(記録)を残すことで、不正終了時にも短時間で整合性を復旧できます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルシステムがディレクトリツリーの特定の場所に接続される、その接続先の場所を何と呼ぶか。",
    choices: ["マウントポイント", "スーパーブロック", "inode", "パーティションテーブル"],
    answer: 0,
    explain: "マウントポイントは、あるファイルシステムがディレクトリツリーに組み込まれる際の接続先ディレクトリのことです。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "システム全体の頂点となる、最初にマウントされるファイルシステム(/)を何と呼ぶか。",
    choices: ["ルートファイルシステム", "ホームファイルシステム", "スワップファイルシステム", "一時ファイルシステム"],
    answer: 0,
    explain: "ルートファイルシステムはディレクトリツリーの最上位(/)にあたるファイルシステムで、起動時に最初にマウントされ、他の全てのディレクトリの起点になります。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "SysVinit環境で、Debian系においてサービスの自動起動設定を管理していたコマンドはどれか。",
    choices: ["update-rc.d", "chkconfig", "systemctl", "service"],
    answer: 0,
    explain: "update-rc.dはDebian系のSysVinit環境で、各ランレベルのシンボリックリンクを操作してサービスの自動起動を設定するコマンドでした。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "SysVinitとsystemdの両方の環境で使える、サービスの起動・停止を行う互換コマンドはどれか。",
    choices: ["service", "systemctl", "chkconfig", "telinit"],
    answer: 0,
    explain: "serviceコマンドは元々SysVinit向けですが、systemd環境でも互換レイヤーとしてsystemctlに転送されるため、両方の環境で使えます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "systemdのユニットファイルを変更した後、その変更をsystemdに認識させるコマンドはどれか。",
    choices: ["systemctl daemon-reload", "systemctl restart", "systemctl reload", "systemctl reset-failed"],
    answer: 0,
    explain: "systemctl daemon-reloadは、ユニットファイルの変更をsystemdに読み込ませて設定を再構築します。ユニットファイル編集後には必須の操作です。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "失敗状態(failed)になっているsystemdユニットの一覧を表示するコマンドはどれか。",
    choices: ["systemctl --failed", "systemctl --all", "systemctl --type", "systemctl --user"],
    answer: 0,
    explain: "systemctl --failedは、起動に失敗して失敗状態になっているユニットのみを絞り込んで表示します。トラブルシューティングの第一歩として使われます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "systemdで設定を再読み込みさせつつ、サービス自体は再起動しない(接続を切らない)コマンドはどれか。",
    choices: ["systemctl reload", "systemctl restart", "systemctl stop", "systemctl kill"],
    answer: 0,
    explain: "systemctl reloadは設定ファイルの再読み込みのみを行い、プロセス自体は再起動しないため、接続中のクライアントに影響を与えにくくなります。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "systemdでサービスに直接シグナルを送るコマンドはどれか。",
    choices: ["systemctl kill", "systemctl stop", "systemctl reload", "systemctl mask"],
    answer: 0,
    explain: "systemctl kill --signal=SIGTERM サービス名のように指定して、対象サービスのプロセスに任意のシグナルを送れます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "journalctlでログの表示をリアルタイムに追跡し続けるオプションはどれか。",
    choices: ["-f", "-b", "-r", "-n"],
    answer: 0,
    explain: "journalctl -fはtail -fのように、新しいログが追加されるたびにリアルタイムで表示し続けます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "journalctlで直近の指定した行数だけを表示するオプションはどれか。",
    choices: ["-n", "-f", "-b", "-k"],
    answer: 0,
    explain: "journalctl -n 50のように指定すると、直近50行分のログだけを表示できます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "aptで、推奨パッケージ(Recommends)を自動的にインストールしないようにするオプションはどれか。",
    choices: ["--no-install-recommends", "--fix-broken", "--purge", "--simulate"],
    answer: 0,
    explain: "--no-install-recommendsを指定すると、必須の依存(Depends)のみをインストールし、推奨(Recommends)扱いのパッケージは導入されません。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "yum/dnfで、確認プロンプトを表示せずに自動的に「yes」と応答するオプションはどれか。",
    choices: ["-y", "-q", "-v", "-x"],
    answer: 0,
    explain: "-yオプションは全ての確認プロンプトに自動的にyesと応答するため、スクリプトからの自動実行でよく使われます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "yum/dnfで、特定のパッケージを更新対象から除外するオプションはどれか。",
    choices: ["--exclude", "--nogpgcheck", "--enablerepo", "--downloadonly"],
    answer: 0,
    explain: "--exclude=パッケージ名で、指定したパッケージを操作の対象から除外できます。設定ファイルのexclude=行でも同様の設定が可能です。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "yum/dnfで、通常は無効になっているリポジトリを一時的に有効化するオプションはどれか。",
    choices: ["--enablerepo", "--disablerepo", "--exclude", "--nogpgcheck"],
    answer: 0,
    explain: "--enablerepo=リポジトリ名で、設定上は無効になっているリポジトリをそのコマンド実行時だけ有効にできます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "yum/dnfのメタデータキャッシュを手動で作り直すサブコマンドはどれか。",
    choices: ["makecache", "clean all", "check-update", "repolist"],
    answer: 0,
    explain: "yum makecache(dnf makecache)は、リポジトリのメタデータをダウンロードしてローカルキャッシュを作成・更新します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "yum/dnfで、現在有効なリポジトリの一覧を確認するサブコマンドはどれか。",
    choices: ["repolist", "makecache", "history", "provides"],
    answer: 0,
    explain: "yum repolist(dnf repolist)は、現在有効になっているリポジトリのIDや名前、パッケージ数を一覧表示します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "tarでアーカイブを作成する際に使う基本的なオプションはどれか。",
    choices: ["-c", "-x", "-t", "-r"],
    answer: 0,
    explain: "tar -c(--create)はアーカイブの新規作成を行います。展開は-x、内容一覧の表示は-tを使います。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "tarでアーカイブを展開する際に使う基本的なオプションはどれか。",
    choices: ["-x", "-c", "-t", "-u"],
    answer: 0,
    explain: "tar -x(--extract)はアーカイブの展開を行います。ファイル名を指定する場合は-fと組み合わせて使います。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "tarでアーカイブの中身の一覧だけを確認するオプションはどれか。",
    choices: ["-t", "-x", "-c", "-d"],
    answer: 0,
    explain: "tar -t(--list)はアーカイブを展開せずに、中に含まれるファイルの一覧を表示します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "tarでgzip形式の圧縮・展開を同時に行うオプションはどれか。",
    choices: ["-z", "-j", "-J", "-a"],
    answer: 0,
    explain: "tar -zはgzip形式での圧縮・展開を行います。bzip2形式は-j、xz形式は-Jを使います。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "tarでbzip2形式の圧縮・展開を行うオプションはどれか。",
    choices: ["-j", "-z", "-J", "-Z"],
    answer: 0,
    explain: "tar -jはbzip2形式での圧縮・展開を行います。gzipより圧縮率が高い代わりに処理時間がかかる傾向があります。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "tarでxz形式の圧縮・展開を行うオプションはどれか。",
    choices: ["-J", "-j", "-z", "-a"],
    answer: 0,
    explain: "tar -J(大文字)はxz形式での圧縮・展開を行います。小文字の-jはbzip2形式なので混同しないよう注意が必要です。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "gzipで圧縮率を最も高く設定するオプションはどれか。",
    choices: ["-9", "-1", "-d", "-c"],
    answer: 0,
    explain: "gzip -9は最高圧縮率(最も時間がかかる)、-1は最速(圧縮率は低い)を指定します。デフォルトは-6相当です。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "圧縮ファイルの中身を、展開せずに直接検索できるコマンドの例はどれか。",
    choices: ["zgrep", "grep", "zcat のみ", "gunzip"],
    answer: 0,
    explain: "zgrepはgzip圧縮されたファイルを一時展開しながら直接検索できるコマンドです。同様にzcatは圧縮ファイルの内容を展開せずに表示します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ディスクを丸ごとイメージ化したり、ブロック単位でデータをコピーしたりするコマンドはどれか。",
    choices: ["dd", "cp", "rsync", "tar"],
    answer: 0,
    explain: "ddは指定したブロックサイズでデータを読み書きし、ディスク全体のイメージ化やバックアップ、パーティションのコピーなどに使われます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ddコマンドで入力元・出力先を指定するオプションの組み合わせはどれか。",
    choices: ["if= と of=", "in= と out=", "-i と -o", "src= と dst="],
    answer: 0,
    explain: "ddではif=(input file)で入力元、of=(output file)で出力先を指定します。bs=でブロックサイズ、count=でブロック数を指定します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ext系ファイルシステムで、fsckが自動実行されるまでの最大マウント回数を設定するtune2fsのオプションはどれか。",
    choices: ["-c", "-L", "-i", "-j"],
    answer: 0,
    explain: "tune2fs -c 回数で、指定した回数マウントされるとfsckが自動実行されるよう設定できます。-iは時間間隔での指定です。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ext2ファイルシステムにジャーナル機能を追加してext3化するtune2fsのオプションはどれか。",
    choices: ["-j", "-c", "-L", "-m"],
    answer: 0,
    explain: "tune2fs -jは既存のext2ファイルシステムにジャーナルを追加し、ext3として扱えるようにします。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルシステム上でroot用に予約される領域の割合を変更するtune2fsのオプションはどれか。",
    choices: ["-m", "-c", "-j", "-L"],
    answer: 0,
    explain: "tune2fs -m 割合(%)で、root専用に予約されるブロックの割合を変更できます。デフォルトは5%で、大容量ディスクでは下げることがあります。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "fsckで、確認プロンプトに自動的に「yes」と答えて修復を進めるオプションはどれか。",
    choices: ["-y", "-n", "-p", "-f"],
    answer: 0,
    explain: "fsck -yは全ての質問に自動的にyesと答えて修復を進めます。-nは全てnoと答える(実際には修復しない)動作です。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "fsckで、クリーンな状態に見えるファイルシステムでも強制的にチェックを実行するオプションはどれか。",
    choices: ["-f", "-y", "-n", "-A"],
    answer: 0,
    explain: "fsck -fは、ファイルシステムが正常(クリーン)とマークされていても強制的にチェックを実行します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "/etc/fstabに記載された全ファイルシステムに対してfsckを実行するオプションはどれか。",
    choices: ["-A", "-f", "-y", "-n"],
    answer: 0,
    explain: "fsck -Aは/etc/fstabに記載された全てのファイルシステムに対して、pass番号の順序に従ってチェックを実行します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システム全体で使用可能なメモリのうち、キャッシュとして使われている量も含めて詳細に表示するfreeのオプションはどれか。",
    choices: ["-h(人間が読みやすい単位)", "-t のみ", "-h、-t、-mなど複数のオプションが用途に応じて使われる", "-c のみ"],
    answer: 2,
    explain: "freeには-h(読みやすい単位)、-m(メガバイト単位)、-t(合計行の追加)など複数のオプションがあり、用途に応じて使い分けます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "topコマンドの実行中に、CPU使用率順ではなくメモリ使用率順に並び替えるキー操作はどれか。",
    choices: ["Shift+M", "Shift+P", "Shift+T", "Shift+N"],
    answer: 0,
    explain: "top実行中にShift+Mを押すとメモリ使用率順、Shift+PでCPU使用率順に並び替えられます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "topの代替として、カラー表示やスクロール操作に対応した対話的なプロセスモニタはどれか。",
    choices: ["htop", "ps", "vmstat", "iostat"],
    answer: 0,
    explain: "htopはtopの改良版で、色付き表示やマウス操作、プロセスツリー表示などに対応した対話的なプロセスモニタです。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "プロセス名を指定してシグナルを送るコマンドを2つ選べ。",
    choices: ["killall", "pkill", "kill", "nice", "renice"],
    answer: [0, 1],
    explain: "killallとpkillはどちらもプロセス名(パターン)を指定してシグナルを送れます。killはプロセスIDでの指定が基本です。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "プロセス名からプロセスIDを検索するコマンドはどれか。",
    choices: ["pgrep", "pkill", "ps", "top"],
    answer: 0,
    explain: "pgrepは指定した名前(パターン)に一致するプロセスのIDを検索して表示します。そのままシグナルを送る場合はpkillを使います。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "利用可能なシグナルの一覧を表示するkillのオプションはどれか。",
    choices: ["-l", "-9", "-s", "-p"],
    answer: 0,
    explain: "kill -lは利用可能なシグナルの名前と番号の一覧を表示します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "設定ファイルを再読み込みさせるためにデーモンへ送ることが多いシグナルはどれか。",
    choices: ["SIGHUP(1)", "SIGKILL(9)", "SIGTERM(15)", "SIGSTOP(19)"],
    answer: 0,
    explain: "SIGHUP(番号1)は本来は端末切断を意味しますが、多くのデーモンでは設定ファイルの再読み込みを行うシグナルとして解釈されます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "ソースコードからのビルドで、インストール先のディレクトリを指定するconfigureの代表的なオプションはどれか。",
    choices: ["--prefix", "--enable", "--disable", "--with"],
    answer: 0,
    explain: "./configure --prefix=/usr/localのように指定して、ビルドしたソフトウェアのインストール先ディレクトリを決められます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "makeでビルドした成果物(オブジェクトファイルなど)を削除する一般的なターゲットはどれか。",
    choices: ["make clean", "make install", "make check", "make dist"],
    answer: 0,
    explain: "make cleanはビルド時に生成された中間ファイルを削除し、クリーンな状態からビルドし直せるようにします。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "makeが参照するビルド手順を記述したファイルの名前として一般的なものはどれか。",
    choices: ["Makefile", "configure", "SPECファイル", "control"],
    answer: 0,
    explain: "makeはMakefile(またはmakefile)に記述されたルールに従って、コンパイルやリンクなどのビルド手順を実行します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "Debianパッケージの中で、パッケージ名や依存関係などのメタ情報を記述するファイルはどれか。",
    choices: ["control", "SPEC", "Makefile", "changelog"],
    answer: 0,
    explain: "Debianパッケージではcontrolファイルにパッケージ名、バージョン、依存関係、説明などのメタ情報を記述します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "RPMパッケージをビルドするコマンドはどれか。",
    choices: ["rpmbuild", "rpm -b", "dpkg-buildpackage", "make rpm"],
    answer: 0,
    explain: "rpmbuildはSPECファイルとソースコードを元にRPMパッケージを作成するコマンドです。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "Debianパッケージ(.deb)をソースからビルドするコマンドはどれか。",
    choices: ["dpkg-buildpackage", "dpkg -b のみ", "rpmbuild", "apt build"],
    answer: 0,
    explain: "dpkg-buildpackageはDebianのソースパッケージから.debパッケージをビルドするための標準的なコマンドです。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "ディレクトリを作成する際に、途中の親ディレクトリも一緒に作成するmkdirのオプションはどれか。",
    choices: ["-p", "-m", "-v", "-r"],
    answer: 0,
    explain: "mkdir -p a/b/cのように指定すると、存在しない中間ディレクトリも自動的に作成されます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "ディレクトリを作成すると同時にパーミッションを指定するmkdirのオプションはどれか。",
    choices: ["-m", "-p", "-v", "-Z"],
    answer: 0,
    explain: "mkdir -m 700 ディレクトリ名のように指定して、作成と同時にパーミッションを設定できます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "空のディレクトリのみを削除するコマンドはどれか。",
    choices: ["rmdir", "rm -r", "rm -f", "unlink"],
    answer: 0,
    explain: "rmdirは中身が空のディレクトリのみを削除します。中身ごと削除したい場合はrm -rを使います。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "ディレクトリを中身ごと再帰的に削除するrmのオプションはどれか。",
    choices: ["-r", "-f", "-i", "-v"],
    answer: 0,
    explain: "rm -r(または-R)はディレクトリとその中身を再帰的に削除します。確認なしで強制的に削除する場合は-fと組み合わせます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "ファイル削除時に1つずつ確認を求めるrmのオプションはどれか。",
    choices: ["-i", "-f", "-r", "-v"],
    answer: 0,
    explain: "rm -iは削除前に1ファイルずつ確認を求めます。誤削除を防ぎたい場合に使われます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "ファイル移動時に、移動先に同名ファイルがある場合に上書き確認を求めるmvのオプションはどれか。",
    choices: ["-i", "-f", "-n", "-v"],
    answer: 0,
    explain: "mv -iは上書きが発生する場合に確認を求めます。-nは上書きせずスキップ、-fは確認なしで上書きします。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "ファイルをコピーする際、コピー先が新しい場合はコピーしないcpのオプションはどれか。",
    choices: ["-u", "-i", "-f", "-n"],
    answer: 0,
    explain: "cp -uは、コピー元がコピー先より新しい場合、またはコピー先が存在しない場合のみコピーを行います。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "lsコマンドで隠しファイル(ドットで始まるファイル)も表示するオプションはどれか。",
    choices: ["-a", "-l", "-h", "-t"],
    answer: 0,
    explain: "ls -aはドットで始まる隠しファイルも含めて全てのファイルを表示します。「.」と「..」を除外したい場合は-Aを使います。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "lsコマンドで更新日時の新しい順に並べ替えるオプションはどれか。",
    choices: ["-t", "-a", "-S", "-r"],
    answer: 0,
    explain: "ls -tは更新日時の新しい順に並べ替えます。-rと組み合わせると古い順になります。ファイルサイズ順は-Sです。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "lsコマンドの出力でファイルの先頭に表示される「d」が意味するものはどれか。",
    choices: ["ディレクトリ", "通常ファイル", "シンボリックリンク", "ブロックデバイス"],
    answer: 0,
    explain: "ls -lの1文字目はファイルタイプを表し、dはディレクトリ、-は通常ファイル、lはシンボリックリンク、bはブロックデバイス、cはキャラクタデバイスを意味します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "lsコマンドの出力でファイルの先頭に表示される「l」が意味するものはどれか。",
    choices: ["シンボリックリンク", "ディレクトリ", "通常ファイル", "ソケット"],
    answer: 0,
    explain: "ls -lの1文字目が「l」の場合、そのファイルはシンボリックリンクであることを示します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "パーミッション「rwxr-xr--」を8進数で表した場合の値はどれか。",
    choices: ["754", "755", "744", "764"],
    answer: 0,
    explain: "rwx=7(4+2+1)、r-x=5(4+1)、r--=4となるため、rwxr-xr--は754になります。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "umaskの値が022の場合、新規作成される通常ファイルのパーミッションはどれか。",
    choices: ["644", "755", "666", "777"],
    answer: 0,
    explain: "通常ファイルのベースは666で、そこからumask 022を引くと644(rw-r--r--)になります。ディレクトリの場合はベースが777なので755になります。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "umaskの値が022の場合、新規作成されるディレクトリのパーミッションはどれか。",
    choices: ["755", "644", "777", "666"],
    answer: 0,
    explain: "ディレクトリのベースパーミッションは777で、umask 022を差し引くと755(rwxr-xr-x)になります。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "SUIDが設定されたファイルのパーミッション表示で、所有者の実行権限の位置に表示される文字はどれか。",
    choices: ["s", "t", "x", "S以外にありえない"],
    answer: 0,
    explain: "SUIDが設定されると所有者の実行権限位置が「s」と表示されます。実行権限がない状態でSUIDのみ設定されている場合は大文字の「S」になります。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "スティッキービットが設定されたディレクトリのパーミッション表示で、その他ユーザーの実行権限の位置に表示される文字はどれか。",
    choices: ["t", "s", "x", "r"],
    answer: 0,
    explain: "スティッキービットが設定されると、その他ユーザーの実行権限位置が「t」と表示されます(/tmpの表示がdrwxrwxrwtとなるのがその例です)。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "chmodで数値モードによりSUIDを設定する場合、先頭に付ける数字はどれか。",
    choices: ["4", "2", "1", "7"],
    answer: 0,
    explain: "chmod 4755のように先頭に4を付けるとSUID、2を付けるとSGID、1を付けるとスティッキービットが設定されます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "chmodで数値モードによりSGIDを設定する場合、先頭に付ける数字はどれか。",
    choices: ["2", "4", "1", "6"],
    answer: 0,
    explain: "chmod 2755のように先頭に2を付けるとSGID(Set Group ID)が設定されます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "chmodで数値モードによりスティッキービットを設定する場合、先頭に付ける数字はどれか。",
    choices: ["1", "2", "4", "3"],
    answer: 0,
    explain: "chmod 1777のように先頭に1を付けるとスティッキービットが設定されます。/tmpディレクトリがこの設定の代表例です。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "systemdでシステムのシャットダウンを予約するコマンドはどれか。",
    choices: ["shutdown +時間", "systemctl poweroff のみ", "halt -p", "init 0"],
    answer: 0,
    explain: "shutdown +10のように分数を指定することでシャットダウンを予約できます。systemctl poweroffは即時実行のため予約はできません。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "実行中のプロセスの環境変数を確認できる仮想ファイルはどれか。",
    choices: ["/proc/[PID]/environ", "/proc/[PID]/cmdline", "/proc/[PID]/status", "/proc/[PID]/maps"],
    answer: 0,
    explain: "/proc/[PID]/environにはそのプロセスが起動された際の環境変数がヌル文字区切りで記録されています。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "実行中のプロセスが使用しているメモリマップを確認できる仮想ファイルはどれか。",
    choices: ["/proc/[PID]/maps", "/proc/[PID]/environ", "/proc/[PID]/cmdline", "/proc/[PID]/cwd"],
    answer: 0,
    explain: "/proc/[PID]/mapsにはプロセスの仮想メモリ空間のマッピング情報(ライブラリの配置など)が記録されています。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "実行中のプロセスの現在の作業ディレクトリを示す仮想的なリンクはどれか。",
    choices: ["/proc/[PID]/cwd", "/proc/[PID]/exe", "/proc/[PID]/root", "/proc/[PID]/fd"],
    answer: 0,
    explain: "/proc/[PID]/cwdはプロセスのカレントワーキングディレクトリへのシンボリックリンクです。/proc/[PID]/exeは実行ファイル自体へのリンクです。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "実行中のプロセスが開いているファイルディスクリプタを確認できるディレクトリはどれか。",
    choices: ["/proc/[PID]/fd", "/proc/[PID]/maps", "/proc/[PID]/status", "/proc/[PID]/stat"],
    answer: 0,
    explain: "/proc/[PID]/fd以下には、そのプロセスが開いている各ファイルディスクリプタへのシンボリックリンクが存在します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムの起動から現在までの経過時間が記録されている仮想ファイルはどれか。",
    choices: ["/proc/uptime", "/proc/loadavg", "/proc/stat", "/proc/version"],
    answer: 0,
    explain: "/proc/uptimeには起動からの経過秒数とアイドル時間の合計が記録されており、uptimeコマンドがこれを参照します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "カーネルのバージョンやコンパイル情報が記録されている仮想ファイルはどれか。",
    choices: ["/proc/version", "/proc/uptime", "/proc/cmdline", "/proc/stat"],
    answer: 0,
    explain: "/proc/versionには実行中のカーネルのバージョン、コンパイラのバージョン、ビルド日時などが記録されています。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "現在のカーネルが起動時に渡されたパラメータを確認できる仮想ファイルはどれか。",
    choices: ["/proc/cmdline", "/proc/version", "/proc/uptime", "/proc/modules"],
    answer: 0,
    explain: "/proc/cmdlineには、GRUBなどから渡された起動時のカーネルパラメータがそのまま記録されています。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "ロードされているカーネルモジュールの一覧が記録されている仮想ファイルはどれか。",
    choices: ["/proc/modules", "/proc/devices", "/proc/filesystems", "/proc/partitions"],
    answer: 0,
    explain: "/proc/modulesには現在ロードされているカーネルモジュールの一覧が記録されており、lsmodコマンドがこれを整形して表示します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "カーネルが認識しているデバイスのメジャー番号一覧が記録されている仮想ファイルはどれか。",
    choices: ["/proc/devices", "/proc/modules", "/proc/partitions", "/proc/interrupts"],
    answer: 0,
    explain: "/proc/devicesにはキャラクタデバイスとブロックデバイスそれぞれのメジャー番号と名前の対応が記録されています。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムのDMAチャネル使用状況が記録されている仮想ファイルはどれか。",
    choices: ["/proc/dma", "/proc/ioports", "/proc/interrupts", "/proc/devices"],
    answer: 0,
    explain: "/proc/dmaには、現在使用されているDMA(ダイレクトメモリアクセス)チャネルの情報が記録されています。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "systemdのユーザー単位のサービスを操作するsystemctlのオプションはどれか。",
    choices: ["--user", "--system", "--global", "--now"],
    answer: 0,
    explain: "systemctl --userは、システム全体ではなく現在のユーザー用に定義されたユニットを操作します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "systemctl enableと同時にサービスを起動もするオプションはどれか。",
    choices: ["--now", "--user", "--force", "--all"],
    answer: 0,
    explain: "systemctl enable --now サービス名とすることで、自動起動の有効化と即時起動を1つのコマンドで行えます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "PCI Expressデバイスの詳細情報(ベンダーID、デバイスIDなど)を表示するlspciのオプションはどれか。",
    choices: ["-v(詳細表示)", "-t のみ", "-n のみ", "-v、-nnなど複数のオプションが用途に応じて使われる"],
    answer: 3,
    explain: "lspciには-v(詳細)、-nn(数値IDと名前の併記)、-t(ツリー表示)など複数のオプションがあり、目的に応じて使い分けます。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "USBデバイスの接続をツリー構造で表示するlsusbのオプションはどれか。",
    choices: ["-t", "-v", "-s", "-d"],
    answer: 0,
    explain: "lsusb -tはUSBハブとデバイスの接続関係をツリー構造で表示します。-vは各デバイスの詳細情報を表示します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "システムのブート回数ごとにログを絞り込むjournalctlの指定方法はどれか。",
    choices: ["-b -1(1つ前の起動時のログ)", "-n -1", "-p -1", "-u -1"],
    answer: 0,
    explain: "journalctl -b -1は1つ前の起動時のログを表示します。-b 0(または-b)は現在の起動時のログです。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "journalctlでログを新しい順(逆順)に表示するオプションはどれか。",
    choices: ["-r", "-f", "-n", "-b"],
    answer: 0,
    explain: "journalctl -rはログを新しいものから順に(逆順で)表示します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "systemdジャーナルの現在のディスク使用量を確認するコマンドはどれか。",
    choices: ["journalctl --disk-usage", "journalctl --vacuum-size", "journalctl --verify", "journalctl --list-boots"],
    answer: 0,
    explain: "journalctl --disk-usageはジャーナルログが占めているディスク容量を表示します。--vacuum-sizeは指定サイズまで古いログを削除します。"
  },
  {
    category: "課題101: システムアーキテクチャ",
    question: "systemdジャーナルに記録されている起動回数の一覧を表示するコマンドはどれか。",
    choices: ["journalctl --list-boots", "journalctl --disk-usage", "journalctl --verify", "journalctl --rotate"],
    answer: 0,
    explain: "journalctl --list-bootsは記録されている各起動セッションのIDと日時を一覧表示し、-bで指定する際の参考になります。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "yum/dnfでGPG署名の検証をスキップするオプションはどれか。",
    choices: ["--nogpgcheck", "--enablerepo", "--exclude", "--downloadonly"],
    answer: 0,
    explain: "--nogpgcheckはパッケージのGPG署名検証をスキップします。セキュリティ上のリスクがあるため、信頼できる場合のみ使用します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "yum/dnfでパッケージのダウンロードのみを行い、インストールはしないオプションはどれか。",
    choices: ["--downloadonly", "--nogpgcheck", "--exclude", "--enablerepo"],
    answer: 0,
    explain: "--downloadonlyを指定すると、パッケージのダウンロードだけを行いインストールは行いません。オフライン環境への配布などに使えます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "yum/dnfのキャッシュを全て削除するサブコマンドはどれか。",
    choices: ["clean all", "makecache", "repolist", "check-update"],
    answer: 0,
    explain: "yum clean all(dnf clean all)は、ダウンロード済みパッケージやメタデータのキャッシュを全て削除します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "aptでインストール済みパッケージの一覧を表示するコマンドはどれか。",
    choices: ["apt list --installed", "apt list --upgradable", "apt search", "apt show"],
    answer: 0,
    explain: "apt list --installedは現在インストールされているパッケージの一覧を表示します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "aptでパッケージを設定ファイルごと完全に削除するサブコマンドはどれか。",
    choices: ["apt purge", "apt remove", "apt autoremove", "apt clean"],
    answer: 0,
    explain: "apt purgeはパッケージ本体に加えて設定ファイルも削除します。apt removeは設定ファイルを残します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "dpkgでインストール済みパッケージの状態(バージョン、依存関係など)を詳細表示するオプションはどれか。",
    choices: ["dpkg -s", "dpkg -l", "dpkg -L", "dpkg -c"],
    answer: 0,
    explain: "dpkg -s パッケージ名は、そのパッケージの状態やバージョン、依存関係、説明などを詳細に表示します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "dpkgでインストール済みパッケージに含まれるファイルの一覧を表示するオプションはどれか。",
    choices: ["dpkg -L", "dpkg -c", "dpkg -l", "dpkg -s"],
    answer: 0,
    explain: "dpkg -L パッケージ名はインストール済みパッケージに含まれるファイルの一覧を表示します。小文字の-lは一覧表示、-cは.debファイルの中身確認です。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "rpmでパッケージに含まれる設定ファイルのみを一覧表示するオプションはどれか。",
    choices: ["rpm -qc", "rpm -qd", "rpm -ql", "rpm -qi"],
    answer: 0,
    explain: "rpm -qcはパッケージに含まれる設定ファイルのみを一覧表示します。ドキュメントファイルのみを表示する場合は-qdを使います。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "rpmでパッケージに含まれるドキュメントファイルのみを一覧表示するオプションはどれか。",
    choices: ["rpm -qd", "rpm -qc", "rpm -ql", "rpm -qR"],
    answer: 0,
    explain: "rpm -qdはパッケージに含まれるドキュメント(マニュアルやREADMEなど)のみを一覧表示します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "共有ライブラリのファイル名で使われる拡張子として一般的なものはどれか。",
    choices: [".so", ".a", ".o", ".ko"],
    answer: 0,
    explain: ".so(shared object)は共有ライブラリの拡張子です。.aは静的ライブラリ、.oはオブジェクトファイル、.koはカーネルモジュールの拡張子です。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "静的ライブラリのファイル名で使われる拡張子はどれか。",
    choices: [".a", ".so", ".ko", ".rpm"],
    answer: 0,
    explain: ".a(archive)は静的ライブラリの拡張子で、コンパイル時に実行ファイルへ直接組み込まれます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "カーネルモジュールのファイル名で使われる拡張子はどれか。",
    choices: [".ko", ".so", ".a", ".o"],
    answer: 0,
    explain: ".ko(kernel object)はLinuxカーネルモジュールの拡張子です。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "共有ライブラリの検索パスを一時的に追加する環境変数はどれか。",
    choices: ["LD_LIBRARY_PATH", "PATH", "LD_PRELOAD", "MANPATH"],
    answer: 0,
    explain: "LD_LIBRARY_PATHに指定したディレクトリは、実行時の共有ライブラリ検索パスとして一時的に追加されます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "ldconfigが生成する共有ライブラリのキャッシュファイルはどれか。",
    choices: ["/etc/ld.so.cache", "/etc/ld.so.conf", "/etc/ldconfig.conf", "/var/cache/ld.cache"],
    answer: 0,
    explain: "ldconfigは/etc/ld.so.confなどの設定を元に、/etc/ld.so.cacheという検索用キャッシュファイルを生成します。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "ldconfigでキャッシュに登録されている共有ライブラリの一覧を表示するオプションはどれか。",
    choices: ["-p", "-v", "-n", "-N"],
    answer: 0,
    explain: "ldconfig -pは現在キャッシュに登録されている共有ライブラリとそのパスの一覧を表示します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "カレントディレクトリのパスを表示するコマンドはどれか。",
    choices: ["pwd", "cd", "ls", "dirname"],
    answer: 0,
    explain: "pwd(print working directory)は現在の作業ディレクトリの絶対パスを表示します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "cdコマンドで直前にいたディレクトリに戻る記法はどれか。",
    choices: ["cd -", "cd ..", "cd ~", "cd ."],
    answer: 0,
    explain: "cd -は直前にいたディレクトリに戻ります。cd ..は親ディレクトリ、cd ~はホームディレクトリへの移動です。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "ディレクトリをスタックに積んで移動するコマンドはどれか。",
    choices: ["pushd", "popd", "dirs", "pushd、popd、dirsが組み合わせて使われる"],
    answer: 3,
    explain: "pushdでディレクトリをスタックに積みながら移動し、popdで戻り、dirsでスタックの中身を確認します。3つセットで使われる機能です。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "空のファイルを作成する、またはタイムスタンプを更新するコマンドはどれか。",
    choices: ["touch", "cat", "echo", "mkdir"],
    answer: 0,
    explain: "touchは存在しないファイルを空ファイルとして作成し、既存ファイルに対してはタイムスタンプを現在時刻に更新します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "文字列を標準出力に表示するコマンドで、エスケープシーケンスを解釈させるオプションはどれか。",
    choices: ["echo -e", "echo -n", "echo -E", "echo -s"],
    answer: 0,
    explain: "echo -eは\\nや\\tなどのエスケープシーケンスを解釈します。-nは末尾の改行を出力しないオプションです。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "echoコマンドで末尾の改行を出力しないオプションはどれか。",
    choices: ["-n", "-e", "-E", "-r"],
    answer: 0,
    explain: "echo -nは出力の末尾に改行を付けません。プロンプトの表示などで使われます。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "標準出力をファイルに追記するリダイレクト記号はどれか。",
    choices: [">>", ">", "<", "<<"],
    answer: 0,
    explain: ">>は既存ファイルの末尾に追記します。>は既存の内容を上書きするため、混同しないよう注意が必要です。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "標準出力と標準エラー出力を同じファイルにまとめてリダイレクトする記法はどれか。",
    choices: ["> file 2>&1", "2> file 1>&2", "> file <&2", "2>> file"],
    answer: 0,
    explain: "「> file 2>&1」は標準出力をファイルに向けた後、標準エラー出力を標準出力と同じ先に向けます。bashでは「&> file」も同様の意味です。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "teeコマンドでファイルに追記する(上書きしない)オプションはどれか。",
    choices: ["-a", "-i", "-p", "-n"],
    answer: 0,
    explain: "tee -aは指定したファイルに追記します。オプションなしの場合はファイルを上書きします。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "manコマンドでマニュアルのセクション番号を指定して表示する記法はどれか。",
    choices: ["man 5 passwd", "man -s passwd", "man --section passwd", "man passwd -5"],
    answer: 0,
    explain: "man 5 passwdのようにセクション番号を先に指定します。セクション1はコマンド、5は設定ファイル、8は管理者用コマンドを表します。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "manページのセクション番号のうち、設定ファイルの形式について記載されているものはどれか。",
    choices: ["5", "1", "8", "3"],
    answer: 0,
    explain: "セクション5は設定ファイルの形式について記載されています。セクション1は一般ユーザー向けコマンド、8はシステム管理コマンド、3はライブラリ関数です。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "manページのセクション番号のうち、システム管理者向けのコマンドが記載されているものはどれか。",
    choices: ["8", "1", "5", "2"],
    answer: 0,
    explain: "セクション8にはrootが使うシステム管理コマンド(mount、fsckなど)のマニュアルが収録されています。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "manページのファイルが格納される場所を指定する環境変数はどれか。",
    choices: ["MANPATH", "PATH", "LD_LIBRARY_PATH", "INFOPATH"],
    answer: 0,
    explain: "MANPATHはmanコマンドがマニュアルページを検索するディレクトリを指定する環境変数です。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "コマンド名から1行の短い説明のみを表示するコマンドはどれか。",
    choices: ["whatis", "apropos", "which", "type"],
    answer: 0,
    explain: "whatisは指定したコマンドについて、マニュアルの見出しに相当する1行の説明を表示します(man -fと同等)。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "whatisやaproposが参照するデータベースを更新するコマンドはどれか。",
    choices: ["mandb(またはmakewhatis)", "updatedb", "ldconfig", "depmod"],
    answer: 0,
    explain: "mandb(古い環境ではmakewhatis)はmanページの索引データベースを更新し、whatisやaproposの検索結果に反映させます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "FHSにおいて、ユーザーが共有する読み取り専用のプログラムやライブラリを格納するディレクトリはどれか。",
    choices: ["/usr", "/var", "/tmp", "/proc"],
    answer: 0,
    explain: "/usrにはユーザーが共有する読み取り専用の静的なデータ(プログラム、ライブラリ、ドキュメントなど)が格納されます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "FHSにおいて、一般ユーザーが使用する基本的なコマンドを格納するディレクトリはどれか。",
    choices: ["/bin", "/sbin", "/opt", "/srv"],
    answer: 0,
    explain: "/binには一般ユーザーも使用する基本的なコマンド(ls、cp、mvなど)が格納されます。近年は/usr/binへのシンボリックリンクになっている環境も多くあります。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "FHSにおいて、共有ライブラリやカーネルモジュールを格納するディレクトリはどれか。",
    choices: ["/lib", "/bin", "/etc", "/var"],
    answer: 0,
    explain: "/libには起動やルートファイルシステム上のコマンドが必要とする共有ライブラリ、および/lib/modules以下にカーネルモジュールが格納されます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "FHSにおいて、システムのプロセス情報を提供する仮想ファイルシステムのマウントポイントはどれか。",
    choices: ["/proc", "/sys", "/dev", "/run"],
    answer: 0,
    explain: "/procはprocfsがマウントされる場所で、プロセス情報やカーネルの状態を仮想的なファイルとして提供します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "FHSにおいて、起動後に生成される実行時データ(PIDファイルやソケットなど)を格納するディレクトリはどれか。",
    choices: ["/run", "/proc", "/opt", "/srv"],
    answer: 0,
    explain: "/runは起動時から現在までの実行時データ(PIDファイル、ソケットなど)を格納する場所で、tmpfsとしてメモリ上に置かれることが一般的です。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "FHSにおいて、システム管理者が一時的にファイルシステムをマウントする場所として想定されているディレクトリはどれか。",
    choices: ["/mnt", "/media", "/tmp", "/run"],
    answer: 0,
    explain: "/mntは管理者が一時的にファイルシステムをマウントするための場所として想定されています。リムーバブルメディアの自動マウント先は/mediaです。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "FHSにおいて、システムのバイナリのうちroot専用の管理コマンドを格納するディレクトリを2つ選べ。",
    choices: ["/sbin", "/usr/sbin", "/bin", "/usr/bin", "/opt"],
    answer: [0, 1],
    explain: "/sbinと/usr/sbinにはroot権限で実行するシステム管理用のコマンドが格納されます。/binと/usr/binは一般ユーザー向けのコマンドです。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "findコマンドでファイルの種類を指定して検索する際、通常ファイルを表す指定はどれか。",
    choices: ["-type f", "-type d", "-type l", "-type b"],
    answer: 0,
    explain: "-type fは通常ファイル、-type dはディレクトリ、-type lはシンボリックリンク、-type bはブロックデバイスを表します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "findコマンドでディレクトリのみを検索する際の指定はどれか。",
    choices: ["-type d", "-type f", "-type c", "-type s"],
    answer: 0,
    explain: "find . -type dはディレクトリのみを検索対象とします。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "findコマンドで指定したサイズより大きいファイルを検索する記法はどれか。",
    choices: ["-size +100M", "-size 100M", "-size -100M", "-size =100M"],
    answer: 0,
    explain: "+を付けると「より大きい」、-を付けると「より小さい」、何も付けないと「ちょうど」を意味します。単位はk、M、Gなどが使えます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "findコマンドで大文字小文字を区別せずにファイル名を検索するオプションはどれか。",
    choices: ["-iname", "-name", "-path", "-regex"],
    answer: 0,
    explain: "-inameは大文字・小文字を区別せずにファイル名のパターンマッチングを行います。-nameは区別します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "findコマンドで所有者を指定して検索するオプションはどれか。",
    choices: ["-user", "-group", "-perm", "-type"],
    answer: 0,
    explain: "find . -user ユーザー名で指定した所有者のファイルを検索します。グループで検索する場合は-groupを使います。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "findコマンドで、所有者が存在しない(削除されたユーザーの)ファイルを検索するオプションはどれか。",
    choices: ["-nouser", "-user", "-nogroup のみ", "-empty"],
    answer: 0,
    explain: "-nouserは所有者のUIDに対応するユーザーが存在しないファイルを検索します。同様に-nogroupはグループが存在しないファイルを検索します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "findコマンドで空のファイルやディレクトリを検索するオプションはどれか。",
    choices: ["-empty", "-size 0", "-nouser", "-type f"],
    answer: 0,
    explain: "-emptyは中身が空のファイルやディレクトリを検索します。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "パーティションのUUIDを使って/etc/fstabに記述する利点として適切なものはどれか。",
    choices: [
      "デバイス名の変動(sda/sdbの入れ替わり)に影響されず、確実に同じパーティションを指定できる",
      "マウント速度が必ず高速になる",
      "ファイルシステムの容量が増える",
      "パーミッションの設定が不要になる"
    ],
    answer: 0,
    explain: "UUIDはパーティションごとに固有の値で、接続順やデバイス名の変動に影響されないため、確実に目的のパーティションを指定できます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "/etc/fstabのマウントオプションのうち、起動時に自動マウントしない指定はどれか。",
    choices: ["noauto", "defaults", "auto", "user"],
    answer: 0,
    explain: "noautoを指定すると、mount -aや起動時の自動マウントの対象外になります。手動でmountすることは可能です。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "/etc/fstabのマウントオプションのうち、一般ユーザーにもマウントを許可する指定はどれか。",
    choices: ["user", "noauto", "ro", "defaults"],
    answer: 0,
    explain: "userオプションを指定すると、root以外の一般ユーザーでもそのファイルシステムをマウントできるようになります。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "/etc/fstabのマウントオプション「defaults」に含まれる設定として正しいものはどれか。",
    choices: ["rw, suid, dev, exec, auto, nouser, async", "ro, nosuid, nodev, noexec", "noauto, user, ro", "sync, noexec, nosuid"],
    answer: 0,
    explain: "defaultsはrw(読み書き可)、suid、dev、exec、auto、nouser、asyncという一般的な設定をまとめて指定するショートカットです。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ディスクの書き込みを即座に反映させる(バッファリングしない)マウントオプションはどれか。",
    choices: ["sync", "async", "noatime", "relatime"],
    answer: 0,
    explain: "syncは書き込みを即座にディスクへ反映させます。デフォルトのasyncはバッファリングを行うため性能は高いですが、不正終了時のリスクがあります。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ファイルへのアクセス時刻(atime)の更新を行わず、性能を向上させるマウントオプションはどれか。",
    choices: ["noatime", "sync", "ro", "nodev"],
    answer: 0,
    explain: "noatimeはファイル読み取り時のアクセス時刻更新を省略し、書き込み回数を減らして性能を向上させます。relatimeは条件付きで更新する中間的な設定です。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "マウントオプションのうち、デバイスファイルとしての解釈を無効化するものはどれか。",
    choices: ["nodev", "noexec", "nosuid", "noatime"],
    answer: 0,
    explain: "nodevはそのファイルシステム上にあるデバイスファイルを、デバイスとして解釈しないようにします。セキュリティ強化のためnoexecやnosuidと併用されます。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ext4ファイルシステムで採用されている、連続したブロックをまとめて管理する仕組みを何と呼ぶか。",
    choices: ["エクステント", "inode", "ジャーナル", "スーパーブロック"],
    answer: 0,
    explain: "エクステントは連続したブロック群をまとめて1つの単位として管理する仕組みで、ext4で導入され、大きなファイルの扱いが効率化されました。"
  },
  {
    category: "課題104: デバイス、Linuxファイルシステム、FHS",
    question: "ディスクの物理的な健康状態(温度、エラー数など)を確認できる仕組みはどれか。",
    choices: ["S.M.A.R.T.(smartctlで確認)", "LVM", "RAID", "クォータ"],
    answer: 0,
    explain: "S.M.A.R.T.はディスク自身が持つ自己診断機能で、smartctlコマンドを使って温度やエラー数、寿命の指標などを確認できます。"
  },
  {
    category: "課題102: Linuxのインストールとパッケージ管理",
    question: "パッケージ管理システムを使うことの利点として適切なものを2つ選べ。",
    choices: [
      "依存関係を自動的に解決してくれる",
      "インストール済みファイルを一元管理でき、アンインストールが容易になる",
      "必ず動作速度が向上する",
      "ディスク容量が無制限になる",
      "カーネルの再コンパイルが不要になる"
    ],
    answer: [0, 1],
    explain: "パッケージ管理システムは依存関係の自動解決と、インストール済みファイルの一元管理(結果として容易なアンインストール)という大きな利点をもたらします。動作速度やディスク容量とは直接関係しません。"
  },
  {
    category: "課題103: GNUとUNIXコマンド",
    question: "シェルの環境変数とシェル変数の違いとして正しいものはどれか。",
    choices: [
      "環境変数は子プロセスに引き継がれるが、シェル変数は引き継がれない",
      "シェル変数は子プロセスに引き継がれるが、環境変数は引き継がれない",
      "どちらも全てのプロセスから参照できる",
      "どちらも子プロセスには一切引き継がれない"
    ],
    answer: 0,
    explain: "exportで環境変数にした変数は子プロセスに引き継がれますが、単に代入しただけのシェル変数は現在のシェル内でのみ有効で子プロセスには引き継がれません。"
  }
];
/* 出典タグ: 出題カードの背景色分けに使う(lpic101-quiz2.html由来 = 薄いオレンジ) */
APPLIED_QUESTIONS.forEach(q => { q.origin = "orig"; });

/* ---- 追加分: LPIC101_オリジナル問題集_718問.txt より(第1部494問+第2部224問) ---- */
const ORIGINAL_QUESTIONS = [
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・PCIデバイスの情報を一覧表示する", "choices": ["lsusb", "blkid", "lspci", "lsmod"], "answer": 2, "explain": "PCIバス上のデバイス確認には lspci を使う。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・USBデバイスの情報を一覧表示する", "choices": ["lspci", "lsblk", "lsusb", "uname"], "answer": 2, "explain": "USB機器の列挙には lsusb を使う。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・現在ロード済みのカーネルモジュールを表示する", "choices": ["modinfo", "depmod", "lsmod", "modprobe"], "answer": 2, "explain": "lsmod はロード済みモジュールの一覧を表示する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・モジュール e1000e の詳細情報を確認する", "choices": ["lsmod e1000e", "modinfo e1000e", "modprobe e1000e", "depmod e1000e"], "answer": 1, "explain": "modinfo はモジュールの説明や依存関係を表示する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・ロード済みモジュール e1000e を依存関係を考慮して外す", "choices": ["lsmod -r e1000e", "rmmod -a e1000e", "modprobe -r e1000e", "modinfo -r e1000e"], "answer": 2, "explain": "modprobe -r はモジュールの取り外しに使える。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・現在の起動に限ったジャーナルを確認する", "choices": ["systemctl -b", "dmesg -w", "journalctl -b", "journalctl -f"], "answer": 2, "explain": "journalctl の -b は起動単位で絞り込む。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・カーネルリングバッファのメッセージを確認する", "choices": ["uptime", "dmesg", "syslog", "logger"], "answer": 1, "explain": "dmesg はカーネルの出力確認に適する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・systemd環境で再起動を要求する", "choices": ["systemctl reboot", "systemctl isolate", "systemctl enable", "systemctl reload"], "answer": 0, "explain": "reboot サブコマンドは再起動を要求する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・systemd環境で電源断を要求する", "choices": ["systemctl mask", "systemctl daemon-reload", "systemctl poweroff", "systemctl reset-failed"], "answer": 2, "explain": "poweroff は電源断を実行する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・救援用ターゲットへ切り替える", "choices": ["systemctl stop rescue.target", "systemctl enable rescue.target", "systemctl isolate rescue.target", "systemctl reload rescue.target"], "answer": 2, "explain": "isolate は指定ターゲットへ切り替える。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・カーネルが公開するデバイスやドライバ情報を参照する仮想ファイルシステム", "choices": ["/sys", "/srv", "/opt", "/tmp"], "answer": 0, "explain": "sysfs は通常 /sys にマウントされる。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・デバイス検出に応じて /dev のデバイスノードを管理する仕組み", "choices": ["atd", "udev", "cron", "syslog"], "answer": 1, "explain": "udev は動的デバイス管理を担う。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・実ルートをマウントする前に必要なドライバ等を提供する初期RAMファイルシステム", "choices": ["MBR", "initramfs", "swap", "ESP"], "answer": 1, "explain": "initramfs は起動初期に利用される。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・EFI System Partition 上のブートローダーを利用できるファームウェア方式", "choices": ["XFS", "ext4", "UEFI", "SysVinit"], "answer": 2, "explain": "UEFIではESPを用いる構成が一般的である。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・Linuxカーネルを選択・起動する代表的なブートローダー", "choices": ["udev", "cron", "GRUB", "systemd"], "answer": 2, "explain": "GRUBはカーネル引数を渡して起動できる。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・ディスクのパーティションテーブルを一覧表示する", "choices": ["du -l", "fdisk -l", "df -l", "free -l"], "answer": 1, "explain": "fdisk -l はパーティション情報の表示に使う。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・ブロックデバイスのツリー表示を行う", "choices": ["lsblk", "lsusb", "lspci", "lsmod"], "answer": 0, "explain": "lsblk はディスク・パーティション・LVM等を見やすく表示する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・ブロックデバイスのUUIDやファイルシステム種別を調べる", "choices": ["stat", "file", "blkid", "id"], "answer": 2, "explain": "blkid はUUID指定のfstab作成時にも有用である。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・未使用パーティション /dev/sdb1 にext4ファイルシステムを作成する", "choices": ["mount /dev/sdb1", "mkfs.ext4 /dev/sdb1", "fsck.ext4 /dev/sdb1", "fdisk /dev/sdb1"], "answer": 1, "explain": "mkfs.ext4 はext4ファイルシステムを新規作成する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・アンマウント済みext4ファイルシステムを検査・修復する", "choices": ["mount -o repair /dev/sdb1", "xfs_growfs /dev/sdb1", "resize2fs /dev/sdb1", "fsck.ext4 /dev/sdb1"], "answer": 3, "explain": "ext系の検査にはfsck.ext4を使用できる。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・アンマウント済みXFSファイルシステムを修復する", "choices": ["fsck.ext4 /dev/sdb1", "xfs_repair /dev/sdb1", "xfs_growfs /dev/sdb1", "tune2fs /dev/sdb1"], "answer": 1, "explain": "XFSの修復にはxfs_repairを使う。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・マウント済みXFSを拡張する", "choices": ["xfs_growfs /data", "resize2fs /data", "xfs_repair /data", "fsck.xfs /data"], "answer": 0, "explain": "XFSは縮小できないが、マウント中に拡張できる。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・拡張済みのext系ファイルシステムをサイズ変更する", "choices": ["resize2fs /dev/sdb1", "fdisk /dev/sdb1", "fsck /dev/sdb1", "xfs_growfs /dev/sdb1"], "answer": 0, "explain": "resize2fs はext2/3/4向けである。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・fstabに記述された未マウント項目をまとめてマウントする", "choices": ["swapon -a", "mount -a", "fsck -a", "umount -a"], "answer": 1, "explain": "mount -a はfstabの検証にも利用される。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・デバイス名の変更に影響されにくいfstabでのデバイス指定方法", "choices": ["inode", "PID", "UUID", "UID"], "answer": 2, "explain": "UUIDはファイルシステムを一意に識別する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・インストール済みRPMパッケージを一覧表示する", "choices": ["rpm -qa", "rpm -e", "rpm -V", "rpm -qf"], "answer": 0, "explain": "rpm -qa は全インストール済みパッケージを照会する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・指定ファイルを所有するRPMパッケージを調べる", "choices": ["rpm -qf /usr/bin/ssh", "rpm -U /usr/bin/ssh", "rpm -e /usr/bin/ssh", "rpm -ql /usr/bin/ssh"], "answer": 0, "explain": "rpm -qf はファイルからパッケージを逆引きする。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・RPMパッケージに含まれるファイルを一覧表示する", "choices": ["rpm -qf openssh-clients", "rpm -Va openssh-clients", "rpm -ql openssh-clients", "rpm -e openssh-clients"], "answer": 2, "explain": "rpm -ql はインストール済みパッケージのファイル一覧を表示する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・RPMパッケージ nano を削除する", "choices": ["rpm -q nano", "rpm -e nano", "rpm -V nano", "rpm -i nano"], "answer": 1, "explain": "rpm -e はアンインストールに使う。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・RPMファイルをインストールまたは更新する", "choices": ["rpm -e pkg.rpm", "rpm -Uvh pkg.rpm", "rpm -V pkg.rpm", "rpm -q pkg.rpm"], "answer": 1, "explain": "-Uはupgrade/install、-vと-hは進捗表示に使われる。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・DNFでhttpdパッケージをインストールする", "choices": ["dnf erase httpd", "dnf clean httpd", "dnf install httpd", "dnf info httpd"], "answer": 2, "explain": "dnf install はリポジトリからパッケージを導入する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・DNFでhttpdパッケージを削除する", "choices": ["dnf check-update httpd", "dnf install httpd", "dnf list httpd", "dnf remove httpd"], "answer": 3, "explain": "removeはインストール済みパッケージを削除する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・DNFのパッケージグループを導入する", "choices": ["dnf install group", "dnf group install \"Development Tools\"", "dnf group info install", "dnf group remove all"], "answer": 1, "explain": "group installでグループ単位の導入ができる。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・APTのパッケージ一覧情報を更新する", "choices": ["apt upgrade", "apt update", "apt remove", "apt show"], "answer": 1, "explain": "apt updateだけでは通常パッケージ本体は更新しない。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・APTで更新可能なインストール済みパッケージを更新する", "choices": ["apt search", "apt update", "apt purge", "apt upgrade"], "answer": 3, "explain": "update後にupgradeを実行してパッケージを更新する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・APTでtreeパッケージをインストールする", "choices": ["apt list tree", "apt install tree", "apt remove tree", "apt update tree"], "answer": 1, "explain": "installはパッケージの導入を行う。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・APTでtreeパッケージを削除する", "choices": ["apt update tree", "apt policy tree", "apt remove tree", "apt install tree"], "answer": 2, "explain": "removeは設定ファイルを残す場合がある。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・指定ファイルを所有するDebianパッケージを調べる", "choices": ["dpkg -r /bin/ls", "dpkg -i /bin/ls", "dpkg -L /bin/ls", "dpkg -S /bin/ls"], "answer": 3, "explain": "dpkg -S はファイルから所有パッケージを照会する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・Debianパッケージcoreutilsに含まれるファイルを一覧表示する", "choices": ["dpkg -r coreutils", "dpkg -i coreutils", "dpkg -L coreutils", "dpkg -S coreutils"], "answer": 2, "explain": "dpkg -L はパッケージからファイルを調べる。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・ローカルのDebianパッケージファイルをインストールする", "choices": ["dpkg -L pkg.deb", "dpkg -S pkg.deb", "dpkg -r pkg.deb", "dpkg -i pkg.deb"], "answer": 3, "explain": "dpkg -i はdebファイルを導入する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・/var/log配下の通常ファイルで7日未満前に更新されたものを探す", "choices": ["find /var/log -type f -mtime -7", "locate -mtime -7", "grep -r -7 /var/log", "find /var/log -type d -mtime 7"], "answer": 0, "explain": "findの-typeと-mtimeで条件指定する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・カレントディレクトリ以下のシンボリックリンクを検索する", "choices": ["find . -type l", "find . -type f", "find . -type b", "find . -type d"], "answer": 0, "explain": "findの-type lはシンボリックリンクを表す。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・大文字・小文字を区別せずerrorを含む行を抽出する", "choices": ["grep -n error app.log", "grep -c error app.log", "grep -v error app.log", "grep -i error app.log"], "answer": 3, "explain": "-iは大文字・小文字を区別しない。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・コメント行を除外して表示する", "choices": ["grep -v '^#' config", "grep -i '^#' config", "grep -c '^#' config", "grep '^#' config"], "answer": 0, "explain": "-vは一致しない行を出力する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・passwdからユーザー名とログインシェルを取り出す", "choices": ["cut -d: -f2-6 /etc/passwd", "cut -d: -f1,7 /etc/passwd", "cut -d: -f3 /etc/passwd", "cut -f1 /etc/passwd"], "answer": 1, "explain": "区切り文字指定に-d、フィールド指定に-fを使う。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・数値として行をソートする", "choices": ["sort -n numbers.txt", "sort -k numbers.txt", "sort -r numbers.txt", "sort -u numbers.txt"], "answer": 0, "explain": "-nは数値順での比較を指定する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・重複行を取り除いてソートする", "choices": ["sort -u names.txt", "sort -r names.txt", "sort -n names.txt", "sort -k names.txt"], "answer": 0, "explain": "-uは同一行を一つにまとめる。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・連続する重複行を数えて表示する", "choices": ["sort -c names.txt", "uniq -u names.txt", "uniq -d names.txt", "uniq -c names.txt"], "answer": 3, "explain": "uniq -cは出現回数を先頭に表示する。通常は事前にsortする。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・ファイルの行数を数える", "choices": ["wc -m access.log", "wc -c access.log", "wc -w access.log", "wc -l access.log"], "answer": 3, "explain": "-lは行数を出力する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・先頭20行を表示する", "choices": ["head -n 20 file", "head -c 20 file", "less -n 20 file", "tail -n 20 file"], "answer": 0, "explain": "headの-nで表示行数を指定する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・追記されるログを継続監視する", "choices": ["tail -f /var/log/messages", "tail -n /var/log/messages", "less -f /var/log/messages", "head -f /var/log/messages"], "answer": 0, "explain": "-fはファイル末尾への追記を追いかける。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・gzip圧縮tarアーカイブを展開する", "choices": ["tar -tf backup.tar.gz", "tar -czf backup.tar.gz", "tar -xzf backup.tar.gz", "gzip -r backup.tar.gz"], "answer": 2, "explain": "-xは展開、-zはgzip、-fはファイル指定である。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・dataをgzip圧縮tarアーカイブに作成する", "choices": ["tar -czf backup.tar.gz data", "tar -xzf backup.tar.gz", "tar -tzf backup.tar.gz", "cpio -czf backup.tar.gz"], "answer": 0, "explain": "-cは作成、-zはgzip圧縮を指定する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・各行のfooをすべてbarへ置換して出力する", "choices": ["sed '/foo/d' file", "sed 's/foo/bar/1' file", "sed -n 'foo' file", "sed 's/foo/bar/g' file"], "answer": 3, "explain": "sコマンドは置換、gは行内の全一致を対象とする。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・コロン区切りの第1フィールドを表示する", "choices": ["awk -F: '{print $1}' /etc/passwd", "cut -f1 /etc/passwd", "awk '{print $1}' /etc/passwd", "grep '$1' /etc/passwd"], "answer": 0, "explain": "-Fでフィールド区切りを指定できる。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・所有者rw、グループr、その他---に設定する", "choices": ["chmod 600 report", "chmod 660 report", "chmod 644 report", "chmod 640 report"], "answer": 3, "explain": "640はu=rw,g=r,o=---を表す。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・sharedで新規作成される項目にグループを継承させる", "choices": ["chmod o+s shared", "chmod +t shared", "chmod u+s shared", "chmod g+s shared"], "answer": 3, "explain": "ディレクトリのsetgidはグループ継承に用いる。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・共有ディレクトリで他人のファイル削除を制限する", "choices": ["chmod +t /sharedtmp", "chmod u+s /sharedtmp", "chmod 777 /sharedtmp", "chmod g+s /sharedtmp"], "answer": 0, "explain": "sticky bitは/tmpのような共有領域で使われる。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・sourceへのハードリンクを作成する", "choices": ["ln source hardlink", "link -s source hardlink", "ln -s source hardlink", "cp source hardlink"], "answer": 0, "explain": "lnの通常形式はハードリンクを作成する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・別の場所にあるファイルへのシンボリックリンクを作成する", "choices": ["ln /opt/app/bin/tool ~/bin/tool", "cp -s /opt/app/bin/tool ~/bin/tool", "ln -s /opt/app/bin/tool ~/bin/tool", "link /opt/app/bin/tool ~/bin/tool"], "answer": 2, "explain": "-sを付けるとシンボリックリンクを作成する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・マウント済みファイルシステムの使用量を人間が読みやすい単位で表示する", "choices": ["du -h", "df -h", "free -h", "lsblk -h"], "answer": 1, "explain": "dfはファイルシステム単位の空き容量確認に使う。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・/var/log全体の使用量を要約表示する", "choices": ["ls -lh /var/log", "df -h /var/log", "du -sh /var/log", "free -h /var/log"], "answer": 2, "explain": "duはディレクトリ内容の使用量を集計する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・デバイスを読み取り専用でマウントする", "choices": ["umount -o ro /mnt", "mount -o ro /dev/sdb1 /mnt", "fsck -o ro /dev/sdb1", "mount -o rw /dev/sdb1 /mnt"], "answer": 1, "explain": "roはread-onlyマウントオプションである。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・/mntにマウントされたファイルシステムを解除する", "choices": ["mount /mnt", "umount /mnt", "swapoff /mnt", "fsck /mnt"], "answer": 1, "explain": "umountはマウントポイントまたはデバイスを指定できる。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・swapパーティションを有効化する", "choices": ["mount /dev/sdb2", "mkswapoff /dev/sdb2", "swapon /dev/sdb2", "swapoff /dev/sdb2"], "answer": 2, "explain": "swaponはスワップ領域を有効化する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・パーティションをswap領域として初期化する", "choices": ["fsck.swap /dev/sdb2", "mkswap /dev/sdb2", "mkfs.swap /dev/sdb2", "swapon -f /dev/sdb2"], "answer": 1, "explain": "mkswapでスワップ用の署名を作成する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・永続的なマウント設定を記述するファイル", "choices": ["/etc/fstab", "/etc/mtab", "/etc/passwd", "/proc/mounts"], "answer": 0, "explain": "fstabは起動時などのマウント設定に使う。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・カーネルが認識する現在のマウント情報を参照する", "choices": ["/etc/fstab", "/etc/mtab", "/proc/cpuinfo", "/proc/mounts"], "answer": 3, "explain": "procfs内のmountsには現在のマウント情報がある。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・PCIデバイスの情報を一覧表示する", "choices": ["lsusb", "blkid", "lspci", "lsmod"], "answer": 2, "explain": "PCIバス上のデバイス確認には lspci を使う。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・USBデバイスの情報を一覧表示する", "choices": ["lspci", "uname", "lsusb", "lsblk"], "answer": 2, "explain": "USB機器の列挙には lsusb を使う。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・現在ロード済みのカーネルモジュールを表示する", "choices": ["lsmod", "depmod", "modinfo", "modprobe"], "answer": 0, "explain": "lsmod はロード済みモジュールの一覧を表示する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・モジュール e1000e の詳細情報を確認する", "choices": ["modprobe e1000e", "depmod e1000e", "lsmod e1000e", "modinfo e1000e"], "answer": 3, "explain": "modinfo はモジュールの説明や依存関係を表示する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・ロード済みモジュール e1000e を依存関係を考慮して外す", "choices": ["modinfo -r e1000e", "rmmod -a e1000e", "lsmod -r e1000e", "modprobe -r e1000e"], "answer": 3, "explain": "modprobe -r はモジュールの取り外しに使える。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・現在の起動に限ったジャーナルを確認する", "choices": ["journalctl -f", "dmesg -w", "systemctl -b", "journalctl -b"], "answer": 3, "explain": "journalctl の -b は起動単位で絞り込む。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・カーネルリングバッファのメッセージを確認する", "choices": ["syslog", "logger", "dmesg", "uptime"], "answer": 2, "explain": "dmesg はカーネルの出力確認に適する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・systemd環境で再起動を要求する", "choices": ["systemctl reload", "systemctl isolate", "systemctl enable", "systemctl reboot"], "answer": 3, "explain": "reboot サブコマンドは再起動を要求する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・systemd環境で電源断を要求する", "choices": ["systemctl reset-failed", "systemctl mask", "systemctl daemon-reload", "systemctl poweroff"], "answer": 3, "explain": "poweroff は電源断を実行する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・救援用ターゲットへ切り替える", "choices": ["systemctl enable rescue.target", "systemctl isolate rescue.target", "systemctl reload rescue.target", "systemctl stop rescue.target"], "answer": 1, "explain": "isolate は指定ターゲットへ切り替える。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・カーネルが公開するデバイスやドライバ情報を参照する仮想ファイルシステム", "choices": ["/sys", "/tmp", "/srv", "/opt"], "answer": 0, "explain": "sysfs は通常 /sys にマウントされる。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・デバイス検出に応じて /dev のデバイスノードを管理する仕組み", "choices": ["atd", "syslog", "cron", "udev"], "answer": 3, "explain": "udev は動的デバイス管理を担う。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・実ルートをマウントする前に必要なドライバ等を提供する初期RAMファイルシステム", "choices": ["MBR", "initramfs", "ESP", "swap"], "answer": 1, "explain": "initramfs は起動初期に利用される。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・EFI System Partition 上のブートローダーを利用できるファームウェア方式", "choices": ["XFS", "ext4", "SysVinit", "UEFI"], "answer": 3, "explain": "UEFIではESPを用いる構成が一般的である。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・Linuxカーネルを選択・起動する代表的なブートローダー", "choices": ["udev", "systemd", "GRUB", "cron"], "answer": 2, "explain": "GRUBはカーネル引数を渡して起動できる。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・ディスクのパーティションテーブルを一覧表示する", "choices": ["free -l", "du -l", "df -l", "fdisk -l"], "answer": 3, "explain": "fdisk -l はパーティション情報の表示に使う。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・ブロックデバイスのツリー表示を行う", "choices": ["lsusb", "lsmod", "lsblk", "lspci"], "answer": 2, "explain": "lsblk はディスク・パーティション・LVM等を見やすく表示する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・ブロックデバイスのUUIDやファイルシステム種別を調べる", "choices": ["stat", "file", "id", "blkid"], "answer": 3, "explain": "blkid はUUID指定のfstab作成時にも有用である。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・未使用パーティション /dev/sdb1 にext4ファイルシステムを作成する", "choices": ["fdisk /dev/sdb1", "mount /dev/sdb1", "mkfs.ext4 /dev/sdb1", "fsck.ext4 /dev/sdb1"], "answer": 2, "explain": "mkfs.ext4 はext4ファイルシステムを新規作成する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・アンマウント済みext4ファイルシステムを検査・修復する", "choices": ["xfs_growfs /dev/sdb1", "mount -o repair /dev/sdb1", "resize2fs /dev/sdb1", "fsck.ext4 /dev/sdb1"], "answer": 3, "explain": "ext系の検査にはfsck.ext4を使用できる。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・アンマウント済みXFSファイルシステムを修復する", "choices": ["tune2fs /dev/sdb1", "fsck.ext4 /dev/sdb1", "xfs_growfs /dev/sdb1", "xfs_repair /dev/sdb1"], "answer": 3, "explain": "XFSの修復にはxfs_repairを使う。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・マウント済みXFSを拡張する", "choices": ["resize2fs /data", "fsck.xfs /data", "xfs_repair /data", "xfs_growfs /data"], "answer": 3, "explain": "XFSは縮小できないが、マウント中に拡張できる。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・拡張済みのext系ファイルシステムをサイズ変更する", "choices": ["resize2fs /dev/sdb1", "fdisk /dev/sdb1", "xfs_growfs /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "resize2fs はext2/3/4向けである。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・fstabに記述された未マウント項目をまとめてマウントする", "choices": ["umount -a", "mount -a", "fsck -a", "swapon -a"], "answer": 1, "explain": "mount -a はfstabの検証にも利用される。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・デバイス名の変更に影響されにくいfstabでのデバイス指定方法", "choices": ["UID", "inode", "PID", "UUID"], "answer": 3, "explain": "UUIDはファイルシステムを一意に識別する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・インストール済みRPMパッケージを一覧表示する", "choices": ["rpm -V", "rpm -qa", "rpm -qf", "rpm -e"], "answer": 1, "explain": "rpm -qa は全インストール済みパッケージを照会する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・指定ファイルを所有するRPMパッケージを調べる", "choices": ["rpm -U /usr/bin/ssh", "rpm -ql /usr/bin/ssh", "rpm -e /usr/bin/ssh", "rpm -qf /usr/bin/ssh"], "answer": 3, "explain": "rpm -qf はファイルからパッケージを逆引きする。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・RPMパッケージに含まれるファイルを一覧表示する", "choices": ["rpm -qf openssh-clients", "rpm -Va openssh-clients", "rpm -ql openssh-clients", "rpm -e openssh-clients"], "answer": 2, "explain": "rpm -ql はインストール済みパッケージのファイル一覧を表示する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・RPMパッケージ nano を削除する", "choices": ["rpm -V nano", "rpm -q nano", "rpm -i nano", "rpm -e nano"], "answer": 3, "explain": "rpm -e はアンインストールに使う。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・RPMファイルをインストールまたは更新する", "choices": ["rpm -e pkg.rpm", "rpm -q pkg.rpm", "rpm -Uvh pkg.rpm", "rpm -V pkg.rpm"], "answer": 2, "explain": "-Uはupgrade/install、-vと-hは進捗表示に使われる。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・DNFでhttpdパッケージをインストールする", "choices": ["dnf clean httpd", "dnf erase httpd", "dnf install httpd", "dnf info httpd"], "answer": 2, "explain": "dnf install はリポジトリからパッケージを導入する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・DNFでhttpdパッケージを削除する", "choices": ["dnf check-update httpd", "dnf install httpd", "dnf remove httpd", "dnf list httpd"], "answer": 2, "explain": "removeはインストール済みパッケージを削除する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・DNFのパッケージグループを導入する", "choices": ["dnf group install \"Development Tools\"", "dnf install group", "dnf group info install", "dnf group remove all"], "answer": 0, "explain": "group installでグループ単位の導入ができる。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・APTのパッケージ一覧情報を更新する", "choices": ["apt update", "apt show", "apt remove", "apt upgrade"], "answer": 0, "explain": "apt updateだけでは通常パッケージ本体は更新しない。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・APTで更新可能なインストール済みパッケージを更新する", "choices": ["apt update", "apt upgrade", "apt purge", "apt search"], "answer": 1, "explain": "update後にupgradeを実行してパッケージを更新する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・APTでtreeパッケージをインストールする", "choices": ["apt install tree", "apt update tree", "apt remove tree", "apt list tree"], "answer": 0, "explain": "installはパッケージの導入を行う。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・APTでtreeパッケージを削除する", "choices": ["apt update tree", "apt install tree", "apt policy tree", "apt remove tree"], "answer": 3, "explain": "removeは設定ファイルを残す場合がある。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・指定ファイルを所有するDebianパッケージを調べる", "choices": ["dpkg -i /bin/ls", "dpkg -S /bin/ls", "dpkg -r /bin/ls", "dpkg -L /bin/ls"], "answer": 1, "explain": "dpkg -S はファイルから所有パッケージを照会する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・Debianパッケージcoreutilsに含まれるファイルを一覧表示する", "choices": ["dpkg -i coreutils", "dpkg -S coreutils", "dpkg -r coreutils", "dpkg -L coreutils"], "answer": 3, "explain": "dpkg -L はパッケージからファイルを調べる。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・ローカルのDebianパッケージファイルをインストールする", "choices": ["dpkg -r pkg.deb", "dpkg -i pkg.deb", "dpkg -S pkg.deb", "dpkg -L pkg.deb"], "answer": 1, "explain": "dpkg -i はdebファイルを導入する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・/var/log配下の通常ファイルで7日未満前に更新されたものを探す", "choices": ["find /var/log -type f -mtime -7", "grep -r -7 /var/log", "locate -mtime -7", "find /var/log -type d -mtime 7"], "answer": 0, "explain": "findの-typeと-mtimeで条件指定する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・カレントディレクトリ以下のシンボリックリンクを検索する", "choices": ["find . -type l", "find . -type d", "find . -type f", "find . -type b"], "answer": 0, "explain": "findの-type lはシンボリックリンクを表す。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・大文字・小文字を区別せずerrorを含む行を抽出する", "choices": ["grep -i error app.log", "grep -n error app.log", "grep -c error app.log", "grep -v error app.log"], "answer": 0, "explain": "-iは大文字・小文字を区別しない。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・コメント行を除外して表示する", "choices": ["grep -c '^#' config", "grep -i '^#' config", "grep '^#' config", "grep -v '^#' config"], "answer": 3, "explain": "-vは一致しない行を出力する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・passwdからユーザー名とログインシェルを取り出す", "choices": ["cut -d: -f1,7 /etc/passwd", "cut -d: -f2-6 /etc/passwd", "cut -d: -f3 /etc/passwd", "cut -f1 /etc/passwd"], "answer": 0, "explain": "区切り文字指定に-d、フィールド指定に-fを使う。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・数値として行をソートする", "choices": ["sort -k numbers.txt", "sort -r numbers.txt", "sort -u numbers.txt", "sort -n numbers.txt"], "answer": 3, "explain": "-nは数値順での比較を指定する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・重複行を取り除いてソートする", "choices": ["sort -k names.txt", "sort -r names.txt", "sort -u names.txt", "sort -n names.txt"], "answer": 2, "explain": "-uは同一行を一つにまとめる。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・連続する重複行を数えて表示する", "choices": ["sort -c names.txt", "uniq -u names.txt", "uniq -d names.txt", "uniq -c names.txt"], "answer": 3, "explain": "uniq -cは出現回数を先頭に表示する。通常は事前にsortする。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・ファイルの行数を数える", "choices": ["wc -c access.log", "wc -w access.log", "wc -l access.log", "wc -m access.log"], "answer": 2, "explain": "-lは行数を出力する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・先頭20行を表示する", "choices": ["tail -n 20 file", "less -n 20 file", "head -n 20 file", "head -c 20 file"], "answer": 2, "explain": "headの-nで表示行数を指定する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・追記されるログを継続監視する", "choices": ["tail -f /var/log/messages", "tail -n /var/log/messages", "head -f /var/log/messages", "less -f /var/log/messages"], "answer": 0, "explain": "-fはファイル末尾への追記を追いかける。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・gzip圧縮tarアーカイブを展開する", "choices": ["tar -xzf backup.tar.gz", "tar -tf backup.tar.gz", "tar -czf backup.tar.gz", "gzip -r backup.tar.gz"], "answer": 0, "explain": "-xは展開、-zはgzip、-fはファイル指定である。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・dataをgzip圧縮tarアーカイブに作成する", "choices": ["cpio -czf backup.tar.gz", "tar -czf backup.tar.gz data", "tar -tzf backup.tar.gz", "tar -xzf backup.tar.gz"], "answer": 1, "explain": "-cは作成、-zはgzip圧縮を指定する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・各行のfooをすべてbarへ置換して出力する", "choices": ["sed -n 'foo' file", "sed 's/foo/bar/g' file", "sed 's/foo/bar/1' file", "sed '/foo/d' file"], "answer": 1, "explain": "sコマンドは置換、gは行内の全一致を対象とする。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・コロン区切りの第1フィールドを表示する", "choices": ["awk '{print $1}' /etc/passwd", "awk -F: '{print $1}' /etc/passwd", "grep '$1' /etc/passwd", "cut -f1 /etc/passwd"], "answer": 1, "explain": "-Fでフィールド区切りを指定できる。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・所有者rw、グループr、その他---に設定する", "choices": ["chmod 644 report", "chmod 600 report", "chmod 660 report", "chmod 640 report"], "answer": 3, "explain": "640はu=rw,g=r,o=---を表す。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・sharedで新規作成される項目にグループを継承させる", "choices": ["chmod +t shared", "chmod o+s shared", "chmod g+s shared", "chmod u+s shared"], "answer": 2, "explain": "ディレクトリのsetgidはグループ継承に用いる。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・共有ディレクトリで他人のファイル削除を制限する", "choices": ["chmod 777 /sharedtmp", "chmod +t /sharedtmp", "chmod g+s /sharedtmp", "chmod u+s /sharedtmp"], "answer": 1, "explain": "sticky bitは/tmpのような共有領域で使われる。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・sourceへのハードリンクを作成する", "choices": ["cp source hardlink", "ln source hardlink", "link -s source hardlink", "ln -s source hardlink"], "answer": 1, "explain": "lnの通常形式はハードリンクを作成する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・別の場所にあるファイルへのシンボリックリンクを作成する", "choices": ["ln -s /opt/app/bin/tool ~/bin/tool", "cp -s /opt/app/bin/tool ~/bin/tool", "link /opt/app/bin/tool ~/bin/tool", "ln /opt/app/bin/tool ~/bin/tool"], "answer": 0, "explain": "-sを付けるとシンボリックリンクを作成する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・マウント済みファイルシステムの使用量を人間が読みやすい単位で表示する", "choices": ["df -h", "free -h", "du -h", "lsblk -h"], "answer": 0, "explain": "dfはファイルシステム単位の空き容量確認に使う。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・/var/log全体の使用量を要約表示する", "choices": ["free -h /var/log", "df -h /var/log", "ls -lh /var/log", "du -sh /var/log"], "answer": 3, "explain": "duはディレクトリ内容の使用量を集計する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・デバイスを読み取り専用でマウントする", "choices": ["mount -o rw /dev/sdb1 /mnt", "mount -o ro /dev/sdb1 /mnt", "umount -o ro /mnt", "fsck -o ro /dev/sdb1"], "answer": 1, "explain": "roはread-onlyマウントオプションである。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・/mntにマウントされたファイルシステムを解除する", "choices": ["umount /mnt", "mount /mnt", "fsck /mnt", "swapoff /mnt"], "answer": 0, "explain": "umountはマウントポイントまたはデバイスを指定できる。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・swapパーティションを有効化する", "choices": ["mkswapoff /dev/sdb2", "swapon /dev/sdb2", "swapoff /dev/sdb2", "mount /dev/sdb2"], "answer": 1, "explain": "swaponはスワップ領域を有効化する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・パーティションをswap領域として初期化する", "choices": ["swapon -f /dev/sdb2", "mkswap /dev/sdb2", "fsck.swap /dev/sdb2", "mkfs.swap /dev/sdb2"], "answer": 1, "explain": "mkswapでスワップ用の署名を作成する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・永続的なマウント設定を記述するファイル", "choices": ["/etc/fstab", "/etc/passwd", "/etc/mtab", "/proc/mounts"], "answer": 0, "explain": "fstabは起動時などのマウント設定に使う。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・カーネルが認識する現在のマウント情報を参照する", "choices": ["/etc/fstab", "/etc/mtab", "/proc/mounts", "/proc/cpuinfo"], "answer": 2, "explain": "procfs内のmountsには現在のマウント情報がある。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・PCIデバイスの情報を一覧表示する", "choices": ["lspci", "lsusb", "blkid", "lsmod"], "answer": 0, "explain": "PCIバス上のデバイス確認には lspci を使う。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・USBデバイスの情報を一覧表示する", "choices": ["lsblk", "lsusb", "lspci", "uname"], "answer": 1, "explain": "USB機器の列挙には lsusb を使う。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・現在ロード済みのカーネルモジュールを表示する", "choices": ["modinfo", "depmod", "lsmod", "modprobe"], "answer": 2, "explain": "lsmod はロード済みモジュールの一覧を表示する。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・モジュール e1000e の詳細情報を確認する", "choices": ["lsmod e1000e", "modinfo e1000e", "modprobe e1000e", "depmod e1000e"], "answer": 1, "explain": "modinfo はモジュールの説明や依存関係を表示する。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・ロード済みモジュール e1000e を依存関係を考慮して外す", "choices": ["modprobe -r e1000e", "modinfo -r e1000e", "rmmod -a e1000e", "lsmod -r e1000e"], "answer": 0, "explain": "modprobe -r はモジュールの取り外しに使える。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・現在の起動に限ったジャーナルを確認する", "choices": ["journalctl -b", "journalctl -f", "systemctl -b", "dmesg -w"], "answer": 0, "explain": "journalctl の -b は起動単位で絞り込む。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・カーネルリングバッファのメッセージを確認する", "choices": ["uptime", "syslog", "logger", "dmesg"], "answer": 3, "explain": "dmesg はカーネルの出力確認に適する。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・systemd環境で再起動を要求する", "choices": ["systemctl reboot", "systemctl reload", "systemctl isolate", "systemctl enable"], "answer": 0, "explain": "reboot サブコマンドは再起動を要求する。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・systemd環境で電源断を要求する", "choices": ["systemctl poweroff", "systemctl daemon-reload", "systemctl mask", "systemctl reset-failed"], "answer": 0, "explain": "poweroff は電源断を実行する。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・救援用ターゲットへ切り替える", "choices": ["systemctl reload rescue.target", "systemctl isolate rescue.target", "systemctl stop rescue.target", "systemctl enable rescue.target"], "answer": 1, "explain": "isolate は指定ターゲットへ切り替える。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・カーネルが公開するデバイスやドライバ情報を参照する仮想ファイルシステム", "choices": ["/srv", "/tmp", "/sys", "/opt"], "answer": 2, "explain": "sysfs は通常 /sys にマウントされる。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・デバイス検出に応じて /dev のデバイスノードを管理する仕組み", "choices": ["syslog", "cron", "udev", "atd"], "answer": 2, "explain": "udev は動的デバイス管理を担う。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・実ルートをマウントする前に必要なドライバ等を提供する初期RAMファイルシステム", "choices": ["MBR", "initramfs", "swap", "ESP"], "answer": 1, "explain": "initramfs は起動初期に利用される。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・EFI System Partition 上のブートローダーを利用できるファームウェア方式", "choices": ["ext4", "XFS", "UEFI", "SysVinit"], "answer": 2, "explain": "UEFIではESPを用いる構成が一般的である。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・Linuxカーネルを選択・起動する代表的なブートローダー", "choices": ["cron", "GRUB", "udev", "systemd"], "answer": 1, "explain": "GRUBはカーネル引数を渡して起動できる。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・ディスクのパーティションテーブルを一覧表示する", "choices": ["df -l", "du -l", "free -l", "fdisk -l"], "answer": 3, "explain": "fdisk -l はパーティション情報の表示に使う。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・ブロックデバイスのツリー表示を行う", "choices": ["lspci", "lsmod", "lsusb", "lsblk"], "answer": 3, "explain": "lsblk はディスク・パーティション・LVM等を見やすく表示する。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・ブロックデバイスのUUIDやファイルシステム種別を調べる", "choices": ["blkid", "id", "file", "stat"], "answer": 0, "explain": "blkid はUUID指定のfstab作成時にも有用である。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・未使用パーティション /dev/sdb1 にext4ファイルシステムを作成する", "choices": ["fsck.ext4 /dev/sdb1", "fdisk /dev/sdb1", "mount /dev/sdb1", "mkfs.ext4 /dev/sdb1"], "answer": 3, "explain": "mkfs.ext4 はext4ファイルシステムを新規作成する。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・アンマウント済みext4ファイルシステムを検査・修復する", "choices": ["mount -o repair /dev/sdb1", "fsck.ext4 /dev/sdb1", "xfs_growfs /dev/sdb1", "resize2fs /dev/sdb1"], "answer": 1, "explain": "ext系の検査にはfsck.ext4を使用できる。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・アンマウント済みXFSファイルシステムを修復する", "choices": ["xfs_repair /dev/sdb1", "tune2fs /dev/sdb1", "fsck.ext4 /dev/sdb1", "xfs_growfs /dev/sdb1"], "answer": 0, "explain": "XFSの修復にはxfs_repairを使う。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・マウント済みXFSを拡張する", "choices": ["resize2fs /data", "fsck.xfs /data", "xfs_repair /data", "xfs_growfs /data"], "answer": 3, "explain": "XFSは縮小できないが、マウント中に拡張できる。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・拡張済みのext系ファイルシステムをサイズ変更する", "choices": ["fsck /dev/sdb1", "fdisk /dev/sdb1", "xfs_growfs /dev/sdb1", "resize2fs /dev/sdb1"], "answer": 3, "explain": "resize2fs はext2/3/4向けである。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・fstabに記述された未マウント項目をまとめてマウントする", "choices": ["fsck -a", "mount -a", "umount -a", "swapon -a"], "answer": 1, "explain": "mount -a はfstabの検証にも利用される。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・デバイス名の変更に影響されにくいfstabでのデバイス指定方法", "choices": ["UUID", "inode", "UID", "PID"], "answer": 0, "explain": "UUIDはファイルシステムを一意に識別する。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・インストール済みRPMパッケージを一覧表示する", "choices": ["rpm -qa", "rpm -qf", "rpm -e", "rpm -V"], "answer": 0, "explain": "rpm -qa は全インストール済みパッケージを照会する。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・指定ファイルを所有するRPMパッケージを調べる", "choices": ["rpm -U /usr/bin/ssh", "rpm -ql /usr/bin/ssh", "rpm -e /usr/bin/ssh", "rpm -qf /usr/bin/ssh"], "answer": 3, "explain": "rpm -qf はファイルからパッケージを逆引きする。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・RPMパッケージに含まれるファイルを一覧表示する", "choices": ["rpm -qf openssh-clients", "rpm -Va openssh-clients", "rpm -e openssh-clients", "rpm -ql openssh-clients"], "answer": 3, "explain": "rpm -ql はインストール済みパッケージのファイル一覧を表示する。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・RPMパッケージ nano を削除する", "choices": ["rpm -i nano", "rpm -V nano", "rpm -e nano", "rpm -q nano"], "answer": 2, "explain": "rpm -e はアンインストールに使う。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・RPMファイルをインストールまたは更新する", "choices": ["rpm -V pkg.rpm", "rpm -e pkg.rpm", "rpm -Uvh pkg.rpm", "rpm -q pkg.rpm"], "answer": 2, "explain": "-Uはupgrade/install、-vと-hは進捗表示に使われる。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・DNFでhttpdパッケージをインストールする", "choices": ["dnf clean httpd", "dnf erase httpd", "dnf info httpd", "dnf install httpd"], "answer": 3, "explain": "dnf install はリポジトリからパッケージを導入する。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・DNFでhttpdパッケージを削除する", "choices": ["dnf install httpd", "dnf remove httpd", "dnf list httpd", "dnf check-update httpd"], "answer": 1, "explain": "removeはインストール済みパッケージを削除する。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・DNFのパッケージグループを導入する", "choices": ["dnf group install \"Development Tools\"", "dnf group remove all", "dnf group info install", "dnf install group"], "answer": 0, "explain": "group installでグループ単位の導入ができる。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・APTのパッケージ一覧情報を更新する", "choices": ["apt update", "apt upgrade", "apt show", "apt remove"], "answer": 0, "explain": "apt updateだけでは通常パッケージ本体は更新しない。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・APTで更新可能なインストール済みパッケージを更新する", "choices": ["apt purge", "apt update", "apt upgrade", "apt search"], "answer": 2, "explain": "update後にupgradeを実行してパッケージを更新する。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・APTでtreeパッケージをインストールする", "choices": ["apt remove tree", "apt list tree", "apt install tree", "apt update tree"], "answer": 2, "explain": "installはパッケージの導入を行う。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・APTでtreeパッケージを削除する", "choices": ["apt remove tree", "apt install tree", "apt policy tree", "apt update tree"], "answer": 0, "explain": "removeは設定ファイルを残す場合がある。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・指定ファイルを所有するDebianパッケージを調べる", "choices": ["dpkg -r /bin/ls", "dpkg -L /bin/ls", "dpkg -i /bin/ls", "dpkg -S /bin/ls"], "answer": 3, "explain": "dpkg -S はファイルから所有パッケージを照会する。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・Debianパッケージcoreutilsに含まれるファイルを一覧表示する", "choices": ["dpkg -r coreutils", "dpkg -i coreutils", "dpkg -L coreutils", "dpkg -S coreutils"], "answer": 2, "explain": "dpkg -L はパッケージからファイルを調べる。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・ローカルのDebianパッケージファイルをインストールする", "choices": ["dpkg -S pkg.deb", "dpkg -r pkg.deb", "dpkg -i pkg.deb", "dpkg -L pkg.deb"], "answer": 2, "explain": "dpkg -i はdebファイルを導入する。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・/var/log配下の通常ファイルで7日未満前に更新されたものを探す", "choices": ["grep -r -7 /var/log", "locate -mtime -7", "find /var/log -type d -mtime 7", "find /var/log -type f -mtime -7"], "answer": 3, "explain": "findの-typeと-mtimeで条件指定する。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・カレントディレクトリ以下のシンボリックリンクを検索する", "choices": ["find . -type d", "find . -type b", "find . -type f", "find . -type l"], "answer": 3, "explain": "findの-type lはシンボリックリンクを表す。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・大文字・小文字を区別せずerrorを含む行を抽出する", "choices": ["grep -c error app.log", "grep -i error app.log", "grep -n error app.log", "grep -v error app.log"], "answer": 1, "explain": "-iは大文字・小文字を区別しない。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・コメント行を除外して表示する", "choices": ["grep -c '^#' config", "grep '^#' config", "grep -i '^#' config", "grep -v '^#' config"], "answer": 3, "explain": "-vは一致しない行を出力する。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・passwdからユーザー名とログインシェルを取り出す", "choices": ["cut -d: -f3 /etc/passwd", "cut -d: -f1,7 /etc/passwd", "cut -f1 /etc/passwd", "cut -d: -f2-6 /etc/passwd"], "answer": 1, "explain": "区切り文字指定に-d、フィールド指定に-fを使う。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・数値として行をソートする", "choices": ["sort -k numbers.txt", "sort -r numbers.txt", "sort -n numbers.txt", "sort -u numbers.txt"], "answer": 2, "explain": "-nは数値順での比較を指定する。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・重複行を取り除いてソートする", "choices": ["sort -r names.txt", "sort -n names.txt", "sort -k names.txt", "sort -u names.txt"], "answer": 3, "explain": "-uは同一行を一つにまとめる。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・連続する重複行を数えて表示する", "choices": ["uniq -c names.txt", "uniq -d names.txt", "uniq -u names.txt", "sort -c names.txt"], "answer": 0, "explain": "uniq -cは出現回数を先頭に表示する。通常は事前にsortする。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・ファイルの行数を数える", "choices": ["wc -m access.log", "wc -w access.log", "wc -c access.log", "wc -l access.log"], "answer": 3, "explain": "-lは行数を出力する。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・先頭20行を表示する", "choices": ["head -n 20 file", "less -n 20 file", "tail -n 20 file", "head -c 20 file"], "answer": 0, "explain": "headの-nで表示行数を指定する。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・追記されるログを継続監視する", "choices": ["head -f /var/log/messages", "tail -n /var/log/messages", "tail -f /var/log/messages", "less -f /var/log/messages"], "answer": 2, "explain": "-fはファイル末尾への追記を追いかける。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・gzip圧縮tarアーカイブを展開する", "choices": ["tar -xzf backup.tar.gz", "gzip -r backup.tar.gz", "tar -tf backup.tar.gz", "tar -czf backup.tar.gz"], "answer": 0, "explain": "-xは展開、-zはgzip、-fはファイル指定である。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・dataをgzip圧縮tarアーカイブに作成する", "choices": ["tar -tzf backup.tar.gz", "tar -xzf backup.tar.gz", "tar -czf backup.tar.gz data", "cpio -czf backup.tar.gz"], "answer": 2, "explain": "-cは作成、-zはgzip圧縮を指定する。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・各行のfooをすべてbarへ置換して出力する", "choices": ["sed 's/foo/bar/g' file", "sed -n 'foo' file", "sed 's/foo/bar/1' file", "sed '/foo/d' file"], "answer": 0, "explain": "sコマンドは置換、gは行内の全一致を対象とする。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・コロン区切りの第1フィールドを表示する", "choices": ["awk -F: '{print $1}' /etc/passwd", "awk '{print $1}' /etc/passwd", "grep '$1' /etc/passwd", "cut -f1 /etc/passwd"], "answer": 0, "explain": "-Fでフィールド区切りを指定できる。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・所有者rw、グループr、その他---に設定する", "choices": ["chmod 640 report", "chmod 660 report", "chmod 644 report", "chmod 600 report"], "answer": 0, "explain": "640はu=rw,g=r,o=---を表す。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・sharedで新規作成される項目にグループを継承させる", "choices": ["chmod +t shared", "chmod u+s shared", "chmod o+s shared", "chmod g+s shared"], "answer": 3, "explain": "ディレクトリのsetgidはグループ継承に用いる。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・共有ディレクトリで他人のファイル削除を制限する", "choices": ["chmod +t /sharedtmp", "chmod u+s /sharedtmp", "chmod 777 /sharedtmp", "chmod g+s /sharedtmp"], "answer": 0, "explain": "sticky bitは/tmpのような共有領域で使われる。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・sourceへのハードリンクを作成する", "choices": ["ln source hardlink", "cp source hardlink", "ln -s source hardlink", "link -s source hardlink"], "answer": 0, "explain": "lnの通常形式はハードリンクを作成する。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・別の場所にあるファイルへのシンボリックリンクを作成する", "choices": ["ln /opt/app/bin/tool ~/bin/tool", "ln -s /opt/app/bin/tool ~/bin/tool", "cp -s /opt/app/bin/tool ~/bin/tool", "link /opt/app/bin/tool ~/bin/tool"], "answer": 1, "explain": "-sを付けるとシンボリックリンクを作成する。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・マウント済みファイルシステムの使用量を人間が読みやすい単位で表示する", "choices": ["du -h", "free -h", "lsblk -h", "df -h"], "answer": 3, "explain": "dfはファイルシステム単位の空き容量確認に使う。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・/var/log全体の使用量を要約表示する", "choices": ["ls -lh /var/log", "du -sh /var/log", "df -h /var/log", "free -h /var/log"], "answer": 1, "explain": "duはディレクトリ内容の使用量を集計する。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・デバイスを読み取り専用でマウントする", "choices": ["mount -o ro /dev/sdb1 /mnt", "umount -o ro /mnt", "mount -o rw /dev/sdb1 /mnt", "fsck -o ro /dev/sdb1"], "answer": 0, "explain": "roはread-onlyマウントオプションである。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・/mntにマウントされたファイルシステムを解除する", "choices": ["swapoff /mnt", "mount /mnt", "umount /mnt", "fsck /mnt"], "answer": 2, "explain": "umountはマウントポイントまたはデバイスを指定できる。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・swapパーティションを有効化する", "choices": ["swapoff /dev/sdb2", "mkswapoff /dev/sdb2", "swapon /dev/sdb2", "mount /dev/sdb2"], "answer": 2, "explain": "swaponはスワップ領域を有効化する。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・パーティションをswap領域として初期化する", "choices": ["mkswap /dev/sdb2", "swapon -f /dev/sdb2", "mkfs.swap /dev/sdb2", "fsck.swap /dev/sdb2"], "answer": 0, "explain": "mkswapでスワップ用の署名を作成する。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・永続的なマウント設定を記述するファイル", "choices": ["/proc/mounts", "/etc/mtab", "/etc/passwd", "/etc/fstab"], "answer": 3, "explain": "fstabは起動時などのマウント設定に使う。"},
{"category": "第1部：コマンド演習", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・カーネルが認識する現在のマウント情報を参照する", "choices": ["/etc/mtab", "/etc/fstab", "/proc/mounts", "/proc/cpuinfo"], "answer": 2, "explain": "procfs内のmountsには現在のマウント情報がある。"},
{"category": "第1部：コマンド演習", "question": "次のうち、PCIデバイスの情報を一覧表示するために使うものはどれですか。", "choices": ["lsmod", "blkid", "lspci", "lsusb"], "answer": 2, "explain": "PCIバス上のデバイス確認には lspci を使う。"},
{"category": "第1部：コマンド演習", "question": "次のうち、USBデバイスの情報を一覧表示するために使うものはどれですか。", "choices": ["lsblk", "lspci", "uname", "lsusb"], "answer": 3, "explain": "USB機器の列挙には lsusb を使う。"},
{"category": "第1部：コマンド演習", "question": "次のうち、現在ロード済みのカーネルモジュールを表示するために使うものはどれですか。", "choices": ["modprobe", "modinfo", "lsmod", "depmod"], "answer": 2, "explain": "lsmod はロード済みモジュールの一覧を表示する。"},
{"category": "第1部：コマンド演習", "question": "次のうち、モジュール e1000e の詳細情報を確認するために使うものはどれですか。", "choices": ["modinfo e1000e", "depmod e1000e", "lsmod e1000e", "modprobe e1000e"], "answer": 0, "explain": "modinfo はモジュールの説明や依存関係を表示する。"},
{"category": "第1部：コマンド演習", "question": "次のうち、ロード済みモジュール e1000e を依存関係を考慮して外すために使うものはどれですか。", "choices": ["modprobe -r e1000e", "lsmod -r e1000e", "modinfo -r e1000e", "rmmod -a e1000e"], "answer": 0, "explain": "modprobe -r はモジュールの取り外しに使える。"},
{"category": "第1部：コマンド演習", "question": "次のうち、現在の起動に限ったジャーナルを確認するために使うものはどれですか。", "choices": ["systemctl -b", "dmesg -w", "journalctl -b", "journalctl -f"], "answer": 2, "explain": "journalctl の -b は起動単位で絞り込む。"},
{"category": "第1部：コマンド演習", "question": "次のうち、カーネルリングバッファのメッセージを確認するために使うものはどれですか。", "choices": ["logger", "dmesg", "syslog", "uptime"], "answer": 1, "explain": "dmesg はカーネルの出力確認に適する。"},
{"category": "第1部：コマンド演習", "question": "次のうち、systemd環境で再起動を要求するために使うものはどれですか。", "choices": ["systemctl reboot", "systemctl enable", "systemctl reload", "systemctl isolate"], "answer": 0, "explain": "reboot サブコマンドは再起動を要求する。"},
{"category": "第1部：コマンド演習", "question": "次のうち、systemd環境で電源断を要求するために使うものはどれですか。", "choices": ["systemctl daemon-reload", "systemctl poweroff", "systemctl mask", "systemctl reset-failed"], "answer": 1, "explain": "poweroff は電源断を実行する。"},
{"category": "第1部：コマンド演習", "question": "次のうち、救援用ターゲットへ切り替えるために使うものはどれですか。", "choices": ["systemctl reload rescue.target", "systemctl enable rescue.target", "systemctl isolate rescue.target", "systemctl stop rescue.target"], "answer": 2, "explain": "isolate は指定ターゲットへ切り替える。"},
{"category": "第1部：コマンド演習", "question": "次のうち、カーネルが公開するデバイスやドライバ情報を参照する仮想ファイルシステムために使うものはどれですか。", "choices": ["/tmp", "/opt", "/sys", "/srv"], "answer": 2, "explain": "sysfs は通常 /sys にマウントされる。"},
{"category": "第1部：コマンド演習", "question": "次のうち、デバイス検出に応じて /dev のデバイスノードを管理する仕組みために使うものはどれですか。", "choices": ["udev", "cron", "syslog", "atd"], "answer": 0, "explain": "udev は動的デバイス管理を担う。"},
{"category": "第1部：コマンド演習", "question": "次のうち、実ルートをマウントする前に必要なドライバ等を提供する初期RAMファイルシステムために使うものはどれですか。", "choices": ["initramfs", "MBR", "ESP", "swap"], "answer": 0, "explain": "initramfs は起動初期に利用される。"},
{"category": "第1部：コマンド演習", "question": "次のうち、EFI System Partition 上のブートローダーを利用できるファームウェア方式ために使うものはどれですか。", "choices": ["XFS", "UEFI", "ext4", "SysVinit"], "answer": 1, "explain": "UEFIではESPを用いる構成が一般的である。"},
{"category": "第1部：コマンド演習", "question": "次のうち、Linuxカーネルを選択・起動する代表的なブートローダーために使うものはどれですか。", "choices": ["GRUB", "udev", "cron", "systemd"], "answer": 0, "explain": "GRUBはカーネル引数を渡して起動できる。"},
{"category": "第1部：コマンド演習", "question": "次のうち、ディスクのパーティションテーブルを一覧表示するために使うものはどれですか。", "choices": ["free -l", "du -l", "fdisk -l", "df -l"], "answer": 2, "explain": "fdisk -l はパーティション情報の表示に使う。"},
{"category": "第1部：コマンド演習", "question": "次のうち、ブロックデバイスのツリー表示を行うために使うものはどれですか。", "choices": ["lsusb", "lsmod", "lsblk", "lspci"], "answer": 2, "explain": "lsblk はディスク・パーティション・LVM等を見やすく表示する。"},
{"category": "第1部：コマンド演習", "question": "次のうち、ブロックデバイスのUUIDやファイルシステム種別を調べるために使うものはどれですか。", "choices": ["file", "blkid", "id", "stat"], "answer": 1, "explain": "blkid はUUID指定のfstab作成時にも有用である。"},
{"category": "第1部：コマンド演習", "question": "次のうち、未使用パーティション /dev/sdb1 にext4ファイルシステムを作成するために使うものはどれですか。", "choices": ["mount /dev/sdb1", "mkfs.ext4 /dev/sdb1", "fdisk /dev/sdb1", "fsck.ext4 /dev/sdb1"], "answer": 1, "explain": "mkfs.ext4 はext4ファイルシステムを新規作成する。"},
{"category": "第1部：コマンド演習", "question": "次のうち、アンマウント済みext4ファイルシステムを検査・修復するために使うものはどれですか。", "choices": ["xfs_growfs /dev/sdb1", "resize2fs /dev/sdb1", "fsck.ext4 /dev/sdb1", "mount -o repair /dev/sdb1"], "answer": 2, "explain": "ext系の検査にはfsck.ext4を使用できる。"},
{"category": "第1部：コマンド演習", "question": "次のうち、アンマウント済みXFSファイルシステムを修復するために使うものはどれですか。", "choices": ["fsck.ext4 /dev/sdb1", "tune2fs /dev/sdb1", "xfs_growfs /dev/sdb1", "xfs_repair /dev/sdb1"], "answer": 3, "explain": "XFSの修復にはxfs_repairを使う。"},
{"category": "第1部：コマンド演習", "question": "次のうち、マウント済みXFSを拡張するために使うものはどれですか。", "choices": ["xfs_growfs /data", "resize2fs /data", "fsck.xfs /data", "xfs_repair /data"], "answer": 0, "explain": "XFSは縮小できないが、マウント中に拡張できる。"},
{"category": "第1部：コマンド演習", "question": "次のうち、拡張済みのext系ファイルシステムをサイズ変更するために使うものはどれですか。", "choices": ["fdisk /dev/sdb1", "fsck /dev/sdb1", "xfs_growfs /dev/sdb1", "resize2fs /dev/sdb1"], "answer": 3, "explain": "resize2fs はext2/3/4向けである。"},
{"category": "第1部：コマンド演習", "question": "次のうち、fstabに記述された未マウント項目をまとめてマウントするために使うものはどれですか。", "choices": ["swapon -a", "umount -a", "mount -a", "fsck -a"], "answer": 2, "explain": "mount -a はfstabの検証にも利用される。"},
{"category": "第1部：コマンド演習", "question": "次のうち、デバイス名の変更に影響されにくいfstabでのデバイス指定方法ために使うものはどれですか。", "choices": ["UID", "inode", "UUID", "PID"], "answer": 2, "explain": "UUIDはファイルシステムを一意に識別する。"},
{"category": "第1部：コマンド演習", "question": "次のうち、インストール済みRPMパッケージを一覧表示するために使うものはどれですか。", "choices": ["rpm -qf", "rpm -e", "rpm -qa", "rpm -V"], "answer": 2, "explain": "rpm -qa は全インストール済みパッケージを照会する。"},
{"category": "第1部：コマンド演習", "question": "次のうち、指定ファイルを所有するRPMパッケージを調べるために使うものはどれですか。", "choices": ["rpm -ql /usr/bin/ssh", "rpm -qf /usr/bin/ssh", "rpm -e /usr/bin/ssh", "rpm -U /usr/bin/ssh"], "answer": 1, "explain": "rpm -qf はファイルからパッケージを逆引きする。"},
{"category": "第1部：コマンド演習", "question": "次のうち、RPMパッケージに含まれるファイルを一覧表示するために使うものはどれですか。", "choices": ["rpm -Va openssh-clients", "rpm -ql openssh-clients", "rpm -qf openssh-clients", "rpm -e openssh-clients"], "answer": 1, "explain": "rpm -ql はインストール済みパッケージのファイル一覧を表示する。"},
{"category": "第1部：コマンド演習", "question": "次のうち、RPMパッケージ nano を削除するために使うものはどれですか。", "choices": ["rpm -e nano", "rpm -i nano", "rpm -V nano", "rpm -q nano"], "answer": 0, "explain": "rpm -e はアンインストールに使う。"},
{"category": "第1部：コマンド演習", "question": "次のうち、RPMファイルをインストールまたは更新するために使うものはどれですか。", "choices": ["rpm -Uvh pkg.rpm", "rpm -q pkg.rpm", "rpm -e pkg.rpm", "rpm -V pkg.rpm"], "answer": 0, "explain": "-Uはupgrade/install、-vと-hは進捗表示に使われる。"},
{"category": "第1部：コマンド演習", "question": "次のうち、DNFでhttpdパッケージをインストールするために使うものはどれですか。", "choices": ["dnf clean httpd", "dnf erase httpd", "dnf install httpd", "dnf info httpd"], "answer": 2, "explain": "dnf install はリポジトリからパッケージを導入する。"},
{"category": "第1部：コマンド演習", "question": "次のうち、DNFでhttpdパッケージを削除するために使うものはどれですか。", "choices": ["dnf install httpd", "dnf list httpd", "dnf check-update httpd", "dnf remove httpd"], "answer": 3, "explain": "removeはインストール済みパッケージを削除する。"},
{"category": "第1部：コマンド演習", "question": "次のうち、DNFのパッケージグループを導入するために使うものはどれですか。", "choices": ["dnf group info install", "dnf group remove all", "dnf group install \"Development Tools\"", "dnf install group"], "answer": 2, "explain": "group installでグループ単位の導入ができる。"},
{"category": "第1部：コマンド演習", "question": "次のうち、APTのパッケージ一覧情報を更新するために使うものはどれですか。", "choices": ["apt remove", "apt show", "apt upgrade", "apt update"], "answer": 3, "explain": "apt updateだけでは通常パッケージ本体は更新しない。"},
{"category": "第1部：コマンド演習", "question": "次のうち、APTで更新可能なインストール済みパッケージを更新するために使うものはどれですか。", "choices": ["apt purge", "apt upgrade", "apt search", "apt update"], "answer": 1, "explain": "update後にupgradeを実行してパッケージを更新する。"},
{"category": "第1部：コマンド演習", "question": "次のうち、APTでtreeパッケージをインストールするために使うものはどれですか。", "choices": ["apt remove tree", "apt update tree", "apt list tree", "apt install tree"], "answer": 3, "explain": "installはパッケージの導入を行う。"},
{"category": "第1部：コマンド演習", "question": "次のうち、APTでtreeパッケージを削除するために使うものはどれですか。", "choices": ["apt policy tree", "apt install tree", "apt remove tree", "apt update tree"], "answer": 2, "explain": "removeは設定ファイルを残す場合がある。"},
{"category": "第1部：コマンド演習", "question": "次のうち、指定ファイルを所有するDebianパッケージを調べるために使うものはどれですか。", "choices": ["dpkg -L /bin/ls", "dpkg -S /bin/ls", "dpkg -r /bin/ls", "dpkg -i /bin/ls"], "answer": 1, "explain": "dpkg -S はファイルから所有パッケージを照会する。"},
{"category": "第1部：コマンド演習", "question": "次のうち、Debianパッケージcoreutilsに含まれるファイルを一覧表示するために使うものはどれですか。", "choices": ["dpkg -S coreutils", "dpkg -L coreutils", "dpkg -r coreutils", "dpkg -i coreutils"], "answer": 1, "explain": "dpkg -L はパッケージからファイルを調べる。"},
{"category": "第1部：コマンド演習", "question": "次のうち、ローカルのDebianパッケージファイルをインストールするために使うものはどれですか。", "choices": ["dpkg -S pkg.deb", "dpkg -r pkg.deb", "dpkg -L pkg.deb", "dpkg -i pkg.deb"], "answer": 3, "explain": "dpkg -i はdebファイルを導入する。"},
{"category": "第1部：コマンド演習", "question": "次のうち、/var/log配下の通常ファイルで7日未満前に更新されたものを探すために使うものはどれですか。", "choices": ["grep -r -7 /var/log", "find /var/log -type f -mtime -7", "locate -mtime -7", "find /var/log -type d -mtime 7"], "answer": 1, "explain": "findの-typeと-mtimeで条件指定する。"},
{"category": "第1部：コマンド演習", "question": "次のうち、カレントディレクトリ以下のシンボリックリンクを検索するために使うものはどれですか。", "choices": ["find . -type b", "find . -type d", "find . -type f", "find . -type l"], "answer": 3, "explain": "findの-type lはシンボリックリンクを表す。"},
{"category": "第1部：コマンド演習", "question": "次のうち、大文字・小文字を区別せずerrorを含む行を抽出するために使うものはどれですか。", "choices": ["grep -n error app.log", "grep -v error app.log", "grep -c error app.log", "grep -i error app.log"], "answer": 3, "explain": "-iは大文字・小文字を区別しない。"},
{"category": "第1部：コマンド演習", "question": "次のうち、コメント行を除外して表示するために使うものはどれですか。", "choices": ["grep '^#' config", "grep -v '^#' config", "grep -i '^#' config", "grep -c '^#' config"], "answer": 1, "explain": "-vは一致しない行を出力する。"},
{"category": "第1部：コマンド演習", "question": "次のうち、passwdからユーザー名とログインシェルを取り出すために使うものはどれですか。", "choices": ["cut -d: -f2-6 /etc/passwd", "cut -d: -f3 /etc/passwd", "cut -d: -f1,7 /etc/passwd", "cut -f1 /etc/passwd"], "answer": 2, "explain": "区切り文字指定に-d、フィールド指定に-fを使う。"},
{"category": "第1部：コマンド演習", "question": "次のうち、数値として行をソートするために使うものはどれですか。", "choices": ["sort -r numbers.txt", "sort -k numbers.txt", "sort -n numbers.txt", "sort -u numbers.txt"], "answer": 2, "explain": "-nは数値順での比較を指定する。"},
{"category": "第1部：コマンド演習", "question": "次のうち、重複行を取り除いてソートするために使うものはどれですか。", "choices": ["sort -n names.txt", "sort -r names.txt", "sort -k names.txt", "sort -u names.txt"], "answer": 3, "explain": "-uは同一行を一つにまとめる。"},
{"category": "第1部：コマンド演習", "question": "次のうち、連続する重複行を数えて表示するために使うものはどれですか。", "choices": ["uniq -d names.txt", "uniq -c names.txt", "sort -c names.txt", "uniq -u names.txt"], "answer": 1, "explain": "uniq -cは出現回数を先頭に表示する。通常は事前にsortする。"},
{"category": "第1部：コマンド演習", "question": "次のうち、ファイルの行数を数えるために使うものはどれですか。", "choices": ["wc -c access.log", "wc -m access.log", "wc -w access.log", "wc -l access.log"], "answer": 3, "explain": "-lは行数を出力する。"},
{"category": "第1部：コマンド演習", "question": "次のうち、先頭20行を表示するために使うものはどれですか。", "choices": ["head -c 20 file", "tail -n 20 file", "head -n 20 file", "less -n 20 file"], "answer": 2, "explain": "headの-nで表示行数を指定する。"},
{"category": "第1部：コマンド演習", "question": "次のうち、追記されるログを継続監視するために使うものはどれですか。", "choices": ["head -f /var/log/messages", "tail -f /var/log/messages", "less -f /var/log/messages", "tail -n /var/log/messages"], "answer": 1, "explain": "-fはファイル末尾への追記を追いかける。"},
{"category": "第1部：コマンド演習", "question": "次のうち、gzip圧縮tarアーカイブを展開するために使うものはどれですか。", "choices": ["gzip -r backup.tar.gz", "tar -tf backup.tar.gz", "tar -czf backup.tar.gz", "tar -xzf backup.tar.gz"], "answer": 3, "explain": "-xは展開、-zはgzip、-fはファイル指定である。"},
{"category": "第1部：コマンド演習", "question": "次のうち、dataをgzip圧縮tarアーカイブに作成するために使うものはどれですか。", "choices": ["tar -czf backup.tar.gz data", "tar -tzf backup.tar.gz", "tar -xzf backup.tar.gz", "cpio -czf backup.tar.gz"], "answer": 0, "explain": "-cは作成、-zはgzip圧縮を指定する。"},
{"category": "第1部：コマンド演習", "question": "次のうち、各行のfooをすべてbarへ置換して出力するために使うものはどれですか。", "choices": ["sed -n 'foo' file", "sed 's/foo/bar/g' file", "sed 's/foo/bar/1' file", "sed '/foo/d' file"], "answer": 1, "explain": "sコマンドは置換、gは行内の全一致を対象とする。"},
{"category": "第1部：コマンド演習", "question": "次のうち、コロン区切りの第1フィールドを表示するために使うものはどれですか。", "choices": ["grep '$1' /etc/passwd", "awk '{print $1}' /etc/passwd", "cut -f1 /etc/passwd", "awk -F: '{print $1}' /etc/passwd"], "answer": 3, "explain": "-Fでフィールド区切りを指定できる。"},
{"category": "第1部：コマンド演習", "question": "次のうち、所有者rw、グループr、その他---に設定するために使うものはどれですか。", "choices": ["chmod 644 report", "chmod 600 report", "chmod 640 report", "chmod 660 report"], "answer": 2, "explain": "640はu=rw,g=r,o=---を表す。"},
{"category": "第1部：コマンド演習", "question": "次のうち、sharedで新規作成される項目にグループを継承させるために使うものはどれですか。", "choices": ["chmod u+s shared", "chmod o+s shared", "chmod +t shared", "chmod g+s shared"], "answer": 3, "explain": "ディレクトリのsetgidはグループ継承に用いる。"},
{"category": "第1部：コマンド演習", "question": "次のうち、共有ディレクトリで他人のファイル削除を制限するために使うものはどれですか。", "choices": ["chmod g+s /sharedtmp", "chmod 777 /sharedtmp", "chmod u+s /sharedtmp", "chmod +t /sharedtmp"], "answer": 3, "explain": "sticky bitは/tmpのような共有領域で使われる。"},
{"category": "第1部：コマンド演習", "question": "次のうち、sourceへのハードリンクを作成するために使うものはどれですか。", "choices": ["ln source hardlink", "cp source hardlink", "ln -s source hardlink", "link -s source hardlink"], "answer": 0, "explain": "lnの通常形式はハードリンクを作成する。"},
{"category": "第1部：コマンド演習", "question": "次のうち、別の場所にあるファイルへのシンボリックリンクを作成するために使うものはどれですか。", "choices": ["ln -s /opt/app/bin/tool ~/bin/tool", "link /opt/app/bin/tool ~/bin/tool", "cp -s /opt/app/bin/tool ~/bin/tool", "ln /opt/app/bin/tool ~/bin/tool"], "answer": 0, "explain": "-sを付けるとシンボリックリンクを作成する。"},
{"category": "第1部：コマンド演習", "question": "次のうち、マウント済みファイルシステムの使用量を人間が読みやすい単位で表示するために使うものはどれですか。", "choices": ["df -h", "lsblk -h", "du -h", "free -h"], "answer": 0, "explain": "dfはファイルシステム単位の空き容量確認に使う。"},
{"category": "第1部：コマンド演習", "question": "次のうち、/var/log全体の使用量を要約表示するために使うものはどれですか。", "choices": ["free -h /var/log", "du -sh /var/log", "ls -lh /var/log", "df -h /var/log"], "answer": 1, "explain": "duはディレクトリ内容の使用量を集計する。"},
{"category": "第1部：コマンド演習", "question": "次のうち、デバイスを読み取り専用でマウントするために使うものはどれですか。", "choices": ["umount -o ro /mnt", "mount -o rw /dev/sdb1 /mnt", "fsck -o ro /dev/sdb1", "mount -o ro /dev/sdb1 /mnt"], "answer": 3, "explain": "roはread-onlyマウントオプションである。"},
{"category": "第1部：コマンド演習", "question": "次のうち、/mntにマウントされたファイルシステムを解除するために使うものはどれですか。", "choices": ["umount /mnt", "mount /mnt", "swapoff /mnt", "fsck /mnt"], "answer": 0, "explain": "umountはマウントポイントまたはデバイスを指定できる。"},
{"category": "第1部：コマンド演習", "question": "次のうち、swapパーティションを有効化するために使うものはどれですか。", "choices": ["swapon /dev/sdb2", "swapoff /dev/sdb2", "mount /dev/sdb2", "mkswapoff /dev/sdb2"], "answer": 0, "explain": "swaponはスワップ領域を有効化する。"},
{"category": "第1部：コマンド演習", "question": "次のうち、パーティションをswap領域として初期化するために使うものはどれですか。", "choices": ["mkswap /dev/sdb2", "fsck.swap /dev/sdb2", "mkfs.swap /dev/sdb2", "swapon -f /dev/sdb2"], "answer": 0, "explain": "mkswapでスワップ用の署名を作成する。"},
{"category": "第1部：コマンド演習", "question": "次のうち、永続的なマウント設定を記述するファイルために使うものはどれですか。", "choices": ["/etc/passwd", "/etc/mtab", "/etc/fstab", "/proc/mounts"], "answer": 2, "explain": "fstabは起動時などのマウント設定に使う。"},
{"category": "第1部：コマンド演習", "question": "次のうち、カーネルが認識する現在のマウント情報を参照するために使うものはどれですか。", "choices": ["/etc/mtab", "/etc/fstab", "/proc/mounts", "/proc/cpuinfo"], "answer": 2, "explain": "procfs内のmountsには現在のマウント情報がある。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・PCIデバイスの情報を一覧表示する", "choices": ["blkid", "lsusb", "lsmod", "lspci"], "answer": 3, "explain": "PCIバス上のデバイス確認には lspci を使う。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・USBデバイスの情報を一覧表示する", "choices": ["uname", "lsusb", "lspci", "lsblk"], "answer": 1, "explain": "USB機器の列挙には lsusb を使う。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・現在ロード済みのカーネルモジュールを表示する", "choices": ["modprobe", "modinfo", "depmod", "lsmod"], "answer": 3, "explain": "lsmod はロード済みモジュールの一覧を表示する。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・モジュール e1000e の詳細情報を確認する", "choices": ["modinfo e1000e", "modprobe e1000e", "depmod e1000e", "lsmod e1000e"], "answer": 0, "explain": "modinfo はモジュールの説明や依存関係を表示する。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・ロード済みモジュール e1000e を依存関係を考慮して外す", "choices": ["lsmod -r e1000e", "modinfo -r e1000e", "modprobe -r e1000e", "rmmod -a e1000e"], "answer": 2, "explain": "modprobe -r はモジュールの取り外しに使える。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・現在の起動に限ったジャーナルを確認する", "choices": ["journalctl -b", "systemctl -b", "dmesg -w", "journalctl -f"], "answer": 0, "explain": "journalctl の -b は起動単位で絞り込む。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・カーネルリングバッファのメッセージを確認する", "choices": ["uptime", "syslog", "logger", "dmesg"], "answer": 3, "explain": "dmesg はカーネルの出力確認に適する。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・systemd環境で再起動を要求する", "choices": ["systemctl reload", "systemctl reboot", "systemctl enable", "systemctl isolate"], "answer": 1, "explain": "reboot サブコマンドは再起動を要求する。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・systemd環境で電源断を要求する", "choices": ["systemctl daemon-reload", "systemctl reset-failed", "systemctl mask", "systemctl poweroff"], "answer": 3, "explain": "poweroff は電源断を実行する。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・救援用ターゲットへ切り替える", "choices": ["systemctl reload rescue.target", "systemctl enable rescue.target", "systemctl stop rescue.target", "systemctl isolate rescue.target"], "answer": 3, "explain": "isolate は指定ターゲットへ切り替える。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・カーネルが公開するデバイスやドライバ情報を参照する仮想ファイルシステム", "choices": ["/srv", "/tmp", "/sys", "/opt"], "answer": 2, "explain": "sysfs は通常 /sys にマウントされる。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・デバイス検出に応じて /dev のデバイスノードを管理する仕組み", "choices": ["syslog", "cron", "udev", "atd"], "answer": 2, "explain": "udev は動的デバイス管理を担う。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・実ルートをマウントする前に必要なドライバ等を提供する初期RAMファイルシステム", "choices": ["MBR", "swap", "initramfs", "ESP"], "answer": 2, "explain": "initramfs は起動初期に利用される。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・EFI System Partition 上のブートローダーを利用できるファームウェア方式", "choices": ["SysVinit", "XFS", "UEFI", "ext4"], "answer": 2, "explain": "UEFIではESPを用いる構成が一般的である。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・Linuxカーネルを選択・起動する代表的なブートローダー", "choices": ["cron", "systemd", "GRUB", "udev"], "answer": 2, "explain": "GRUBはカーネル引数を渡して起動できる。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・ディスクのパーティションテーブルを一覧表示する", "choices": ["du -l", "df -l", "free -l", "fdisk -l"], "answer": 3, "explain": "fdisk -l はパーティション情報の表示に使う。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・ブロックデバイスのツリー表示を行う", "choices": ["lsusb", "lspci", "lsmod", "lsblk"], "answer": 3, "explain": "lsblk はディスク・パーティション・LVM等を見やすく表示する。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・ブロックデバイスのUUIDやファイルシステム種別を調べる", "choices": ["file", "blkid", "id", "stat"], "answer": 1, "explain": "blkid はUUID指定のfstab作成時にも有用である。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・未使用パーティション /dev/sdb1 にext4ファイルシステムを作成する", "choices": ["fsck.ext4 /dev/sdb1", "fdisk /dev/sdb1", "mkfs.ext4 /dev/sdb1", "mount /dev/sdb1"], "answer": 2, "explain": "mkfs.ext4 はext4ファイルシステムを新規作成する。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・アンマウント済みext4ファイルシステムを検査・修復する", "choices": ["xfs_growfs /dev/sdb1", "resize2fs /dev/sdb1", "fsck.ext4 /dev/sdb1", "mount -o repair /dev/sdb1"], "answer": 2, "explain": "ext系の検査にはfsck.ext4を使用できる。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・アンマウント済みXFSファイルシステムを修復する", "choices": ["xfs_growfs /dev/sdb1", "tune2fs /dev/sdb1", "xfs_repair /dev/sdb1", "fsck.ext4 /dev/sdb1"], "answer": 2, "explain": "XFSの修復にはxfs_repairを使う。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・マウント済みXFSを拡張する", "choices": ["fsck.xfs /data", "xfs_growfs /data", "resize2fs /data", "xfs_repair /data"], "answer": 1, "explain": "XFSは縮小できないが、マウント中に拡張できる。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・拡張済みのext系ファイルシステムをサイズ変更する", "choices": ["fsck /dev/sdb1", "xfs_growfs /dev/sdb1", "resize2fs /dev/sdb1", "fdisk /dev/sdb1"], "answer": 2, "explain": "resize2fs はext2/3/4向けである。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・fstabに記述された未マウント項目をまとめてマウントする", "choices": ["umount -a", "mount -a", "swapon -a", "fsck -a"], "answer": 1, "explain": "mount -a はfstabの検証にも利用される。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・デバイス名の変更に影響されにくいfstabでのデバイス指定方法", "choices": ["inode", "PID", "UUID", "UID"], "answer": 2, "explain": "UUIDはファイルシステムを一意に識別する。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・インストール済みRPMパッケージを一覧表示する", "choices": ["rpm -qf", "rpm -V", "rpm -e", "rpm -qa"], "answer": 3, "explain": "rpm -qa は全インストール済みパッケージを照会する。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・指定ファイルを所有するRPMパッケージを調べる", "choices": ["rpm -qf /usr/bin/ssh", "rpm -U /usr/bin/ssh", "rpm -e /usr/bin/ssh", "rpm -ql /usr/bin/ssh"], "answer": 0, "explain": "rpm -qf はファイルからパッケージを逆引きする。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・RPMパッケージに含まれるファイルを一覧表示する", "choices": ["rpm -e openssh-clients", "rpm -qf openssh-clients", "rpm -ql openssh-clients", "rpm -Va openssh-clients"], "answer": 2, "explain": "rpm -ql はインストール済みパッケージのファイル一覧を表示する。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・RPMパッケージ nano を削除する", "choices": ["rpm -q nano", "rpm -V nano", "rpm -e nano", "rpm -i nano"], "answer": 2, "explain": "rpm -e はアンインストールに使う。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・RPMファイルをインストールまたは更新する", "choices": ["rpm -q pkg.rpm", "rpm -V pkg.rpm", "rpm -e pkg.rpm", "rpm -Uvh pkg.rpm"], "answer": 3, "explain": "-Uはupgrade/install、-vと-hは進捗表示に使われる。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・DNFでhttpdパッケージをインストールする", "choices": ["dnf erase httpd", "dnf install httpd", "dnf clean httpd", "dnf info httpd"], "answer": 1, "explain": "dnf install はリポジトリからパッケージを導入する。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・DNFでhttpdパッケージを削除する", "choices": ["dnf list httpd", "dnf remove httpd", "dnf check-update httpd", "dnf install httpd"], "answer": 1, "explain": "removeはインストール済みパッケージを削除する。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・DNFのパッケージグループを導入する", "choices": ["dnf group install \"Development Tools\"", "dnf install group", "dnf group remove all", "dnf group info install"], "answer": 0, "explain": "group installでグループ単位の導入ができる。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・APTのパッケージ一覧情報を更新する", "choices": ["apt remove", "apt show", "apt update", "apt upgrade"], "answer": 2, "explain": "apt updateだけでは通常パッケージ本体は更新しない。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・APTで更新可能なインストール済みパッケージを更新する", "choices": ["apt purge", "apt update", "apt search", "apt upgrade"], "answer": 3, "explain": "update後にupgradeを実行してパッケージを更新する。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・APTでtreeパッケージをインストールする", "choices": ["apt update tree", "apt install tree", "apt list tree", "apt remove tree"], "answer": 1, "explain": "installはパッケージの導入を行う。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・APTでtreeパッケージを削除する", "choices": ["apt remove tree", "apt install tree", "apt policy tree", "apt update tree"], "answer": 0, "explain": "removeは設定ファイルを残す場合がある。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・指定ファイルを所有するDebianパッケージを調べる", "choices": ["dpkg -i /bin/ls", "dpkg -S /bin/ls", "dpkg -L /bin/ls", "dpkg -r /bin/ls"], "answer": 1, "explain": "dpkg -S はファイルから所有パッケージを照会する。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・Debianパッケージcoreutilsに含まれるファイルを一覧表示する", "choices": ["dpkg -r coreutils", "dpkg -L coreutils", "dpkg -i coreutils", "dpkg -S coreutils"], "answer": 1, "explain": "dpkg -L はパッケージからファイルを調べる。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・ローカルのDebianパッケージファイルをインストールする", "choices": ["dpkg -S pkg.deb", "dpkg -i pkg.deb", "dpkg -r pkg.deb", "dpkg -L pkg.deb"], "answer": 1, "explain": "dpkg -i はdebファイルを導入する。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・/var/log配下の通常ファイルで7日未満前に更新されたものを探す", "choices": ["locate -mtime -7", "find /var/log -type f -mtime -7", "grep -r -7 /var/log", "find /var/log -type d -mtime 7"], "answer": 1, "explain": "findの-typeと-mtimeで条件指定する。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・カレントディレクトリ以下のシンボリックリンクを検索する", "choices": ["find . -type f", "find . -type d", "find . -type l", "find . -type b"], "answer": 2, "explain": "findの-type lはシンボリックリンクを表す。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・大文字・小文字を区別せずerrorを含む行を抽出する", "choices": ["grep -v error app.log", "grep -i error app.log", "grep -c error app.log", "grep -n error app.log"], "answer": 1, "explain": "-iは大文字・小文字を区別しない。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・コメント行を除外して表示する", "choices": ["grep -i '^#' config", "grep -v '^#' config", "grep '^#' config", "grep -c '^#' config"], "answer": 1, "explain": "-vは一致しない行を出力する。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・passwdからユーザー名とログインシェルを取り出す", "choices": ["cut -d: -f2-6 /etc/passwd", "cut -d: -f1,7 /etc/passwd", "cut -f1 /etc/passwd", "cut -d: -f3 /etc/passwd"], "answer": 1, "explain": "区切り文字指定に-d、フィールド指定に-fを使う。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・数値として行をソートする", "choices": ["sort -r numbers.txt", "sort -n numbers.txt", "sort -u numbers.txt", "sort -k numbers.txt"], "answer": 1, "explain": "-nは数値順での比較を指定する。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・重複行を取り除いてソートする", "choices": ["sort -k names.txt", "sort -r names.txt", "sort -n names.txt", "sort -u names.txt"], "answer": 3, "explain": "-uは同一行を一つにまとめる。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・連続する重複行を数えて表示する", "choices": ["uniq -c names.txt", "sort -c names.txt", "uniq -u names.txt", "uniq -d names.txt"], "answer": 0, "explain": "uniq -cは出現回数を先頭に表示する。通常は事前にsortする。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・ファイルの行数を数える", "choices": ["wc -l access.log", "wc -w access.log", "wc -c access.log", "wc -m access.log"], "answer": 0, "explain": "-lは行数を出力する。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・先頭20行を表示する", "choices": ["head -n 20 file", "less -n 20 file", "head -c 20 file", "tail -n 20 file"], "answer": 0, "explain": "headの-nで表示行数を指定する。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・追記されるログを継続監視する", "choices": ["less -f /var/log/messages", "tail -f /var/log/messages", "tail -n /var/log/messages", "head -f /var/log/messages"], "answer": 1, "explain": "-fはファイル末尾への追記を追いかける。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・gzip圧縮tarアーカイブを展開する", "choices": ["tar -czf backup.tar.gz", "tar -tf backup.tar.gz", "tar -xzf backup.tar.gz", "gzip -r backup.tar.gz"], "answer": 2, "explain": "-xは展開、-zはgzip、-fはファイル指定である。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・dataをgzip圧縮tarアーカイブに作成する", "choices": ["cpio -czf backup.tar.gz", "tar -xzf backup.tar.gz", "tar -tzf backup.tar.gz", "tar -czf backup.tar.gz data"], "answer": 3, "explain": "-cは作成、-zはgzip圧縮を指定する。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・各行のfooをすべてbarへ置換して出力する", "choices": ["sed 's/foo/bar/1' file", "sed '/foo/d' file", "sed 's/foo/bar/g' file", "sed -n 'foo' file"], "answer": 2, "explain": "sコマンドは置換、gは行内の全一致を対象とする。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・コロン区切りの第1フィールドを表示する", "choices": ["grep '$1' /etc/passwd", "cut -f1 /etc/passwd", "awk -F: '{print $1}' /etc/passwd", "awk '{print $1}' /etc/passwd"], "answer": 2, "explain": "-Fでフィールド区切りを指定できる。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・所有者rw、グループr、その他---に設定する", "choices": ["chmod 660 report", "chmod 600 report", "chmod 640 report", "chmod 644 report"], "answer": 2, "explain": "640はu=rw,g=r,o=---を表す。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・sharedで新規作成される項目にグループを継承させる", "choices": ["chmod u+s shared", "chmod g+s shared", "chmod +t shared", "chmod o+s shared"], "answer": 1, "explain": "ディレクトリのsetgidはグループ継承に用いる。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・共有ディレクトリで他人のファイル削除を制限する", "choices": ["chmod +t /sharedtmp", "chmod 777 /sharedtmp", "chmod u+s /sharedtmp", "chmod g+s /sharedtmp"], "answer": 0, "explain": "sticky bitは/tmpのような共有領域で使われる。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・sourceへのハードリンクを作成する", "choices": ["link -s source hardlink", "ln -s source hardlink", "cp source hardlink", "ln source hardlink"], "answer": 3, "explain": "lnの通常形式はハードリンクを作成する。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・別の場所にあるファイルへのシンボリックリンクを作成する", "choices": ["cp -s /opt/app/bin/tool ~/bin/tool", "ln /opt/app/bin/tool ~/bin/tool", "link /opt/app/bin/tool ~/bin/tool", "ln -s /opt/app/bin/tool ~/bin/tool"], "answer": 3, "explain": "-sを付けるとシンボリックリンクを作成する。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・マウント済みファイルシステムの使用量を人間が読みやすい単位で表示する", "choices": ["df -h", "lsblk -h", "du -h", "free -h"], "answer": 0, "explain": "dfはファイルシステム単位の空き容量確認に使う。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・/var/log全体の使用量を要約表示する", "choices": ["ls -lh /var/log", "free -h /var/log", "du -sh /var/log", "df -h /var/log"], "answer": 2, "explain": "duはディレクトリ内容の使用量を集計する。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・デバイスを読み取り専用でマウントする", "choices": ["umount -o ro /mnt", "fsck -o ro /dev/sdb1", "mount -o rw /dev/sdb1 /mnt", "mount -o ro /dev/sdb1 /mnt"], "answer": 3, "explain": "roはread-onlyマウントオプションである。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・/mntにマウントされたファイルシステムを解除する", "choices": ["fsck /mnt", "swapoff /mnt", "mount /mnt", "umount /mnt"], "answer": 3, "explain": "umountはマウントポイントまたはデバイスを指定できる。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・swapパーティションを有効化する", "choices": ["swapon /dev/sdb2", "swapoff /dev/sdb2", "mount /dev/sdb2", "mkswapoff /dev/sdb2"], "answer": 0, "explain": "swaponはスワップ領域を有効化する。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・パーティションをswap領域として初期化する", "choices": ["mkfs.swap /dev/sdb2", "swapon -f /dev/sdb2", "fsck.swap /dev/sdb2", "mkswap /dev/sdb2"], "answer": 3, "explain": "mkswapでスワップ用の署名を作成する。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・永続的なマウント設定を記述するファイル", "choices": ["/etc/mtab", "/etc/fstab", "/proc/mounts", "/etc/passwd"], "answer": 1, "explain": "fstabは起動時などのマウント設定に使う。"},
{"category": "第1部：コマンド演習", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・カーネルが認識する現在のマウント情報を参照する", "choices": ["/etc/fstab", "/proc/cpuinfo", "/proc/mounts", "/etc/mtab"], "answer": 2, "explain": "procfs内のmountsには現在のマウント情報がある。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・PCIデバイスの情報を一覧表示する", "choices": ["lsusb", "lspci", "blkid", "lsmod"], "answer": 1, "explain": "PCIバス上のデバイス確認には lspci を使う。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・USBデバイスの情報を一覧表示する", "choices": ["lspci", "lsblk", "lsusb", "uname"], "answer": 2, "explain": "USB機器の列挙には lsusb を使う。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・現在ロード済みのカーネルモジュールを表示する", "choices": ["depmod", "modinfo", "lsmod", "modprobe"], "answer": 2, "explain": "lsmod はロード済みモジュールの一覧を表示する。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・モジュール e1000e の詳細情報を確認する", "choices": ["modinfo e1000e", "depmod e1000e", "modprobe e1000e", "lsmod e1000e"], "answer": 0, "explain": "modinfo はモジュールの説明や依存関係を表示する。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・ロード済みモジュール e1000e を依存関係を考慮して外す", "choices": ["modprobe -r e1000e", "lsmod -r e1000e", "modinfo -r e1000e", "rmmod -a e1000e"], "answer": 0, "explain": "modprobe -r はモジュールの取り外しに使える。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・現在の起動に限ったジャーナルを確認する", "choices": ["dmesg -w", "systemctl -b", "journalctl -f", "journalctl -b"], "answer": 3, "explain": "journalctl の -b は起動単位で絞り込む。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・カーネルリングバッファのメッセージを確認する", "choices": ["dmesg", "syslog", "uptime", "logger"], "answer": 0, "explain": "dmesg はカーネルの出力確認に適する。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・systemd環境で再起動を要求する", "choices": ["systemctl isolate", "systemctl reboot", "systemctl reload", "systemctl enable"], "answer": 1, "explain": "reboot サブコマンドは再起動を要求する。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・systemd環境で電源断を要求する", "choices": ["systemctl reset-failed", "systemctl mask", "systemctl daemon-reload", "systemctl poweroff"], "answer": 3, "explain": "poweroff は電源断を実行する。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・救援用ターゲットへ切り替える", "choices": ["systemctl stop rescue.target", "systemctl enable rescue.target", "systemctl isolate rescue.target", "systemctl reload rescue.target"], "answer": 2, "explain": "isolate は指定ターゲットへ切り替える。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・カーネルが公開するデバイスやドライバ情報を参照する仮想ファイルシステム", "choices": ["/srv", "/tmp", "/sys", "/opt"], "answer": 2, "explain": "sysfs は通常 /sys にマウントされる。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・デバイス検出に応じて /dev のデバイスノードを管理する仕組み", "choices": ["syslog", "udev", "cron", "atd"], "answer": 1, "explain": "udev は動的デバイス管理を担う。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・実ルートをマウントする前に必要なドライバ等を提供する初期RAMファイルシステム", "choices": ["initramfs", "MBR", "swap", "ESP"], "answer": 0, "explain": "initramfs は起動初期に利用される。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・EFI System Partition 上のブートローダーを利用できるファームウェア方式", "choices": ["XFS", "UEFI", "SysVinit", "ext4"], "answer": 1, "explain": "UEFIではESPを用いる構成が一般的である。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・Linuxカーネルを選択・起動する代表的なブートローダー", "choices": ["udev", "systemd", "GRUB", "cron"], "answer": 2, "explain": "GRUBはカーネル引数を渡して起動できる。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・ディスクのパーティションテーブルを一覧表示する", "choices": ["free -l", "fdisk -l", "du -l", "df -l"], "answer": 1, "explain": "fdisk -l はパーティション情報の表示に使う。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・ブロックデバイスのツリー表示を行う", "choices": ["lsblk", "lspci", "lsmod", "lsusb"], "answer": 0, "explain": "lsblk はディスク・パーティション・LVM等を見やすく表示する。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・ブロックデバイスのUUIDやファイルシステム種別を調べる", "choices": ["file", "stat", "id", "blkid"], "answer": 3, "explain": "blkid はUUID指定のfstab作成時にも有用である。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・未使用パーティション /dev/sdb1 にext4ファイルシステムを作成する", "choices": ["fsck.ext4 /dev/sdb1", "fdisk /dev/sdb1", "mount /dev/sdb1", "mkfs.ext4 /dev/sdb1"], "answer": 3, "explain": "mkfs.ext4 はext4ファイルシステムを新規作成する。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・アンマウント済みext4ファイルシステムを検査・修復する", "choices": ["fsck.ext4 /dev/sdb1", "resize2fs /dev/sdb1", "xfs_growfs /dev/sdb1", "mount -o repair /dev/sdb1"], "answer": 0, "explain": "ext系の検査にはfsck.ext4を使用できる。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・アンマウント済みXFSファイルシステムを修復する", "choices": ["fsck.ext4 /dev/sdb1", "xfs_growfs /dev/sdb1", "xfs_repair /dev/sdb1", "tune2fs /dev/sdb1"], "answer": 2, "explain": "XFSの修復にはxfs_repairを使う。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・マウント済みXFSを拡張する", "choices": ["fsck.xfs /data", "resize2fs /data", "xfs_repair /data", "xfs_growfs /data"], "answer": 3, "explain": "XFSは縮小できないが、マウント中に拡張できる。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・拡張済みのext系ファイルシステムをサイズ変更する", "choices": ["fdisk /dev/sdb1", "fsck /dev/sdb1", "xfs_growfs /dev/sdb1", "resize2fs /dev/sdb1"], "answer": 3, "explain": "resize2fs はext2/3/4向けである。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・fstabに記述された未マウント項目をまとめてマウントする", "choices": ["fsck -a", "swapon -a", "umount -a", "mount -a"], "answer": 3, "explain": "mount -a はfstabの検証にも利用される。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・デバイス名の変更に影響されにくいfstabでのデバイス指定方法", "choices": ["UID", "inode", "UUID", "PID"], "answer": 2, "explain": "UUIDはファイルシステムを一意に識別する。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・インストール済みRPMパッケージを一覧表示する", "choices": ["rpm -e", "rpm -qf", "rpm -qa", "rpm -V"], "answer": 2, "explain": "rpm -qa は全インストール済みパッケージを照会する。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・指定ファイルを所有するRPMパッケージを調べる", "choices": ["rpm -e /usr/bin/ssh", "rpm -U /usr/bin/ssh", "rpm -ql /usr/bin/ssh", "rpm -qf /usr/bin/ssh"], "answer": 3, "explain": "rpm -qf はファイルからパッケージを逆引きする。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・RPMパッケージに含まれるファイルを一覧表示する", "choices": ["rpm -ql openssh-clients", "rpm -e openssh-clients", "rpm -Va openssh-clients", "rpm -qf openssh-clients"], "answer": 0, "explain": "rpm -ql はインストール済みパッケージのファイル一覧を表示する。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・RPMパッケージ nano を削除する", "choices": ["rpm -q nano", "rpm -V nano", "rpm -e nano", "rpm -i nano"], "answer": 2, "explain": "rpm -e はアンインストールに使う。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・RPMファイルをインストールまたは更新する", "choices": ["rpm -Uvh pkg.rpm", "rpm -q pkg.rpm", "rpm -V pkg.rpm", "rpm -e pkg.rpm"], "answer": 0, "explain": "-Uはupgrade/install、-vと-hは進捗表示に使われる。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・DNFでhttpdパッケージをインストールする", "choices": ["dnf clean httpd", "dnf info httpd", "dnf install httpd", "dnf erase httpd"], "answer": 2, "explain": "dnf install はリポジトリからパッケージを導入する。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・DNFでhttpdパッケージを削除する", "choices": ["dnf check-update httpd", "dnf install httpd", "dnf remove httpd", "dnf list httpd"], "answer": 2, "explain": "removeはインストール済みパッケージを削除する。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・DNFのパッケージグループを導入する", "choices": ["dnf group remove all", "dnf group info install", "dnf install group", "dnf group install \"Development Tools\""], "answer": 3, "explain": "group installでグループ単位の導入ができる。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・APTのパッケージ一覧情報を更新する", "choices": ["apt remove", "apt show", "apt update", "apt upgrade"], "answer": 2, "explain": "apt updateだけでは通常パッケージ本体は更新しない。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・APTで更新可能なインストール済みパッケージを更新する", "choices": ["apt search", "apt update", "apt upgrade", "apt purge"], "answer": 2, "explain": "update後にupgradeを実行してパッケージを更新する。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・APTでtreeパッケージをインストールする", "choices": ["apt remove tree", "apt install tree", "apt list tree", "apt update tree"], "answer": 1, "explain": "installはパッケージの導入を行う。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・APTでtreeパッケージを削除する", "choices": ["apt update tree", "apt install tree", "apt policy tree", "apt remove tree"], "answer": 3, "explain": "removeは設定ファイルを残す場合がある。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・指定ファイルを所有するDebianパッケージを調べる", "choices": ["dpkg -S /bin/ls", "dpkg -i /bin/ls", "dpkg -r /bin/ls", "dpkg -L /bin/ls"], "answer": 0, "explain": "dpkg -S はファイルから所有パッケージを照会する。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・Debianパッケージcoreutilsに含まれるファイルを一覧表示する", "choices": ["dpkg -i coreutils", "dpkg -L coreutils", "dpkg -S coreutils", "dpkg -r coreutils"], "answer": 1, "explain": "dpkg -L はパッケージからファイルを調べる。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・ローカルのDebianパッケージファイルをインストールする", "choices": ["dpkg -S pkg.deb", "dpkg -r pkg.deb", "dpkg -L pkg.deb", "dpkg -i pkg.deb"], "answer": 3, "explain": "dpkg -i はdebファイルを導入する。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・/var/log配下の通常ファイルで7日未満前に更新されたものを探す", "choices": ["locate -mtime -7", "grep -r -7 /var/log", "find /var/log -type f -mtime -7", "find /var/log -type d -mtime 7"], "answer": 2, "explain": "findの-typeと-mtimeで条件指定する。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・カレントディレクトリ以下のシンボリックリンクを検索する", "choices": ["find . -type b", "find . -type d", "find . -type l", "find . -type f"], "answer": 2, "explain": "findの-type lはシンボリックリンクを表す。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・大文字・小文字を区別せずerrorを含む行を抽出する", "choices": ["grep -v error app.log", "grep -c error app.log", "grep -i error app.log", "grep -n error app.log"], "answer": 2, "explain": "-iは大文字・小文字を区別しない。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・コメント行を除外して表示する", "choices": ["grep -v '^#' config", "grep '^#' config", "grep -i '^#' config", "grep -c '^#' config"], "answer": 0, "explain": "-vは一致しない行を出力する。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・passwdからユーザー名とログインシェルを取り出す", "choices": ["cut -d: -f1,7 /etc/passwd", "cut -d: -f2-6 /etc/passwd", "cut -d: -f3 /etc/passwd", "cut -f1 /etc/passwd"], "answer": 0, "explain": "区切り文字指定に-d、フィールド指定に-fを使う。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・数値として行をソートする", "choices": ["sort -r numbers.txt", "sort -u numbers.txt", "sort -n numbers.txt", "sort -k numbers.txt"], "answer": 2, "explain": "-nは数値順での比較を指定する。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・重複行を取り除いてソートする", "choices": ["sort -n names.txt", "sort -u names.txt", "sort -k names.txt", "sort -r names.txt"], "answer": 1, "explain": "-uは同一行を一つにまとめる。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・連続する重複行を数えて表示する", "choices": ["uniq -d names.txt", "uniq -u names.txt", "sort -c names.txt", "uniq -c names.txt"], "answer": 3, "explain": "uniq -cは出現回数を先頭に表示する。通常は事前にsortする。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・ファイルの行数を数える", "choices": ["wc -m access.log", "wc -c access.log", "wc -l access.log", "wc -w access.log"], "answer": 2, "explain": "-lは行数を出力する。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・先頭20行を表示する", "choices": ["tail -n 20 file", "less -n 20 file", "head -c 20 file", "head -n 20 file"], "answer": 3, "explain": "headの-nで表示行数を指定する。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・追記されるログを継続監視する", "choices": ["less -f /var/log/messages", "tail -f /var/log/messages", "tail -n /var/log/messages", "head -f /var/log/messages"], "answer": 1, "explain": "-fはファイル末尾への追記を追いかける。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・gzip圧縮tarアーカイブを展開する", "choices": ["tar -czf backup.tar.gz", "gzip -r backup.tar.gz", "tar -tf backup.tar.gz", "tar -xzf backup.tar.gz"], "answer": 3, "explain": "-xは展開、-zはgzip、-fはファイル指定である。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・dataをgzip圧縮tarアーカイブに作成する", "choices": ["tar -tzf backup.tar.gz", "tar -czf backup.tar.gz data", "cpio -czf backup.tar.gz", "tar -xzf backup.tar.gz"], "answer": 1, "explain": "-cは作成、-zはgzip圧縮を指定する。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・各行のfooをすべてbarへ置換して出力する", "choices": ["sed 's/foo/bar/g' file", "sed '/foo/d' file", "sed 's/foo/bar/1' file", "sed -n 'foo' file"], "answer": 0, "explain": "sコマンドは置換、gは行内の全一致を対象とする。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・コロン区切りの第1フィールドを表示する", "choices": ["grep '$1' /etc/passwd", "awk -F: '{print $1}' /etc/passwd", "awk '{print $1}' /etc/passwd", "cut -f1 /etc/passwd"], "answer": 1, "explain": "-Fでフィールド区切りを指定できる。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・所有者rw、グループr、その他---に設定する", "choices": ["chmod 600 report", "chmod 640 report", "chmod 644 report", "chmod 660 report"], "answer": 1, "explain": "640はu=rw,g=r,o=---を表す。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・sharedで新規作成される項目にグループを継承させる", "choices": ["chmod u+s shared", "chmod o+s shared", "chmod +t shared", "chmod g+s shared"], "answer": 3, "explain": "ディレクトリのsetgidはグループ継承に用いる。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・共有ディレクトリで他人のファイル削除を制限する", "choices": ["chmod u+s /sharedtmp", "chmod +t /sharedtmp", "chmod g+s /sharedtmp", "chmod 777 /sharedtmp"], "answer": 1, "explain": "sticky bitは/tmpのような共有領域で使われる。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・sourceへのハードリンクを作成する", "choices": ["cp source hardlink", "ln source hardlink", "link -s source hardlink", "ln -s source hardlink"], "answer": 1, "explain": "lnの通常形式はハードリンクを作成する。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・別の場所にあるファイルへのシンボリックリンクを作成する", "choices": ["link /opt/app/bin/tool ~/bin/tool", "cp -s /opt/app/bin/tool ~/bin/tool", "ln /opt/app/bin/tool ~/bin/tool", "ln -s /opt/app/bin/tool ~/bin/tool"], "answer": 3, "explain": "-sを付けるとシンボリックリンクを作成する。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・マウント済みファイルシステムの使用量を人間が読みやすい単位で表示する", "choices": ["du -h", "free -h", "df -h", "lsblk -h"], "answer": 2, "explain": "dfはファイルシステム単位の空き容量確認に使う。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・/var/log全体の使用量を要約表示する", "choices": ["ls -lh /var/log", "free -h /var/log", "du -sh /var/log", "df -h /var/log"], "answer": 2, "explain": "duはディレクトリ内容の使用量を集計する。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・デバイスを読み取り専用でマウントする", "choices": ["umount -o ro /mnt", "mount -o ro /dev/sdb1 /mnt", "mount -o rw /dev/sdb1 /mnt", "fsck -o ro /dev/sdb1"], "answer": 1, "explain": "roはread-onlyマウントオプションである。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・/mntにマウントされたファイルシステムを解除する", "choices": ["mount /mnt", "umount /mnt", "fsck /mnt", "swapoff /mnt"], "answer": 1, "explain": "umountはマウントポイントまたはデバイスを指定できる。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・swapパーティションを有効化する", "choices": ["mount /dev/sdb2", "mkswapoff /dev/sdb2", "swapoff /dev/sdb2", "swapon /dev/sdb2"], "answer": 3, "explain": "swaponはスワップ領域を有効化する。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・パーティションをswap領域として初期化する", "choices": ["fsck.swap /dev/sdb2", "swapon -f /dev/sdb2", "mkfs.swap /dev/sdb2", "mkswap /dev/sdb2"], "answer": 3, "explain": "mkswapでスワップ用の署名を作成する。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・永続的なマウント設定を記述するファイル", "choices": ["/proc/mounts", "/etc/passwd", "/etc/mtab", "/etc/fstab"], "answer": 3, "explain": "fstabは起動時などのマウント設定に使う。"},
{"category": "第1部：コマンド演習", "question": "次の説明と一致するコマンドまたは用語を選んでください。\n・カーネルが認識する現在のマウント情報を参照する", "choices": ["/etc/fstab", "/etc/mtab", "/proc/mounts", "/proc/cpuinfo"], "answer": 2, "explain": "procfs内のmountsには現在のマウント情報がある。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・PCIデバイスの情報を一覧表示する", "choices": ["blkid", "lsmod", "lspci", "lsusb"], "answer": 2, "explain": "PCIバス上のデバイス確認には lspci を使う。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・USBデバイスの情報を一覧表示する", "choices": ["lsblk", "lsusb", "lspci", "uname"], "answer": 1, "explain": "USB機器の列挙には lsusb を使う。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・現在ロード済みのカーネルモジュールを表示する", "choices": ["depmod", "modprobe", "modinfo", "lsmod"], "answer": 3, "explain": "lsmod はロード済みモジュールの一覧を表示する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・モジュール e1000e の詳細情報を確認する", "choices": ["lsmod e1000e", "modinfo e1000e", "depmod e1000e", "modprobe e1000e"], "answer": 1, "explain": "modinfo はモジュールの説明や依存関係を表示する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・ロード済みモジュール e1000e を依存関係を考慮して外す", "choices": ["modprobe -r e1000e", "rmmod -a e1000e", "modinfo -r e1000e", "lsmod -r e1000e"], "answer": 0, "explain": "modprobe -r はモジュールの取り外しに使える。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・現在の起動に限ったジャーナルを確認する", "choices": ["systemctl -b", "journalctl -b", "dmesg -w", "journalctl -f"], "answer": 1, "explain": "journalctl の -b は起動単位で絞り込む。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・カーネルリングバッファのメッセージを確認する", "choices": ["syslog", "uptime", "logger", "dmesg"], "answer": 3, "explain": "dmesg はカーネルの出力確認に適する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・systemd環境で再起動を要求する", "choices": ["systemctl reboot", "systemctl reload", "systemctl enable", "systemctl isolate"], "answer": 0, "explain": "reboot サブコマンドは再起動を要求する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・systemd環境で電源断を要求する", "choices": ["systemctl poweroff", "systemctl mask", "systemctl reset-failed", "systemctl daemon-reload"], "answer": 0, "explain": "poweroff は電源断を実行する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・救援用ターゲットへ切り替える", "choices": ["systemctl enable rescue.target", "systemctl isolate rescue.target", "systemctl reload rescue.target", "systemctl stop rescue.target"], "answer": 1, "explain": "isolate は指定ターゲットへ切り替える。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・カーネルが公開するデバイスやドライバ情報を参照する仮想ファイルシステム", "choices": ["/opt", "/srv", "/tmp", "/sys"], "answer": 3, "explain": "sysfs は通常 /sys にマウントされる。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・デバイス検出に応じて /dev のデバイスノードを管理する仕組み", "choices": ["syslog", "cron", "atd", "udev"], "answer": 3, "explain": "udev は動的デバイス管理を担う。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・実ルートをマウントする前に必要なドライバ等を提供する初期RAMファイルシステム", "choices": ["initramfs", "ESP", "MBR", "swap"], "answer": 0, "explain": "initramfs は起動初期に利用される。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・EFI System Partition 上のブートローダーを利用できるファームウェア方式", "choices": ["UEFI", "ext4", "XFS", "SysVinit"], "answer": 0, "explain": "UEFIではESPを用いる構成が一般的である。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・Linuxカーネルを選択・起動する代表的なブートローダー", "choices": ["cron", "systemd", "GRUB", "udev"], "answer": 2, "explain": "GRUBはカーネル引数を渡して起動できる。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・ディスクのパーティションテーブルを一覧表示する", "choices": ["fdisk -l", "du -l", "free -l", "df -l"], "answer": 0, "explain": "fdisk -l はパーティション情報の表示に使う。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・ブロックデバイスのツリー表示を行う", "choices": ["lsusb", "lspci", "lsmod", "lsblk"], "answer": 3, "explain": "lsblk はディスク・パーティション・LVM等を見やすく表示する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・ブロックデバイスのUUIDやファイルシステム種別を調べる", "choices": ["blkid", "stat", "file", "id"], "answer": 0, "explain": "blkid はUUID指定のfstab作成時にも有用である。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・未使用パーティション /dev/sdb1 にext4ファイルシステムを作成する", "choices": ["fsck.ext4 /dev/sdb1", "mount /dev/sdb1", "mkfs.ext4 /dev/sdb1", "fdisk /dev/sdb1"], "answer": 2, "explain": "mkfs.ext4 はext4ファイルシステムを新規作成する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・アンマウント済みext4ファイルシステムを検査・修復する", "choices": ["xfs_growfs /dev/sdb1", "fsck.ext4 /dev/sdb1", "mount -o repair /dev/sdb1", "resize2fs /dev/sdb1"], "answer": 1, "explain": "ext系の検査にはfsck.ext4を使用できる。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・アンマウント済みXFSファイルシステムを修復する", "choices": ["xfs_repair /dev/sdb1", "xfs_growfs /dev/sdb1", "fsck.ext4 /dev/sdb1", "tune2fs /dev/sdb1"], "answer": 0, "explain": "XFSの修復にはxfs_repairを使う。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・マウント済みXFSを拡張する", "choices": ["xfs_repair /data", "resize2fs /data", "xfs_growfs /data", "fsck.xfs /data"], "answer": 2, "explain": "XFSは縮小できないが、マウント中に拡張できる。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・拡張済みのext系ファイルシステムをサイズ変更する", "choices": ["resize2fs /dev/sdb1", "xfs_growfs /dev/sdb1", "fsck /dev/sdb1", "fdisk /dev/sdb1"], "answer": 0, "explain": "resize2fs はext2/3/4向けである。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・fstabに記述された未マウント項目をまとめてマウントする", "choices": ["umount -a", "fsck -a", "swapon -a", "mount -a"], "answer": 3, "explain": "mount -a はfstabの検証にも利用される。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・デバイス名の変更に影響されにくいfstabでのデバイス指定方法", "choices": ["UUID", "PID", "UID", "inode"], "answer": 0, "explain": "UUIDはファイルシステムを一意に識別する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・インストール済みRPMパッケージを一覧表示する", "choices": ["rpm -qa", "rpm -qf", "rpm -V", "rpm -e"], "answer": 0, "explain": "rpm -qa は全インストール済みパッケージを照会する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・指定ファイルを所有するRPMパッケージを調べる", "choices": ["rpm -e /usr/bin/ssh", "rpm -U /usr/bin/ssh", "rpm -ql /usr/bin/ssh", "rpm -qf /usr/bin/ssh"], "answer": 3, "explain": "rpm -qf はファイルからパッケージを逆引きする。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・RPMパッケージに含まれるファイルを一覧表示する", "choices": ["rpm -ql openssh-clients", "rpm -Va openssh-clients", "rpm -qf openssh-clients", "rpm -e openssh-clients"], "answer": 0, "explain": "rpm -ql はインストール済みパッケージのファイル一覧を表示する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・RPMパッケージ nano を削除する", "choices": ["rpm -q nano", "rpm -e nano", "rpm -V nano", "rpm -i nano"], "answer": 1, "explain": "rpm -e はアンインストールに使う。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・RPMファイルをインストールまたは更新する", "choices": ["rpm -e pkg.rpm", "rpm -q pkg.rpm", "rpm -Uvh pkg.rpm", "rpm -V pkg.rpm"], "answer": 2, "explain": "-Uはupgrade/install、-vと-hは進捗表示に使われる。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・DNFでhttpdパッケージをインストールする", "choices": ["dnf info httpd", "dnf install httpd", "dnf clean httpd", "dnf erase httpd"], "answer": 1, "explain": "dnf install はリポジトリからパッケージを導入する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・DNFでhttpdパッケージを削除する", "choices": ["dnf list httpd", "dnf remove httpd", "dnf check-update httpd", "dnf install httpd"], "answer": 1, "explain": "removeはインストール済みパッケージを削除する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・DNFのパッケージグループを導入する", "choices": ["dnf group info install", "dnf install group", "dnf group remove all", "dnf group install \"Development Tools\""], "answer": 3, "explain": "group installでグループ単位の導入ができる。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・APTのパッケージ一覧情報を更新する", "choices": ["apt upgrade", "apt remove", "apt show", "apt update"], "answer": 3, "explain": "apt updateだけでは通常パッケージ本体は更新しない。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・APTで更新可能なインストール済みパッケージを更新する", "choices": ["apt search", "apt upgrade", "apt update", "apt purge"], "answer": 1, "explain": "update後にupgradeを実行してパッケージを更新する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・APTでtreeパッケージをインストールする", "choices": ["apt install tree", "apt remove tree", "apt list tree", "apt update tree"], "answer": 0, "explain": "installはパッケージの導入を行う。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・APTでtreeパッケージを削除する", "choices": ["apt install tree", "apt remove tree", "apt update tree", "apt policy tree"], "answer": 1, "explain": "removeは設定ファイルを残す場合がある。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・指定ファイルを所有するDebianパッケージを調べる", "choices": ["dpkg -L /bin/ls", "dpkg -i /bin/ls", "dpkg -S /bin/ls", "dpkg -r /bin/ls"], "answer": 2, "explain": "dpkg -S はファイルから所有パッケージを照会する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・Debianパッケージcoreutilsに含まれるファイルを一覧表示する", "choices": ["dpkg -r coreutils", "dpkg -L coreutils", "dpkg -i coreutils", "dpkg -S coreutils"], "answer": 1, "explain": "dpkg -L はパッケージからファイルを調べる。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・ローカルのDebianパッケージファイルをインストールする", "choices": ["dpkg -r pkg.deb", "dpkg -S pkg.deb", "dpkg -i pkg.deb", "dpkg -L pkg.deb"], "answer": 2, "explain": "dpkg -i はdebファイルを導入する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・/var/log配下の通常ファイルで7日未満前に更新されたものを探す", "choices": ["find /var/log -type d -mtime 7", "locate -mtime -7", "find /var/log -type f -mtime -7", "grep -r -7 /var/log"], "answer": 2, "explain": "findの-typeと-mtimeで条件指定する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・カレントディレクトリ以下のシンボリックリンクを検索する", "choices": ["find . -type f", "find . -type d", "find . -type l", "find . -type b"], "answer": 2, "explain": "findの-type lはシンボリックリンクを表す。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・大文字・小文字を区別せずerrorを含む行を抽出する", "choices": ["grep -i error app.log", "grep -c error app.log", "grep -n error app.log", "grep -v error app.log"], "answer": 0, "explain": "-iは大文字・小文字を区別しない。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・コメント行を除外して表示する", "choices": ["grep -c '^#' config", "grep -i '^#' config", "grep '^#' config", "grep -v '^#' config"], "answer": 3, "explain": "-vは一致しない行を出力する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・passwdからユーザー名とログインシェルを取り出す", "choices": ["cut -d: -f1,7 /etc/passwd", "cut -f1 /etc/passwd", "cut -d: -f3 /etc/passwd", "cut -d: -f2-6 /etc/passwd"], "answer": 0, "explain": "区切り文字指定に-d、フィールド指定に-fを使う。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・数値として行をソートする", "choices": ["sort -u numbers.txt", "sort -r numbers.txt", "sort -n numbers.txt", "sort -k numbers.txt"], "answer": 2, "explain": "-nは数値順での比較を指定する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・重複行を取り除いてソートする", "choices": ["sort -u names.txt", "sort -n names.txt", "sort -r names.txt", "sort -k names.txt"], "answer": 0, "explain": "-uは同一行を一つにまとめる。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・連続する重複行を数えて表示する", "choices": ["uniq -u names.txt", "uniq -d names.txt", "sort -c names.txt", "uniq -c names.txt"], "answer": 3, "explain": "uniq -cは出現回数を先頭に表示する。通常は事前にsortする。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・ファイルの行数を数える", "choices": ["wc -l access.log", "wc -w access.log", "wc -m access.log", "wc -c access.log"], "answer": 0, "explain": "-lは行数を出力する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・先頭20行を表示する", "choices": ["tail -n 20 file", "head -n 20 file", "less -n 20 file", "head -c 20 file"], "answer": 1, "explain": "headの-nで表示行数を指定する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・追記されるログを継続監視する", "choices": ["tail -n /var/log/messages", "head -f /var/log/messages", "tail -f /var/log/messages", "less -f /var/log/messages"], "answer": 2, "explain": "-fはファイル末尾への追記を追いかける。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・gzip圧縮tarアーカイブを展開する", "choices": ["gzip -r backup.tar.gz", "tar -czf backup.tar.gz", "tar -tf backup.tar.gz", "tar -xzf backup.tar.gz"], "answer": 3, "explain": "-xは展開、-zはgzip、-fはファイル指定である。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・dataをgzip圧縮tarアーカイブに作成する", "choices": ["cpio -czf backup.tar.gz", "tar -tzf backup.tar.gz", "tar -czf backup.tar.gz data", "tar -xzf backup.tar.gz"], "answer": 2, "explain": "-cは作成、-zはgzip圧縮を指定する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・各行のfooをすべてbarへ置換して出力する", "choices": ["sed 's/foo/bar/1' file", "sed '/foo/d' file", "sed -n 'foo' file", "sed 's/foo/bar/g' file"], "answer": 3, "explain": "sコマンドは置換、gは行内の全一致を対象とする。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・コロン区切りの第1フィールドを表示する", "choices": ["awk '{print $1}' /etc/passwd", "awk -F: '{print $1}' /etc/passwd", "grep '$1' /etc/passwd", "cut -f1 /etc/passwd"], "answer": 1, "explain": "-Fでフィールド区切りを指定できる。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・所有者rw、グループr、その他---に設定する", "choices": ["chmod 600 report", "chmod 644 report", "chmod 640 report", "chmod 660 report"], "answer": 2, "explain": "640はu=rw,g=r,o=---を表す。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・sharedで新規作成される項目にグループを継承させる", "choices": ["chmod +t shared", "chmod o+s shared", "chmod g+s shared", "chmod u+s shared"], "answer": 2, "explain": "ディレクトリのsetgidはグループ継承に用いる。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・共有ディレクトリで他人のファイル削除を制限する", "choices": ["chmod u+s /sharedtmp", "chmod 777 /sharedtmp", "chmod g+s /sharedtmp", "chmod +t /sharedtmp"], "answer": 3, "explain": "sticky bitは/tmpのような共有領域で使われる。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・sourceへのハードリンクを作成する", "choices": ["link -s source hardlink", "cp source hardlink", "ln source hardlink", "ln -s source hardlink"], "answer": 2, "explain": "lnの通常形式はハードリンクを作成する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・別の場所にあるファイルへのシンボリックリンクを作成する", "choices": ["ln /opt/app/bin/tool ~/bin/tool", "ln -s /opt/app/bin/tool ~/bin/tool", "cp -s /opt/app/bin/tool ~/bin/tool", "link /opt/app/bin/tool ~/bin/tool"], "answer": 1, "explain": "-sを付けるとシンボリックリンクを作成する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・マウント済みファイルシステムの使用量を人間が読みやすい単位で表示する", "choices": ["lsblk -h", "du -h", "df -h", "free -h"], "answer": 2, "explain": "dfはファイルシステム単位の空き容量確認に使う。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・/var/log全体の使用量を要約表示する", "choices": ["df -h /var/log", "du -sh /var/log", "free -h /var/log", "ls -lh /var/log"], "answer": 1, "explain": "duはディレクトリ内容の使用量を集計する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・デバイスを読み取り専用でマウントする", "choices": ["mount -o rw /dev/sdb1 /mnt", "fsck -o ro /dev/sdb1", "mount -o ro /dev/sdb1 /mnt", "umount -o ro /mnt"], "answer": 2, "explain": "roはread-onlyマウントオプションである。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・/mntにマウントされたファイルシステムを解除する", "choices": ["mount /mnt", "swapoff /mnt", "fsck /mnt", "umount /mnt"], "answer": 3, "explain": "umountはマウントポイントまたはデバイスを指定できる。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・swapパーティションを有効化する", "choices": ["swapon /dev/sdb2", "mount /dev/sdb2", "swapoff /dev/sdb2", "mkswapoff /dev/sdb2"], "answer": 0, "explain": "swaponはスワップ領域を有効化する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・パーティションをswap領域として初期化する", "choices": ["mkswap /dev/sdb2", "mkfs.swap /dev/sdb2", "fsck.swap /dev/sdb2", "swapon -f /dev/sdb2"], "answer": 0, "explain": "mkswapでスワップ用の署名を作成する。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・永続的なマウント設定を記述するファイル", "choices": ["/etc/mtab", "/etc/passwd", "/etc/fstab", "/proc/mounts"], "answer": 2, "explain": "fstabは起動時などのマウント設定に使う。"},
{"category": "第1部：コマンド演習", "question": "次の作業を行うコマンドまたは用語として最も適切なものはどれですか。\n・カーネルが認識する現在のマウント情報を参照する", "choices": ["/etc/fstab", "/proc/cpuinfo", "/proc/mounts", "/etc/mtab"], "answer": 2, "explain": "procfs内のmountsには現在のマウント情報がある。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・PCIデバイスの情報を一覧表示する", "choices": ["lsmod", "lspci", "lsusb", "blkid"], "answer": 1, "explain": "PCIバス上のデバイス確認には lspci を使う。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・USBデバイスの情報を一覧表示する", "choices": ["lspci", "lsblk", "lsusb", "uname"], "answer": 2, "explain": "USB機器の列挙には lsusb を使う。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・現在ロード済みのカーネルモジュールを表示する", "choices": ["modinfo", "lsmod", "modprobe", "depmod"], "answer": 1, "explain": "lsmod はロード済みモジュールの一覧を表示する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・モジュール e1000e の詳細情報を確認する", "choices": ["depmod e1000e", "lsmod e1000e", "modprobe e1000e", "modinfo e1000e"], "answer": 3, "explain": "modinfo はモジュールの説明や依存関係を表示する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・ロード済みモジュール e1000e を依存関係を考慮して外す", "choices": ["rmmod -a e1000e", "lsmod -r e1000e", "modprobe -r e1000e", "modinfo -r e1000e"], "answer": 2, "explain": "modprobe -r はモジュールの取り外しに使える。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・現在の起動に限ったジャーナルを確認する", "choices": ["journalctl -f", "systemctl -b", "dmesg -w", "journalctl -b"], "answer": 3, "explain": "journalctl の -b は起動単位で絞り込む。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・カーネルリングバッファのメッセージを確認する", "choices": ["syslog", "uptime", "logger", "dmesg"], "answer": 3, "explain": "dmesg はカーネルの出力確認に適する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・systemd環境で再起動を要求する", "choices": ["systemctl reboot", "systemctl enable", "systemctl isolate", "systemctl reload"], "answer": 0, "explain": "reboot サブコマンドは再起動を要求する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・systemd環境で電源断を要求する", "choices": ["systemctl reset-failed", "systemctl daemon-reload", "systemctl mask", "systemctl poweroff"], "answer": 3, "explain": "poweroff は電源断を実行する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・救援用ターゲットへ切り替える", "choices": ["systemctl reload rescue.target", "systemctl enable rescue.target", "systemctl stop rescue.target", "systemctl isolate rescue.target"], "answer": 3, "explain": "isolate は指定ターゲットへ切り替える。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・カーネルが公開するデバイスやドライバ情報を参照する仮想ファイルシステム", "choices": ["/opt", "/tmp", "/sys", "/srv"], "answer": 2, "explain": "sysfs は通常 /sys にマウントされる。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・デバイス検出に応じて /dev のデバイスノードを管理する仕組み", "choices": ["cron", "atd", "udev", "syslog"], "answer": 2, "explain": "udev は動的デバイス管理を担う。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・実ルートをマウントする前に必要なドライバ等を提供する初期RAMファイルシステム", "choices": ["ESP", "MBR", "swap", "initramfs"], "answer": 3, "explain": "initramfs は起動初期に利用される。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・EFI System Partition 上のブートローダーを利用できるファームウェア方式", "choices": ["SysVinit", "ext4", "XFS", "UEFI"], "answer": 3, "explain": "UEFIではESPを用いる構成が一般的である。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・Linuxカーネルを選択・起動する代表的なブートローダー", "choices": ["cron", "udev", "systemd", "GRUB"], "answer": 3, "explain": "GRUBはカーネル引数を渡して起動できる。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・ディスクのパーティションテーブルを一覧表示する", "choices": ["free -l", "fdisk -l", "df -l", "du -l"], "answer": 1, "explain": "fdisk -l はパーティション情報の表示に使う。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・ブロックデバイスのツリー表示を行う", "choices": ["lsusb", "lsmod", "lsblk", "lspci"], "answer": 2, "explain": "lsblk はディスク・パーティション・LVM等を見やすく表示する。"},
{"category": "第1部：コマンド演習", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・ブロックデバイスのUUIDやファイルシステム種別を調べる", "choices": ["blkid", "file", "stat", "id"], "answer": 0, "explain": "blkid はUUID指定のfstab作成時にも有用である。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・未使用パーティション /dev/sdb1 にext4ファイルシステムを作成する", "choices": ["fsck.ext4 /dev/sdb1", "mount /dev/sdb1", "fdisk /dev/sdb1", "mkfs.ext4 /dev/sdb1"], "answer": 3, "explain": "mkfs.ext4 はext4ファイルシステムを新規作成する。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・アンマウント済みext4ファイルシステムを検査・修復する", "choices": ["mount -o repair /dev/sdb1", "xfs_growfs /dev/sdb1", "resize2fs /dev/sdb1", "fsck.ext4 /dev/sdb1"], "answer": 3, "explain": "ext系の検査にはfsck.ext4を使用できる。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・アンマウント済みXFSファイルシステムを修復する", "choices": ["xfs_growfs /dev/sdb1", "fsck.ext4 /dev/sdb1", "xfs_repair /dev/sdb1", "tune2fs /dev/sdb1"], "answer": 2, "explain": "XFSの修復にはxfs_repairを使う。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・マウント済みXFSを拡張する", "choices": ["xfs_growfs /data", "resize2fs /data", "xfs_repair /data", "fsck.xfs /data"], "answer": 0, "explain": "XFSは縮小できないが、マウント中に拡張できる。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・拡張済みのext系ファイルシステムをサイズ変更する\n・ローカルのDebianパッケージファイルをインストールする", "choices": ["xfs_growfs /dev/sdb1", "dpkg -r pkg.deb", "dpkg -i pkg.deb", "resize2fs /dev/sdb1"], "answer": [3, 2], "explain": "resize2fs はext2/3/4向けである。 dpkg -i はdebファイルを導入する。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・fstabに記述された未マウント項目をまとめてマウントする", "choices": ["fsck -a", "umount -a", "swapon -a", "mount -a"], "answer": 3, "explain": "mount -a はfstabの検証にも利用される。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・デバイス名の変更に影響されにくいfstabでのデバイス指定方法", "choices": ["UID", "inode", "UUID", "PID"], "answer": 2, "explain": "UUIDはファイルシステムを一意に識別する。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・インストール済みRPMパッケージを一覧表示する", "choices": ["rpm -qa", "rpm -qf", "rpm -e", "rpm -V"], "answer": 0, "explain": "rpm -qa は全インストール済みパッケージを照会する。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・指定ファイルを所有するRPMパッケージを調べる", "choices": ["rpm -qf /usr/bin/ssh", "rpm -e /usr/bin/ssh", "rpm -ql /usr/bin/ssh", "rpm -U /usr/bin/ssh"], "answer": 0, "explain": "rpm -qf はファイルからパッケージを逆引きする。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・RPMパッケージに含まれるファイルを一覧表示する\n・passwdからユーザー名とログインシェルを取り出す", "choices": ["cut -d: -f2-6 /etc/passwd", "rpm -ql openssh-clients", "rpm -qf openssh-clients", "cut -d: -f1,7 /etc/passwd"], "answer": [1, 3], "explain": "rpm -ql はインストール済みパッケージのファイル一覧を表示する。 区切り文字指定に-d、フィールド指定に-fを使う。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・RPMパッケージ nano を削除する", "choices": ["rpm -e nano", "rpm -q nano", "rpm -V nano", "rpm -i nano"], "answer": 0, "explain": "rpm -e はアンインストールに使う。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・RPMファイルをインストールまたは更新する", "choices": ["rpm -e pkg.rpm", "rpm -Uvh pkg.rpm", "rpm -q pkg.rpm", "rpm -V pkg.rpm"], "answer": 1, "explain": "-Uはupgrade/install、-vと-hは進捗表示に使われる。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・DNFでhttpdパッケージをインストールする", "choices": ["dnf install httpd", "dnf erase httpd", "dnf info httpd", "dnf clean httpd"], "answer": 0, "explain": "dnf install はリポジトリからパッケージを導入する。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・DNFでhttpdパッケージを削除する", "choices": ["dnf remove httpd", "dnf install httpd", "dnf check-update httpd", "dnf list httpd"], "answer": 0, "explain": "removeはインストール済みパッケージを削除する。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・DNFのパッケージグループを導入する\n・先頭20行を表示する", "choices": ["tail -n 20 file", "dnf group install \"Development Tools\"", "head -n 20 file", "dnf group remove all"], "answer": [1, 2], "explain": "group installでグループ単位の導入ができる。 headの-nで表示行数を指定する。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・APTのパッケージ一覧情報を更新する", "choices": ["apt show", "apt remove", "apt upgrade", "apt update"], "answer": 3, "explain": "apt updateだけでは通常パッケージ本体は更新しない。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・APTで更新可能なインストール済みパッケージを更新する", "choices": ["apt search", "apt purge", "apt update", "apt upgrade"], "answer": 3, "explain": "update後にupgradeを実行してパッケージを更新する。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・APTでtreeパッケージをインストールする", "choices": ["apt install tree", "apt list tree", "apt update tree", "apt remove tree"], "answer": 0, "explain": "installはパッケージの導入を行う。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・APTでtreeパッケージを削除する", "choices": ["apt install tree", "apt update tree", "apt remove tree", "apt policy tree"], "answer": 2, "explain": "removeは設定ファイルを残す場合がある。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・指定ファイルを所有するDebianパッケージを調べる\n・コロン区切りの第1フィールドを表示する", "choices": ["awk '{print $1}' /etc/passwd", "dpkg -L /bin/ls", "awk -F: '{print $1}' /etc/passwd", "dpkg -S /bin/ls"], "answer": [3, 2], "explain": "dpkg -S はファイルから所有パッケージを照会する。 -Fでフィールド区切りを指定できる。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・Debianパッケージcoreutilsに含まれるファイルを一覧表示する", "choices": ["dpkg -r coreutils", "dpkg -S coreutils", "dpkg -i coreutils", "dpkg -L coreutils"], "answer": 3, "explain": "dpkg -L はパッケージからファイルを調べる。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・ローカルのDebianパッケージファイルをインストールする", "choices": ["dpkg -r pkg.deb", "dpkg -i pkg.deb", "dpkg -L pkg.deb", "dpkg -S pkg.deb"], "answer": 1, "explain": "dpkg -i はdebファイルを導入する。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・/var/log配下の通常ファイルで7日未満前に更新されたものを探す", "choices": ["find /var/log -type d -mtime 7", "find /var/log -type f -mtime -7", "locate -mtime -7", "grep -r -7 /var/log"], "answer": 1, "explain": "findの-typeと-mtimeで条件指定する。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・カレントディレクトリ以下のシンボリックリンクを検索する", "choices": ["find . -type l", "find . -type d", "find . -type f", "find . -type b"], "answer": 0, "explain": "findの-type lはシンボリックリンクを表す。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・大文字・小文字を区別せずerrorを含む行を抽出する\n・別の場所にあるファイルへのシンボリックリンクを作成する", "choices": ["ln -s /opt/app/bin/tool ~/bin/tool", "grep -v error app.log", "grep -i error app.log", "ln /opt/app/bin/tool ~/bin/tool"], "answer": [2, 0], "explain": "-iは大文字・小文字を区別しない。 -sを付けるとシンボリックリンクを作成する。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・コメント行を除外して表示する", "choices": ["grep -i '^#' config", "grep -v '^#' config", "grep -c '^#' config", "grep '^#' config"], "answer": 1, "explain": "-vは一致しない行を出力する。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・passwdからユーザー名とログインシェルを取り出す", "choices": ["cut -d: -f2-6 /etc/passwd", "cut -d: -f3 /etc/passwd", "cut -d: -f1,7 /etc/passwd", "cut -f1 /etc/passwd"], "answer": 2, "explain": "区切り文字指定に-d、フィールド指定に-fを使う。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・数値として行をソートする", "choices": ["sort -u numbers.txt", "sort -k numbers.txt", "sort -r numbers.txt", "sort -n numbers.txt"], "answer": 3, "explain": "-nは数値順での比較を指定する。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・重複行を取り除いてソートする", "choices": ["sort -k names.txt", "sort -r names.txt", "sort -u names.txt", "sort -n names.txt"], "answer": 2, "explain": "-uは同一行を一つにまとめる。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・連続する重複行を数えて表示する\n・swapパーティションを有効化する", "choices": ["swapon /dev/sdb2", "uniq -c names.txt", "uniq -d names.txt", "swapoff /dev/sdb2"], "answer": [1, 0], "explain": "uniq -cは出現回数を先頭に表示する。通常は事前にsortする。 swaponはスワップ領域を有効化する。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・ファイルの行数を数える", "choices": ["wc -w access.log", "wc -m access.log", "wc -l access.log", "wc -c access.log"], "answer": 2, "explain": "-lは行数を出力する。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・先頭20行を表示する", "choices": ["head -c 20 file", "tail -n 20 file", "head -n 20 file", "less -n 20 file"], "answer": 2, "explain": "headの-nで表示行数を指定する。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・追記されるログを継続監視する", "choices": ["tail -n /var/log/messages", "head -f /var/log/messages", "tail -f /var/log/messages", "less -f /var/log/messages"], "answer": 2, "explain": "-fはファイル末尾への追記を追いかける。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・gzip圧縮tarアーカイブを展開する", "choices": ["tar -czf backup.tar.gz", "tar -tf backup.tar.gz", "tar -xzf backup.tar.gz", "gzip -r backup.tar.gz"], "answer": 2, "explain": "-xは展開、-zはgzip、-fはファイル指定である。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・dataをgzip圧縮tarアーカイブに作成する\n・USBデバイスの情報を一覧表示する", "choices": ["tar -czf backup.tar.gz data", "lsusb", "lspci", "tar -xzf backup.tar.gz"], "answer": [0, 1], "explain": "-cは作成、-zはgzip圧縮を指定する。 USB機器の列挙には lsusb を使う。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・各行のfooをすべてbarへ置換して出力する", "choices": ["sed 's/foo/bar/1' file", "sed '/foo/d' file", "sed 's/foo/bar/g' file", "sed -n 'foo' file"], "answer": 2, "explain": "sコマンドは置換、gは行内の全一致を対象とする。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・コロン区切りの第1フィールドを表示する", "choices": ["cut -f1 /etc/passwd", "awk '{print $1}' /etc/passwd", "awk -F: '{print $1}' /etc/passwd", "grep '$1' /etc/passwd"], "answer": 2, "explain": "-Fでフィールド区切りを指定できる。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・所有者rw、グループr、その他---に設定する", "choices": ["chmod 660 report", "chmod 644 report", "chmod 600 report", "chmod 640 report"], "answer": 3, "explain": "640はu=rw,g=r,o=---を表す。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・sharedで新規作成される項目にグループを継承させる", "choices": ["chmod g+s shared", "chmod o+s shared", "chmod u+s shared", "chmod +t shared"], "answer": 0, "explain": "ディレクトリのsetgidはグループ継承に用いる。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・共有ディレクトリで他人のファイル削除を制限する\n・カーネルリングバッファのメッセージを確認する", "choices": ["chmod +t /sharedtmp", "syslog", "chmod g+s /sharedtmp", "dmesg"], "answer": [0, 3], "explain": "sticky bitは/tmpのような共有領域で使われる。 dmesg はカーネルの出力確認に適する。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・sourceへのハードリンクを作成する", "choices": ["link -s source hardlink", "ln -s source hardlink", "ln source hardlink", "cp source hardlink"], "answer": 2, "explain": "lnの通常形式はハードリンクを作成する。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・別の場所にあるファイルへのシンボリックリンクを作成する", "choices": ["ln -s /opt/app/bin/tool ~/bin/tool", "link /opt/app/bin/tool ~/bin/tool", "ln /opt/app/bin/tool ~/bin/tool", "cp -s /opt/app/bin/tool ~/bin/tool"], "answer": 0, "explain": "-sを付けるとシンボリックリンクを作成する。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・マウント済みファイルシステムの使用量を人間が読みやすい単位で表示する", "choices": ["free -h", "lsblk -h", "du -h", "df -h"], "answer": 3, "explain": "dfはファイルシステム単位の空き容量確認に使う。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・/var/log全体の使用量を要約表示する", "choices": ["df -h /var/log", "du -sh /var/log", "ls -lh /var/log", "free -h /var/log"], "answer": 1, "explain": "duはディレクトリ内容の使用量を集計する。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・デバイスを読み取り専用でマウントする\n・デバイス検出に応じて /dev のデバイスノードを管理する仕組み", "choices": ["cron", "udev", "mount -o rw /dev/sdb1 /mnt", "mount -o ro /dev/sdb1 /mnt"], "answer": [3, 1], "explain": "roはread-onlyマウントオプションである。 udev は動的デバイス管理を担う。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・/mntにマウントされたファイルシステムを解除する", "choices": ["mount /mnt", "swapoff /mnt", "umount /mnt", "fsck /mnt"], "answer": 2, "explain": "umountはマウントポイントまたはデバイスを指定できる。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・swapパーティションを有効化する", "choices": ["swapon /dev/sdb2", "mount /dev/sdb2", "swapoff /dev/sdb2", "mkswapoff /dev/sdb2"], "answer": 0, "explain": "swaponはスワップ領域を有効化する。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・パーティションをswap領域として初期化する", "choices": ["mkfs.swap /dev/sdb2", "swapon -f /dev/sdb2", "fsck.swap /dev/sdb2", "mkswap /dev/sdb2"], "answer": 3, "explain": "mkswapでスワップ用の署名を作成する。"},
{"category": "第2部：模擬試験", "question": "運用担当者は次の目的を達成したいと考えています。最も適切な選択肢を選んでください。\n・永続的なマウント設定を記述するファイル", "choices": ["/etc/mtab", "/etc/fstab", "/proc/mounts", "/etc/passwd"], "answer": 1, "explain": "fstabは起動時などのマウント設定に使う。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・カーネルが認識する現在のマウント情報を参照する\n・ブロックデバイスのツリー表示を行う", "choices": ["/etc/fstab", "lsblk", "lspci", "/proc/mounts"], "answer": [3, 1], "explain": "procfs内のmountsには現在のマウント情報がある。 lsblk はディスク・パーティション・LVM等を見やすく表示する。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・PCIデバイスの情報を一覧表示する", "choices": ["lsusb", "lsmod", "blkid", "lspci"], "answer": 3, "explain": "PCIバス上のデバイス確認には lspci を使う。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・USBデバイスの情報を一覧表示する", "choices": ["uname", "lsblk", "lspci", "lsusb"], "answer": 3, "explain": "USB機器の列挙には lsusb を使う。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・現在ロード済みのカーネルモジュールを表示する", "choices": ["lsmod", "modinfo", "depmod", "modprobe"], "answer": 0, "explain": "lsmod はロード済みモジュールの一覧を表示する。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・モジュール e1000e の詳細情報を確認する", "choices": ["modinfo e1000e", "lsmod e1000e", "modprobe e1000e", "depmod e1000e"], "answer": 0, "explain": "modinfo はモジュールの説明や依存関係を表示する。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・ロード済みモジュール e1000e を依存関係を考慮して外す\n・マウント済みXFSを拡張する", "choices": ["resize2fs /data", "modprobe -r e1000e", "rmmod -a e1000e", "xfs_growfs /data"], "answer": [1, 3], "explain": "modprobe -r はモジュールの取り外しに使える。 XFSは縮小できないが、マウント中に拡張できる。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・現在の起動に限ったジャーナルを確認する", "choices": ["systemctl -b", "journalctl -f", "dmesg -w", "journalctl -b"], "answer": 3, "explain": "journalctl の -b は起動単位で絞り込む。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・カーネルリングバッファのメッセージを確認する", "choices": ["logger", "dmesg", "syslog", "uptime"], "answer": 1, "explain": "dmesg はカーネルの出力確認に適する。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・systemd環境で再起動を要求する", "choices": ["systemctl enable", "systemctl reload", "systemctl reboot", "systemctl isolate"], "answer": 2, "explain": "reboot サブコマンドは再起動を要求する。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・systemd環境で電源断を要求する", "choices": ["systemctl daemon-reload", "systemctl mask", "systemctl reset-failed", "systemctl poweroff"], "answer": 3, "explain": "poweroff は電源断を実行する。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・救援用ターゲットへ切り替える\n・指定ファイルを所有するRPMパッケージを調べる", "choices": ["systemctl enable rescue.target", "rpm -ql /usr/bin/ssh", "rpm -qf /usr/bin/ssh", "systemctl isolate rescue.target"], "answer": [3, 2], "explain": "isolate は指定ターゲットへ切り替える。 rpm -qf はファイルからパッケージを逆引きする。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・カーネルが公開するデバイスやドライバ情報を参照する仮想ファイルシステム", "choices": ["/tmp", "/opt", "/srv", "/sys"], "answer": 3, "explain": "sysfs は通常 /sys にマウントされる。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・デバイス検出に応じて /dev のデバイスノードを管理する仕組み", "choices": ["udev", "cron", "syslog", "atd"], "answer": 0, "explain": "udev は動的デバイス管理を担う。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・実ルートをマウントする前に必要なドライバ等を提供する初期RAMファイルシステム", "choices": ["swap", "ESP", "MBR", "initramfs"], "answer": 3, "explain": "initramfs は起動初期に利用される。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・EFI System Partition 上のブートローダーを利用できるファームウェア方式", "choices": ["ext4", "SysVinit", "XFS", "UEFI"], "answer": 3, "explain": "UEFIではESPを用いる構成が一般的である。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・Linuxカーネルを選択・起動する代表的なブートローダー\n・DNFでhttpdパッケージを削除する", "choices": ["systemd", "GRUB", "dnf remove httpd", "dnf install httpd"], "answer": [1, 2], "explain": "GRUBはカーネル引数を渡して起動できる。 removeはインストール済みパッケージを削除する。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・ディスクのパーティションテーブルを一覧表示する", "choices": ["fdisk -l", "du -l", "free -l", "df -l"], "answer": 0, "explain": "fdisk -l はパーティション情報の表示に使う。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・ブロックデバイスのツリー表示を行う", "choices": ["lspci", "lsmod", "lsblk", "lsusb"], "answer": 2, "explain": "lsblk はディスク・パーティション・LVM等を見やすく表示する。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・ブロックデバイスのUUIDやファイルシステム種別を調べる", "choices": ["blkid", "stat", "file", "id"], "answer": 0, "explain": "blkid はUUID指定のfstab作成時にも有用である。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・未使用パーティション /dev/sdb1 にext4ファイルシステムを作成する", "choices": ["mkfs.ext4 /dev/sdb1", "mount /dev/sdb1", "fdisk /dev/sdb1", "fsck.ext4 /dev/sdb1"], "answer": 0, "explain": "mkfs.ext4 はext4ファイルシステムを新規作成する。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・アンマウント済みext4ファイルシステムを検査・修復する\n・APTでtreeパッケージを削除する", "choices": ["xfs_growfs /dev/sdb1", "apt remove tree", "fsck.ext4 /dev/sdb1", "apt install tree"], "answer": [2, 1], "explain": "ext系の検査にはfsck.ext4を使用できる。 removeは設定ファイルを残す場合がある。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・アンマウント済みXFSファイルシステムを修復する", "choices": ["xfs_growfs /dev/sdb1", "tune2fs /dev/sdb1", "fsck.ext4 /dev/sdb1", "xfs_repair /dev/sdb1"], "answer": 3, "explain": "XFSの修復にはxfs_repairを使う。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・マウント済みXFSを拡張する", "choices": ["xfs_growfs /data", "xfs_repair /data", "resize2fs /data", "fsck.xfs /data"], "answer": 0, "explain": "XFSは縮小できないが、マウント中に拡張できる。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・拡張済みのext系ファイルシステムをサイズ変更する", "choices": ["fdisk /dev/sdb1", "fsck /dev/sdb1", "resize2fs /dev/sdb1", "xfs_growfs /dev/sdb1"], "answer": 2, "explain": "resize2fs はext2/3/4向けである。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・fstabに記述された未マウント項目をまとめてマウントする", "choices": ["swapon -a", "umount -a", "fsck -a", "mount -a"], "answer": 3, "explain": "mount -a はfstabの検証にも利用される。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・デバイス名の変更に影響されにくいfstabでのデバイス指定方法\n・カレントディレクトリ以下のシンボリックリンクを検索する", "choices": ["find . -type f", "inode", "find . -type l", "UUID"], "answer": [3, 2], "explain": "UUIDはファイルシステムを一意に識別する。 findの-type lはシンボリックリンクを表す。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・インストール済みRPMパッケージを一覧表示する", "choices": ["rpm -e", "rpm -qa", "rpm -V", "rpm -qf"], "answer": 1, "explain": "rpm -qa は全インストール済みパッケージを照会する。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・指定ファイルを所有するRPMパッケージを調べる", "choices": ["rpm -U /usr/bin/ssh", "rpm -qf /usr/bin/ssh", "rpm -e /usr/bin/ssh", "rpm -ql /usr/bin/ssh"], "answer": 1, "explain": "rpm -qf はファイルからパッケージを逆引きする。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・RPMパッケージに含まれるファイルを一覧表示する", "choices": ["rpm -qf openssh-clients", "rpm -e openssh-clients", "rpm -ql openssh-clients", "rpm -Va openssh-clients"], "answer": 2, "explain": "rpm -ql はインストール済みパッケージのファイル一覧を表示する。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・RPMパッケージ nano を削除する", "choices": ["rpm -q nano", "rpm -V nano", "rpm -i nano", "rpm -e nano"], "answer": 3, "explain": "rpm -e はアンインストールに使う。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・RPMファイルをインストールまたは更新する\n・重複行を取り除いてソートする", "choices": ["sort -n names.txt", "sort -u names.txt", "rpm -Uvh pkg.rpm", "rpm -e pkg.rpm"], "answer": [2, 1], "explain": "-Uはupgrade/install、-vと-hは進捗表示に使われる。 -uは同一行を一つにまとめる。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・DNFでhttpdパッケージをインストールする", "choices": ["dnf info httpd", "dnf install httpd", "dnf erase httpd", "dnf clean httpd"], "answer": 1, "explain": "dnf install はリポジトリからパッケージを導入する。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・DNFでhttpdパッケージを削除する", "choices": ["dnf remove httpd", "dnf install httpd", "dnf check-update httpd", "dnf list httpd"], "answer": 0, "explain": "removeはインストール済みパッケージを削除する。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・DNFのパッケージグループを導入する", "choices": ["dnf group info install", "dnf install group", "dnf group install \"Development Tools\"", "dnf group remove all"], "answer": 2, "explain": "group installでグループ単位の導入ができる。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・APTのパッケージ一覧情報を更新する", "choices": ["apt show", "apt upgrade", "apt update", "apt remove"], "answer": 2, "explain": "apt updateだけでは通常パッケージ本体は更新しない。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・APTで更新可能なインストール済みパッケージを更新する\n・gzip圧縮tarアーカイブを展開する", "choices": ["apt upgrade", "apt update", "tar -czf backup.tar.gz", "tar -xzf backup.tar.gz"], "answer": [0, 3], "explain": "update後にupgradeを実行してパッケージを更新する。 -xは展開、-zはgzip、-fはファイル指定である。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・APTでtreeパッケージをインストールする", "choices": ["apt remove tree", "apt list tree", "apt update tree", "apt install tree"], "answer": 3, "explain": "installはパッケージの導入を行う。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・APTでtreeパッケージを削除する", "choices": ["apt install tree", "apt update tree", "apt policy tree", "apt remove tree"], "answer": 3, "explain": "removeは設定ファイルを残す場合がある。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・指定ファイルを所有するDebianパッケージを調べる", "choices": ["dpkg -i /bin/ls", "dpkg -r /bin/ls", "dpkg -S /bin/ls", "dpkg -L /bin/ls"], "answer": 2, "explain": "dpkg -S はファイルから所有パッケージを照会する。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・Debianパッケージcoreutilsに含まれるファイルを一覧表示する", "choices": ["dpkg -L coreutils", "dpkg -i coreutils", "dpkg -S coreutils", "dpkg -r coreutils"], "answer": 0, "explain": "dpkg -L はパッケージからファイルを調べる。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・ローカルのDebianパッケージファイルをインストールする\n・sharedで新規作成される項目にグループを継承させる", "choices": ["dpkg -i pkg.deb", "chmod +t shared", "chmod g+s shared", "dpkg -r pkg.deb"], "answer": [0, 2], "explain": "dpkg -i はdebファイルを導入する。 ディレクトリのsetgidはグループ継承に用いる。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・/var/log配下の通常ファイルで7日未満前に更新されたものを探す", "choices": ["find /var/log -type f -mtime -7", "locate -mtime -7", "grep -r -7 /var/log", "find /var/log -type d -mtime 7"], "answer": 0, "explain": "findの-typeと-mtimeで条件指定する。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・カレントディレクトリ以下のシンボリックリンクを検索する", "choices": ["find . -type f", "find . -type d", "find . -type b", "find . -type l"], "answer": 3, "explain": "findの-type lはシンボリックリンクを表す。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・大文字・小文字を区別せずerrorを含む行を抽出する", "choices": ["grep -n error app.log", "grep -i error app.log", "grep -c error app.log", "grep -v error app.log"], "answer": 1, "explain": "-iは大文字・小文字を区別しない。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・コメント行を除外して表示する", "choices": ["grep '^#' config", "grep -i '^#' config", "grep -c '^#' config", "grep -v '^#' config"], "answer": 3, "explain": "-vは一致しない行を出力する。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・passwdからユーザー名とログインシェルを取り出す\n・/var/log全体の使用量を要約表示する", "choices": ["df -h /var/log", "du -sh /var/log", "cut -d: -f1,7 /etc/passwd", "cut -d: -f2-6 /etc/passwd"], "answer": [2, 1], "explain": "区切り文字指定に-d、フィールド指定に-fを使う。 duはディレクトリ内容の使用量を集計する。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・数値として行をソートする", "choices": ["sort -k numbers.txt", "sort -r numbers.txt", "sort -n numbers.txt", "sort -u numbers.txt"], "answer": 2, "explain": "-nは数値順での比較を指定する。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・重複行を取り除いてソートする", "choices": ["sort -r names.txt", "sort -n names.txt", "sort -k names.txt", "sort -u names.txt"], "answer": 3, "explain": "-uは同一行を一つにまとめる。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・連続する重複行を数えて表示する", "choices": ["uniq -u names.txt", "uniq -c names.txt", "sort -c names.txt", "uniq -d names.txt"], "answer": 1, "explain": "uniq -cは出現回数を先頭に表示する。通常は事前にsortする。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・ファイルの行数を数える", "choices": ["wc -l access.log", "wc -w access.log", "wc -m access.log", "wc -c access.log"], "answer": 0, "explain": "-lは行数を出力する。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・先頭20行を表示する\n・永続的なマウント設定を記述するファイル", "choices": ["tail -n 20 file", "head -n 20 file", "/etc/fstab", "/etc/mtab"], "answer": [1, 2], "explain": "headの-nで表示行数を指定する。 fstabは起動時などのマウント設定に使う。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・追記されるログを継続監視する", "choices": ["head -f /var/log/messages", "tail -f /var/log/messages", "tail -n /var/log/messages", "less -f /var/log/messages"], "answer": 1, "explain": "-fはファイル末尾への追記を追いかける。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・gzip圧縮tarアーカイブを展開する", "choices": ["gzip -r backup.tar.gz", "tar -czf backup.tar.gz", "tar -tf backup.tar.gz", "tar -xzf backup.tar.gz"], "answer": 3, "explain": "-xは展開、-zはgzip、-fはファイル指定である。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・dataをgzip圧縮tarアーカイブに作成する", "choices": ["tar -czf backup.tar.gz data", "cpio -czf backup.tar.gz", "tar -xzf backup.tar.gz", "tar -tzf backup.tar.gz"], "answer": 0, "explain": "-cは作成、-zはgzip圧縮を指定する。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・各行のfooをすべてbarへ置換して出力する", "choices": ["sed -n 'foo' file", "sed '/foo/d' file", "sed 's/foo/bar/1' file", "sed 's/foo/bar/g' file"], "answer": 3, "explain": "sコマンドは置換、gは行内の全一致を対象とする。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・コロン区切りの第1フィールドを表示する\n・モジュール e1000e の詳細情報を確認する", "choices": ["awk '{print $1}' /etc/passwd", "lsmod e1000e", "modinfo e1000e", "awk -F: '{print $1}' /etc/passwd"], "answer": [3, 2], "explain": "-Fでフィールド区切りを指定できる。 modinfo はモジュールの説明や依存関係を表示する。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・所有者rw、グループr、その他---に設定する", "choices": ["chmod 640 report", "chmod 600 report", "chmod 660 report", "chmod 644 report"], "answer": 0, "explain": "640はu=rw,g=r,o=---を表す。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・sharedで新規作成される項目にグループを継承させる", "choices": ["chmod g+s shared", "chmod u+s shared", "chmod o+s shared", "chmod +t shared"], "answer": 0, "explain": "ディレクトリのsetgidはグループ継承に用いる。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・共有ディレクトリで他人のファイル削除を制限する", "choices": ["chmod 777 /sharedtmp", "chmod +t /sharedtmp", "chmod g+s /sharedtmp", "chmod u+s /sharedtmp"], "answer": 1, "explain": "sticky bitは/tmpのような共有領域で使われる。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・sourceへのハードリンクを作成する", "choices": ["link -s source hardlink", "cp source hardlink", "ln source hardlink", "ln -s source hardlink"], "answer": 2, "explain": "lnの通常形式はハードリンクを作成する。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・別の場所にあるファイルへのシンボリックリンクを作成する\n・systemd環境で電源断を要求する", "choices": ["ln /opt/app/bin/tool ~/bin/tool", "ln -s /opt/app/bin/tool ~/bin/tool", "systemctl poweroff", "systemctl daemon-reload"], "answer": [1, 2], "explain": "-sを付けるとシンボリックリンクを作成する。 poweroff は電源断を実行する。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・マウント済みファイルシステムの使用量を人間が読みやすい単位で表示する", "choices": ["df -h", "du -h", "lsblk -h", "free -h"], "answer": 0, "explain": "dfはファイルシステム単位の空き容量確認に使う。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・/var/log全体の使用量を要約表示する", "choices": ["free -h /var/log", "du -sh /var/log", "df -h /var/log", "ls -lh /var/log"], "answer": 1, "explain": "duはディレクトリ内容の使用量を集計する。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・デバイスを読み取り専用でマウントする", "choices": ["fsck -o ro /dev/sdb1", "mount -o ro /dev/sdb1 /mnt", "umount -o ro /mnt", "mount -o rw /dev/sdb1 /mnt"], "answer": 1, "explain": "roはread-onlyマウントオプションである。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・/mntにマウントされたファイルシステムを解除する", "choices": ["swapoff /mnt", "mount /mnt", "umount /mnt", "fsck /mnt"], "answer": 2, "explain": "umountはマウントポイントまたはデバイスを指定できる。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・swapパーティションを有効化する\n・EFI System Partition 上のブートローダーを利用できるファームウェア方式", "choices": ["swapon /dev/sdb2", "swapoff /dev/sdb2", "ext4", "UEFI"], "answer": [0, 3], "explain": "swaponはスワップ領域を有効化する。 UEFIではESPを用いる構成が一般的である。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・パーティションをswap領域として初期化する", "choices": ["mkfs.swap /dev/sdb2", "mkswap /dev/sdb2", "swapon -f /dev/sdb2", "fsck.swap /dev/sdb2"], "answer": 1, "explain": "mkswapでスワップ用の署名を作成する。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・永続的なマウント設定を記述するファイル", "choices": ["/etc/fstab", "/etc/mtab", "/proc/mounts", "/etc/passwd"], "answer": 0, "explain": "fstabは起動時などのマウント設定に使う。"},
{"category": "第2部：模擬試験", "question": "LPIC-1 101の学習環境で、次の説明に該当するものはどれですか。\n・カーネルが認識する現在のマウント情報を参照する", "choices": ["/etc/mtab", "/proc/cpuinfo", "/proc/mounts", "/etc/fstab"], "answer": 2, "explain": "procfs内のmountsには現在のマウント情報がある。"},
{"category": "第2部：模擬試験", "question": "次のうち、PCIデバイスの情報を一覧表示するために使うものはどれですか。", "choices": ["lsmod", "blkid", "lsusb", "lspci"], "answer": 3, "explain": "PCIバス上のデバイス確認には lspci を使う。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・USBデバイスの情報を一覧表示する\n・未使用パーティション /dev/sdb1 にext4ファイルシステムを作成する", "choices": ["fsck.ext4 /dev/sdb1", "lsusb", "lspci", "mkfs.ext4 /dev/sdb1"], "answer": [1, 3], "explain": "USB機器の列挙には lsusb を使う。 mkfs.ext4 はext4ファイルシステムを新規作成する。"},
{"category": "第2部：模擬試験", "question": "次のうち、現在ロード済みのカーネルモジュールを表示するために使うものはどれですか。", "choices": ["depmod", "modprobe", "modinfo", "lsmod"], "answer": 3, "explain": "lsmod はロード済みモジュールの一覧を表示する。"},
{"category": "第2部：模擬試験", "question": "次のうち、モジュール e1000e の詳細情報を確認するために使うものはどれですか。", "choices": ["depmod e1000e", "lsmod e1000e", "modprobe e1000e", "modinfo e1000e"], "answer": 3, "explain": "modinfo はモジュールの説明や依存関係を表示する。"},
{"category": "第2部：模擬試験", "question": "次のうち、ロード済みモジュール e1000e を依存関係を考慮して外すために使うものはどれですか。", "choices": ["modprobe -r e1000e", "lsmod -r e1000e", "modinfo -r e1000e", "rmmod -a e1000e"], "answer": 0, "explain": "modprobe -r はモジュールの取り外しに使える。"},
{"category": "第2部：模擬試験", "question": "次のうち、現在の起動に限ったジャーナルを確認するために使うものはどれですか。", "choices": ["systemctl -b", "dmesg -w", "journalctl -f", "journalctl -b"], "answer": 3, "explain": "journalctl の -b は起動単位で絞り込む。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・カーネルリングバッファのメッセージを確認する\n・fstabに記述された未マウント項目をまとめてマウントする", "choices": ["dmesg", "mount -a", "syslog", "umount -a"], "answer": [0, 1], "explain": "dmesg はカーネルの出力確認に適する。 mount -a はfstabの検証にも利用される。"},
{"category": "第2部：模擬試験", "question": "次のうち、systemd環境で再起動を要求するために使うものはどれですか。", "choices": ["systemctl reload", "systemctl isolate", "systemctl enable", "systemctl reboot"], "answer": 3, "explain": "reboot サブコマンドは再起動を要求する。"},
{"category": "第2部：模擬試験", "question": "次のうち、systemd環境で電源断を要求するために使うものはどれですか。", "choices": ["systemctl reset-failed", "systemctl mask", "systemctl poweroff", "systemctl daemon-reload"], "answer": 2, "explain": "poweroff は電源断を実行する。"},
{"category": "第2部：模擬試験", "question": "次のうち、救援用ターゲットへ切り替えるために使うものはどれですか。", "choices": ["systemctl enable rescue.target", "systemctl stop rescue.target", "systemctl isolate rescue.target", "systemctl reload rescue.target"], "answer": 2, "explain": "isolate は指定ターゲットへ切り替える。"},
{"category": "第2部：模擬試験", "question": "次のうち、カーネルが公開するデバイスやドライバ情報を参照する仮想ファイルシステムために使うものはどれですか。", "choices": ["/srv", "/opt", "/tmp", "/sys"], "answer": 3, "explain": "sysfs は通常 /sys にマウントされる。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・デバイス検出に応じて /dev のデバイスノードを管理する仕組み\n・RPMパッケージ nano を削除する", "choices": ["udev", "cron", "rpm -e nano", "rpm -i nano"], "answer": [0, 2], "explain": "udev は動的デバイス管理を担う。 rpm -e はアンインストールに使う。"},
{"category": "第2部：模擬試験", "question": "次のうち、実ルートをマウントする前に必要なドライバ等を提供する初期RAMファイルシステムために使うものはどれですか。", "choices": ["ESP", "MBR", "initramfs", "swap"], "answer": 2, "explain": "initramfs は起動初期に利用される。"},
{"category": "第2部：模擬試験", "question": "次のうち、EFI System Partition 上のブートローダーを利用できるファームウェア方式ために使うものはどれですか。", "choices": ["UEFI", "XFS", "ext4", "SysVinit"], "answer": 0, "explain": "UEFIではESPを用いる構成が一般的である。"},
{"category": "第2部：模擬試験", "question": "次のうち、Linuxカーネルを選択・起動する代表的なブートローダーために使うものはどれですか。", "choices": ["udev", "systemd", "GRUB", "cron"], "answer": 2, "explain": "GRUBはカーネル引数を渡して起動できる。"},
{"category": "第2部：模擬試験", "question": "次のうち、ディスクのパーティションテーブルを一覧表示するために使うものはどれですか。", "choices": ["df -l", "fdisk -l", "du -l", "free -l"], "answer": 1, "explain": "fdisk -l はパーティション情報の表示に使う。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・ブロックデバイスのツリー表示を行う\n・APTのパッケージ一覧情報を更新する", "choices": ["lspci", "apt update", "apt upgrade", "lsblk"], "answer": [3, 1], "explain": "lsblk はディスク・パーティション・LVM等を見やすく表示する。 apt updateだけでは通常パッケージ本体は更新しない。"},
{"category": "第2部：模擬試験", "question": "次のうち、ブロックデバイスのUUIDやファイルシステム種別を調べるために使うものはどれですか。", "choices": ["id", "file", "stat", "blkid"], "answer": 3, "explain": "blkid はUUID指定のfstab作成時にも有用である。"},
{"category": "第2部：模擬試験", "question": "次のうち、未使用パーティション /dev/sdb1 にext4ファイルシステムを作成するために使うものはどれですか。", "choices": ["mount /dev/sdb1", "fsck.ext4 /dev/sdb1", "mkfs.ext4 /dev/sdb1", "fdisk /dev/sdb1"], "answer": 2, "explain": "mkfs.ext4 はext4ファイルシステムを新規作成する。"},
{"category": "第2部：模擬試験", "question": "次のうち、アンマウント済みext4ファイルシステムを検査・修復するために使うものはどれですか。", "choices": ["xfs_growfs /dev/sdb1", "fsck.ext4 /dev/sdb1", "resize2fs /dev/sdb1", "mount -o repair /dev/sdb1"], "answer": 1, "explain": "ext系の検査にはfsck.ext4を使用できる。"},
{"category": "第2部：模擬試験", "question": "次のうち、アンマウント済みXFSファイルシステムを修復するために使うものはどれですか。", "choices": ["xfs_growfs /dev/sdb1", "tune2fs /dev/sdb1", "xfs_repair /dev/sdb1", "fsck.ext4 /dev/sdb1"], "answer": 2, "explain": "XFSの修復にはxfs_repairを使う。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・マウント済みXFSを拡張する\n・Debianパッケージcoreutilsに含まれるファイルを一覧表示する", "choices": ["resize2fs /data", "dpkg -L coreutils", "xfs_growfs /data", "dpkg -S coreutils"], "answer": [2, 1], "explain": "XFSは縮小できないが、マウント中に拡張できる。 dpkg -L はパッケージからファイルを調べる。"},
{"category": "第2部：模擬試験", "question": "次のうち、拡張済みのext系ファイルシステムをサイズ変更するために使うものはどれですか。", "choices": ["fdisk /dev/sdb1", "resize2fs /dev/sdb1", "fsck /dev/sdb1", "xfs_growfs /dev/sdb1"], "answer": 1, "explain": "resize2fs はext2/3/4向けである。"},
{"category": "第2部：模擬試験", "question": "次のうち、fstabに記述された未マウント項目をまとめてマウントするために使うものはどれですか。", "choices": ["swapon -a", "umount -a", "fsck -a", "mount -a"], "answer": 3, "explain": "mount -a はfstabの検証にも利用される。"},
{"category": "第2部：模擬試験", "question": "次のうち、デバイス名の変更に影響されにくいfstabでのデバイス指定方法ために使うものはどれですか。", "choices": ["inode", "PID", "UID", "UUID"], "answer": 3, "explain": "UUIDはファイルシステムを一意に識別する。"},
{"category": "第2部：模擬試験", "question": "次のうち、インストール済みRPMパッケージを一覧表示するために使うものはどれですか。", "choices": ["rpm -qa", "rpm -V", "rpm -qf", "rpm -e"], "answer": 0, "explain": "rpm -qa は全インストール済みパッケージを照会する。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・指定ファイルを所有するRPMパッケージを調べる\n・コメント行を除外して表示する", "choices": ["rpm -ql /usr/bin/ssh", "rpm -qf /usr/bin/ssh", "grep '^#' config", "grep -v '^#' config"], "answer": [1, 3], "explain": "rpm -qf はファイルからパッケージを逆引きする。 -vは一致しない行を出力する。"},
{"category": "第2部：模擬試験", "question": "次のうち、RPMパッケージに含まれるファイルを一覧表示するために使うものはどれですか。", "choices": ["rpm -e openssh-clients", "rpm -qf openssh-clients", "rpm -ql openssh-clients", "rpm -Va openssh-clients"], "answer": 2, "explain": "rpm -ql はインストール済みパッケージのファイル一覧を表示する。"},
{"category": "第2部：模擬試験", "question": "次のうち、RPMパッケージ nano を削除するために使うものはどれですか。", "choices": ["rpm -q nano", "rpm -V nano", "rpm -e nano", "rpm -i nano"], "answer": 2, "explain": "rpm -e はアンインストールに使う。"},
{"category": "第2部：模擬試験", "question": "次のうち、RPMファイルをインストールまたは更新するために使うものはどれですか。", "choices": ["rpm -q pkg.rpm", "rpm -V pkg.rpm", "rpm -Uvh pkg.rpm", "rpm -e pkg.rpm"], "answer": 2, "explain": "-Uはupgrade/install、-vと-hは進捗表示に使われる。"},
{"category": "第2部：模擬試験", "question": "次のうち、DNFでhttpdパッケージをインストールするために使うものはどれですか。", "choices": ["dnf clean httpd", "dnf info httpd", "dnf install httpd", "dnf erase httpd"], "answer": 2, "explain": "dnf install はリポジトリからパッケージを導入する。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・DNFでhttpdパッケージを削除する\n・ファイルの行数を数える", "choices": ["dnf install httpd", "wc -l access.log", "dnf remove httpd", "wc -w access.log"], "answer": [2, 1], "explain": "removeはインストール済みパッケージを削除する。 -lは行数を出力する。"},
{"category": "第2部：模擬試験", "question": "次のうち、DNFのパッケージグループを導入するために使うものはどれですか。", "choices": ["dnf group remove all", "dnf group info install", "dnf group install \"Development Tools\"", "dnf install group"], "answer": 2, "explain": "group installでグループ単位の導入ができる。"},
{"category": "第2部：模擬試験", "question": "次のうち、APTのパッケージ一覧情報を更新するために使うものはどれですか。", "choices": ["apt upgrade", "apt show", "apt remove", "apt update"], "answer": 3, "explain": "apt updateだけでは通常パッケージ本体は更新しない。"},
{"category": "第2部：模擬試験", "question": "次のうち、APTで更新可能なインストール済みパッケージを更新するために使うものはどれですか。", "choices": ["apt upgrade", "apt purge", "apt search", "apt update"], "answer": 0, "explain": "update後にupgradeを実行してパッケージを更新する。"},
{"category": "第2部：模擬試験", "question": "次のうち、APTでtreeパッケージをインストールするために使うものはどれですか。", "choices": ["apt remove tree", "apt update tree", "apt install tree", "apt list tree"], "answer": 2, "explain": "installはパッケージの導入を行う。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・APTでtreeパッケージを削除する\n・各行のfooをすべてbarへ置換して出力する", "choices": ["sed '/foo/d' file", "apt remove tree", "sed 's/foo/bar/g' file", "apt install tree"], "answer": [1, 2], "explain": "removeは設定ファイルを残す場合がある。 sコマンドは置換、gは行内の全一致を対象とする。"},
{"category": "第2部：模擬試験", "question": "次のうち、指定ファイルを所有するDebianパッケージを調べるために使うものはどれですか。", "choices": ["dpkg -i /bin/ls", "dpkg -S /bin/ls", "dpkg -L /bin/ls", "dpkg -r /bin/ls"], "answer": 1, "explain": "dpkg -S はファイルから所有パッケージを照会する。"},
{"category": "第2部：模擬試験", "question": "次のうち、Debianパッケージcoreutilsに含まれるファイルを一覧表示するために使うものはどれですか。", "choices": ["dpkg -r coreutils", "dpkg -L coreutils", "dpkg -i coreutils", "dpkg -S coreutils"], "answer": 1, "explain": "dpkg -L はパッケージからファイルを調べる。"},
{"category": "第2部：模擬試験", "question": "次のうち、ローカルのDebianパッケージファイルをインストールするために使うものはどれですか。", "choices": ["dpkg -i pkg.deb", "dpkg -L pkg.deb", "dpkg -S pkg.deb", "dpkg -r pkg.deb"], "answer": 0, "explain": "dpkg -i はdebファイルを導入する。"},
{"category": "第2部：模擬試験", "question": "次のうち、/var/log配下の通常ファイルで7日未満前に更新されたものを探すために使うものはどれですか。", "choices": ["find /var/log -type d -mtime 7", "locate -mtime -7", "find /var/log -type f -mtime -7", "grep -r -7 /var/log"], "answer": 2, "explain": "findの-typeと-mtimeで条件指定する。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・カレントディレクトリ以下のシンボリックリンクを検索する\n・sourceへのハードリンクを作成する", "choices": ["find . -type l", "find . -type f", "ln source hardlink", "ln -s source hardlink"], "answer": [0, 2], "explain": "findの-type lはシンボリックリンクを表す。 lnの通常形式はハードリンクを作成する。"},
{"category": "第2部：模擬試験", "question": "次のうち、大文字・小文字を区別せずerrorを含む行を抽出するために使うものはどれですか。", "choices": ["grep -c error app.log", "grep -i error app.log", "grep -v error app.log", "grep -n error app.log"], "answer": 1, "explain": "-iは大文字・小文字を区別しない。"},
{"category": "第2部：模擬試験", "question": "次のうち、コメント行を除外して表示するために使うものはどれですか。", "choices": ["grep -c '^#' config", "grep -i '^#' config", "grep '^#' config", "grep -v '^#' config"], "answer": 3, "explain": "-vは一致しない行を出力する。"},
{"category": "第2部：模擬試験", "question": "次のうち、passwdからユーザー名とログインシェルを取り出すために使うものはどれですか。", "choices": ["cut -d: -f3 /etc/passwd", "cut -f1 /etc/passwd", "cut -d: -f2-6 /etc/passwd", "cut -d: -f1,7 /etc/passwd"], "answer": 3, "explain": "区切り文字指定に-d、フィールド指定に-fを使う。"},
{"category": "第2部：模擬試験", "question": "次のうち、数値として行をソートするために使うものはどれですか。", "choices": ["sort -r numbers.txt", "sort -k numbers.txt", "sort -n numbers.txt", "sort -u numbers.txt"], "answer": 2, "explain": "-nは数値順での比較を指定する。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・重複行を取り除いてソートする\n・/mntにマウントされたファイルシステムを解除する", "choices": ["sort -n names.txt", "mount /mnt", "sort -u names.txt", "umount /mnt"], "answer": [2, 3], "explain": "-uは同一行を一つにまとめる。 umountはマウントポイントまたはデバイスを指定できる。"},
{"category": "第2部：模擬試験", "question": "次のうち、連続する重複行を数えて表示するために使うものはどれですか。", "choices": ["sort -c names.txt", "uniq -u names.txt", "uniq -d names.txt", "uniq -c names.txt"], "answer": 3, "explain": "uniq -cは出現回数を先頭に表示する。通常は事前にsortする。"},
{"category": "第2部：模擬試験", "question": "次のうち、ファイルの行数を数えるために使うものはどれですか。", "choices": ["wc -c access.log", "wc -l access.log", "wc -w access.log", "wc -m access.log"], "answer": 1, "explain": "-lは行数を出力する。"},
{"category": "第2部：模擬試験", "question": "次のうち、先頭20行を表示するために使うものはどれですか。", "choices": ["head -c 20 file", "tail -n 20 file", "head -n 20 file", "less -n 20 file"], "answer": 2, "explain": "headの-nで表示行数を指定する。"},
{"category": "第2部：模擬試験", "question": "次のうち、追記されるログを継続監視するために使うものはどれですか。", "choices": ["tail -f /var/log/messages", "tail -n /var/log/messages", "head -f /var/log/messages", "less -f /var/log/messages"], "answer": 0, "explain": "-fはファイル末尾への追記を追いかける。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・gzip圧縮tarアーカイブを展開する\n・PCIデバイスの情報を一覧表示する", "choices": ["lspci", "tar -czf backup.tar.gz", "tar -xzf backup.tar.gz", "lsusb"], "answer": [2, 0], "explain": "-xは展開、-zはgzip、-fはファイル指定である。 PCIバス上のデバイス確認には lspci を使う。"},
{"category": "第2部：模擬試験", "question": "次のうち、dataをgzip圧縮tarアーカイブに作成するために使うものはどれですか。", "choices": ["tar -xzf backup.tar.gz", "cpio -czf backup.tar.gz", "tar -czf backup.tar.gz data", "tar -tzf backup.tar.gz"], "answer": 2, "explain": "-cは作成、-zはgzip圧縮を指定する。"},
{"category": "第2部：模擬試験", "question": "次のうち、各行のfooをすべてbarへ置換して出力するために使うものはどれですか。", "choices": ["sed -n 'foo' file", "sed 's/foo/bar/1' file", "sed '/foo/d' file", "sed 's/foo/bar/g' file"], "answer": 3, "explain": "sコマンドは置換、gは行内の全一致を対象とする。"},
{"category": "第2部：模擬試験", "question": "次のうち、コロン区切りの第1フィールドを表示するために使うものはどれですか。", "choices": ["awk -F: '{print $1}' /etc/passwd", "awk '{print $1}' /etc/passwd", "grep '$1' /etc/passwd", "cut -f1 /etc/passwd"], "answer": 0, "explain": "-Fでフィールド区切りを指定できる。"},
{"category": "第2部：模擬試験", "question": "次のうち、所有者rw、グループr、その他---に設定するために使うものはどれですか。", "choices": ["chmod 660 report", "chmod 640 report", "chmod 600 report", "chmod 644 report"], "answer": 1, "explain": "640はu=rw,g=r,o=---を表す。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・sharedで新規作成される項目にグループを継承させる\n・現在の起動に限ったジャーナルを確認する", "choices": ["journalctl -f", "chmod g+s shared", "chmod +t shared", "journalctl -b"], "answer": [1, 3], "explain": "ディレクトリのsetgidはグループ継承に用いる。 journalctl の -b は起動単位で絞り込む。"},
{"category": "第2部：模擬試験", "question": "次のうち、共有ディレクトリで他人のファイル削除を制限するために使うものはどれですか。", "choices": ["chmod u+s /sharedtmp", "chmod 777 /sharedtmp", "chmod g+s /sharedtmp", "chmod +t /sharedtmp"], "answer": 3, "explain": "sticky bitは/tmpのような共有領域で使われる。"},
{"category": "第2部：模擬試験", "question": "次のうち、sourceへのハードリンクを作成するために使うものはどれですか。", "choices": ["ln source hardlink", "cp source hardlink", "ln -s source hardlink", "link -s source hardlink"], "answer": 0, "explain": "lnの通常形式はハードリンクを作成する。"},
{"category": "第2部：模擬試験", "question": "次のうち、別の場所にあるファイルへのシンボリックリンクを作成するために使うものはどれですか。", "choices": ["ln /opt/app/bin/tool ~/bin/tool", "cp -s /opt/app/bin/tool ~/bin/tool", "link /opt/app/bin/tool ~/bin/tool", "ln -s /opt/app/bin/tool ~/bin/tool"], "answer": 3, "explain": "-sを付けるとシンボリックリンクを作成する。"},
{"category": "第2部：模擬試験", "question": "次のうち、マウント済みファイルシステムの使用量を人間が読みやすい単位で表示するために使うものはどれですか。", "choices": ["lsblk -h", "df -h", "du -h", "free -h"], "answer": 1, "explain": "dfはファイルシステム単位の空き容量確認に使う。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・/var/log全体の使用量を要約表示する\n・カーネルが公開するデバイスやドライバ情報を参照する仮想ファイルシステム", "choices": ["/tmp", "/sys", "df -h /var/log", "du -sh /var/log"], "answer": [3, 1], "explain": "duはディレクトリ内容の使用量を集計する。 sysfs は通常 /sys にマウントされる。"},
{"category": "第2部：模擬試験", "question": "次のうち、デバイスを読み取り専用でマウントするために使うものはどれですか。", "choices": ["fsck -o ro /dev/sdb1", "mount -o ro /dev/sdb1 /mnt", "umount -o ro /mnt", "mount -o rw /dev/sdb1 /mnt"], "answer": 1, "explain": "roはread-onlyマウントオプションである。"},
{"category": "第2部：模擬試験", "question": "次のうち、/mntにマウントされたファイルシステムを解除するために使うものはどれですか。", "choices": ["fsck /mnt", "mount /mnt", "swapoff /mnt", "umount /mnt"], "answer": 3, "explain": "umountはマウントポイントまたはデバイスを指定できる。"},
{"category": "第2部：模擬試験", "question": "次のうち、swapパーティションを有効化するために使うものはどれですか。", "choices": ["swapon /dev/sdb2", "mkswapoff /dev/sdb2", "mount /dev/sdb2", "swapoff /dev/sdb2"], "answer": 0, "explain": "swaponはスワップ領域を有効化する。"},
{"category": "第2部：模擬試験", "question": "次のうち、パーティションをswap領域として初期化するために使うものはどれですか。", "choices": ["fsck.swap /dev/sdb2", "mkfs.swap /dev/sdb2", "mkswap /dev/sdb2", "swapon -f /dev/sdb2"], "answer": 2, "explain": "mkswapでスワップ用の署名を作成する。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・永続的なマウント設定を記述するファイル\n・ディスクのパーティションテーブルを一覧表示する", "choices": ["df -l", "/etc/fstab", "/etc/mtab", "fdisk -l"], "answer": [1, 3], "explain": "fstabは起動時などのマウント設定に使う。 fdisk -l はパーティション情報の表示に使う。"},
{"category": "第2部：模擬試験", "question": "次のうち、カーネルが認識する現在のマウント情報を参照するために使うものはどれですか。", "choices": ["/etc/mtab", "/etc/fstab", "/proc/mounts", "/proc/cpuinfo"], "answer": 2, "explain": "procfs内のmountsには現在のマウント情報がある。"},
{"category": "第2部：模擬試験", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・PCIデバイスの情報を一覧表示する", "choices": ["lsusb", "lspci", "blkid", "lsmod"], "answer": 1, "explain": "PCIバス上のデバイス確認には lspci を使う。"},
{"category": "第2部：模擬試験", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・USBデバイスの情報を一覧表示する", "choices": ["lspci", "lsblk", "lsusb", "uname"], "answer": 2, "explain": "USB機器の列挙には lsusb を使う。"},
{"category": "第2部：模擬試験", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・現在ロード済みのカーネルモジュールを表示する", "choices": ["lsmod", "depmod", "modprobe", "modinfo"], "answer": 0, "explain": "lsmod はロード済みモジュールの一覧を表示する。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・モジュール e1000e の詳細情報を確認する\n・アンマウント済みXFSファイルシステムを修復する", "choices": ["xfs_repair /dev/sdb1", "modinfo e1000e", "lsmod e1000e", "fsck.ext4 /dev/sdb1"], "answer": [1, 0], "explain": "modinfo はモジュールの説明や依存関係を表示する。 XFSの修復にはxfs_repairを使う。"},
{"category": "第2部：模擬試験", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・ロード済みモジュール e1000e を依存関係を考慮して外す", "choices": ["rmmod -a e1000e", "modprobe -r e1000e", "modinfo -r e1000e", "lsmod -r e1000e"], "answer": 1, "explain": "modprobe -r はモジュールの取り外しに使える。"},
{"category": "第2部：模擬試験", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・現在の起動に限ったジャーナルを確認する", "choices": ["journalctl -f", "journalctl -b", "systemctl -b", "dmesg -w"], "answer": 1, "explain": "journalctl の -b は起動単位で絞り込む。"},
{"category": "第2部：模擬試験", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・カーネルリングバッファのメッセージを確認する", "choices": ["syslog", "dmesg", "logger", "uptime"], "answer": 1, "explain": "dmesg はカーネルの出力確認に適する。"},
{"category": "第2部：模擬試験", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・systemd環境で再起動を要求する", "choices": ["systemctl isolate", "systemctl reload", "systemctl enable", "systemctl reboot"], "answer": 3, "explain": "reboot サブコマンドは再起動を要求する。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・systemd環境で電源断を要求する\n・インストール済みRPMパッケージを一覧表示する", "choices": ["rpm -qa", "rpm -qf", "systemctl poweroff", "systemctl daemon-reload"], "answer": [2, 0], "explain": "poweroff は電源断を実行する。 rpm -qa は全インストール済みパッケージを照会する。"},
{"category": "第2部：模擬試験", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・救援用ターゲットへ切り替える", "choices": ["systemctl reload rescue.target", "systemctl stop rescue.target", "systemctl isolate rescue.target", "systemctl enable rescue.target"], "answer": 2, "explain": "isolate は指定ターゲットへ切り替える。"},
{"category": "第2部：模擬試験", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・カーネルが公開するデバイスやドライバ情報を参照する仮想ファイルシステム", "choices": ["/tmp", "/sys", "/srv", "/opt"], "answer": 1, "explain": "sysfs は通常 /sys にマウントされる。"},
{"category": "第2部：模擬試験", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・デバイス検出に応じて /dev のデバイスノードを管理する仕組み", "choices": ["udev", "atd", "syslog", "cron"], "answer": 0, "explain": "udev は動的デバイス管理を担う。"},
{"category": "第2部：模擬試験", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・実ルートをマウントする前に必要なドライバ等を提供する初期RAMファイルシステム", "choices": ["swap", "ESP", "initramfs", "MBR"], "answer": 2, "explain": "initramfs は起動初期に利用される。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・EFI System Partition 上のブートローダーを利用できるファームウェア方式\n・DNFでhttpdパッケージをインストールする", "choices": ["dnf erase httpd", "ext4", "dnf install httpd", "UEFI"], "answer": [3, 2], "explain": "UEFIではESPを用いる構成が一般的である。 dnf install はリポジトリからパッケージを導入する。"},
{"category": "第2部：模擬試験", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・Linuxカーネルを選択・起動する代表的なブートローダー", "choices": ["GRUB", "systemd", "cron", "udev"], "answer": 0, "explain": "GRUBはカーネル引数を渡して起動できる。"},
{"category": "第2部：模擬試験", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・ディスクのパーティションテーブルを一覧表示する", "choices": ["du -l", "free -l", "fdisk -l", "df -l"], "answer": 2, "explain": "fdisk -l はパーティション情報の表示に使う。"},
{"category": "第2部：模擬試験", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・ブロックデバイスのツリー表示を行う", "choices": ["lsblk", "lsmod", "lspci", "lsusb"], "answer": 0, "explain": "lsblk はディスク・パーティション・LVM等を見やすく表示する。"},
{"category": "第2部：模擬試験", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・ブロックデバイスのUUIDやファイルシステム種別を調べる", "choices": ["id", "file", "stat", "blkid"], "answer": 3, "explain": "blkid はUUID指定のfstab作成時にも有用である。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・未使用パーティション /dev/sdb1 にext4ファイルシステムを作成する\n・APTでtreeパッケージをインストールする", "choices": ["apt remove tree", "mkfs.ext4 /dev/sdb1", "apt install tree", "fsck.ext4 /dev/sdb1"], "answer": [1, 2], "explain": "mkfs.ext4 はext4ファイルシステムを新規作成する。 installはパッケージの導入を行う。"},
{"category": "第2部：模擬試験", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・アンマウント済みext4ファイルシステムを検査・修復する", "choices": ["fsck.ext4 /dev/sdb1", "resize2fs /dev/sdb1", "mount -o repair /dev/sdb1", "xfs_growfs /dev/sdb1"], "answer": 0, "explain": "ext系の検査にはfsck.ext4を使用できる。"},
{"category": "第2部：模擬試験", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・アンマウント済みXFSファイルシステムを修復する", "choices": ["xfs_growfs /dev/sdb1", "fsck.ext4 /dev/sdb1", "xfs_repair /dev/sdb1", "tune2fs /dev/sdb1"], "answer": 2, "explain": "XFSの修復にはxfs_repairを使う。"},
{"category": "第2部：模擬試験", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・マウント済みXFSを拡張する", "choices": ["fsck.xfs /data", "xfs_repair /data", "xfs_growfs /data", "resize2fs /data"], "answer": 2, "explain": "XFSは縮小できないが、マウント中に拡張できる。"},
{"category": "第2部：模擬試験", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・拡張済みのext系ファイルシステムをサイズ変更する", "choices": ["xfs_growfs /dev/sdb1", "resize2fs /dev/sdb1", "fsck /dev/sdb1", "fdisk /dev/sdb1"], "answer": 1, "explain": "resize2fs はext2/3/4向けである。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・fstabに記述された未マウント項目をまとめてマウントする\n・/var/log配下の通常ファイルで7日未満前に更新されたものを探す", "choices": ["umount -a", "mount -a", "grep -r -7 /var/log", "find /var/log -type f -mtime -7"], "answer": [1, 3], "explain": "mount -a はfstabの検証にも利用される。 findの-typeと-mtimeで条件指定する。"},
{"category": "第2部：模擬試験", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・デバイス名の変更に影響されにくいfstabでのデバイス指定方法", "choices": ["inode", "UUID", "UID", "PID"], "answer": 1, "explain": "UUIDはファイルシステムを一意に識別する。"},
{"category": "第2部：模擬試験", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・インストール済みRPMパッケージを一覧表示する", "choices": ["rpm -e", "rpm -V", "rpm -qf", "rpm -qa"], "answer": 3, "explain": "rpm -qa は全インストール済みパッケージを照会する。"},
{"category": "第2部：模擬試験", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・指定ファイルを所有するRPMパッケージを調べる", "choices": ["rpm -ql /usr/bin/ssh", "rpm -qf /usr/bin/ssh", "rpm -U /usr/bin/ssh", "rpm -e /usr/bin/ssh"], "answer": 1, "explain": "rpm -qf はファイルからパッケージを逆引きする。"},
{"category": "第2部：模擬試験", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・RPMパッケージに含まれるファイルを一覧表示する", "choices": ["rpm -e openssh-clients", "rpm -Va openssh-clients", "rpm -qf openssh-clients", "rpm -ql openssh-clients"], "answer": 3, "explain": "rpm -ql はインストール済みパッケージのファイル一覧を表示する。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・RPMパッケージ nano を削除する\n・数値として行をソートする", "choices": ["sort -r numbers.txt", "rpm -e nano", "rpm -i nano", "sort -n numbers.txt"], "answer": [1, 3], "explain": "rpm -e はアンインストールに使う。 -nは数値順での比較を指定する。"},
{"category": "第2部：模擬試験", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・RPMファイルをインストールまたは更新する", "choices": ["rpm -e pkg.rpm", "rpm -q pkg.rpm", "rpm -V pkg.rpm", "rpm -Uvh pkg.rpm"], "answer": 3, "explain": "-Uはupgrade/install、-vと-hは進捗表示に使われる。"},
{"category": "第2部：模擬試験", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・DNFでhttpdパッケージをインストールする", "choices": ["dnf clean httpd", "dnf info httpd", "dnf erase httpd", "dnf install httpd"], "answer": 3, "explain": "dnf install はリポジトリからパッケージを導入する。"},
{"category": "第2部：模擬試験", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・DNFでhttpdパッケージを削除する", "choices": ["dnf install httpd", "dnf remove httpd", "dnf check-update httpd", "dnf list httpd"], "answer": 1, "explain": "removeはインストール済みパッケージを削除する。"},
{"category": "第2部：模擬試験", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・DNFのパッケージグループを導入する", "choices": ["dnf group install \"Development Tools\"", "dnf group remove all", "dnf install group", "dnf group info install"], "answer": 0, "explain": "group installでグループ単位の導入ができる。"},
{"category": "第2部：模擬試験", "question": "次の作業に適したコマンドまたは用語を2つ選んでください。\n・APTのパッケージ一覧情報を更新する\n・追記されるログを継続監視する", "choices": ["tail -f /var/log/messages", "tail -n /var/log/messages", "apt upgrade", "apt update"], "answer": [3, 0], "explain": "apt updateだけでは通常パッケージ本体は更新しない。 -fはファイル末尾への追記を追いかける。"},
{"category": "第2部：模擬試験", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・APTで更新可能なインストール済みパッケージを更新する", "choices": ["apt purge", "apt search", "apt upgrade", "apt update"], "answer": 2, "explain": "update後にupgradeを実行してパッケージを更新する。"},
{"category": "第2部：模擬試験", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・APTでtreeパッケージをインストールする", "choices": ["apt install tree", "apt update tree", "apt remove tree", "apt list tree"], "answer": 0, "explain": "installはパッケージの導入を行う。"},
{"category": "第2部：模擬試験", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・APTでtreeパッケージを削除する", "choices": ["apt policy tree", "apt update tree", "apt remove tree", "apt install tree"], "answer": 2, "explain": "removeは設定ファイルを残す場合がある。"},
{"category": "第2部：模擬試験", "question": "障害調査・設定作業で次の操作が必要です。適切なものを一つ選んでください。\n・指定ファイルを所有するDebianパッケージを調べる", "choices": ["dpkg -i /bin/ls", "dpkg -L /bin/ls", "dpkg -S /bin/ls", "dpkg -r /bin/ls"], "answer": 2, "explain": "dpkg -S はファイルから所有パッケージを照会する。"},
];
/* 出典タグ: 出題カードの背景色分けに使う(LPIC101_オリジナル問題集_718問.txt由来 = 薄いグレー) */
ORIGINAL_QUESTIONS.forEach(q => { q.origin = "extra"; });
APPLIED_QUESTIONS.push(...ORIGINAL_QUESTIONS);

/* ---- 追加分: LPIC_101_Mock_Exam_718Q.txt より(718問) ---- */
const MOCK_EXAM_QUESTIONS = [
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールの一覧を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "insmod", "depmod"], "answer": 0, "explain": "lsmodコマンドは、現在Linuxカーネルにロードされているモジュール一覧を/proc/modulesから取得して表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "モジュールの依存関係（modules.dep）を解決しながらロード/削除を行うコマンドはどれか。", "choices": ["insmod", "modprobe", "rmmod", "lsmod"], "answer": 1, "explain": "modprobeコマンドは、モジュール間の依存関係を考慮して自動的に関連モジュールを含めてロード/削除を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "依存関係を無視し、指定したモジュールファイル（.ko）を直接カーネルにロードするコマンドはどれか。", "choices": ["modprobe", "lsmod", "insmod", "depmod"], "answer": 2, "explain": "insmodコマンドは、指定されたモジュールファイルを直接ロードします。依存関係の解決は行いません。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールを取り外す（アンロードする）コマンドはどれか。", "choices": ["rmmod", "modprobe -a", "depmod", "insmod -r"], "answer": 0, "explain": "rmmodコマンドは、ロード済みのカーネルモジュールを指定してアンロードします。modprobe -r でも同様の操作が可能です。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの詳細情報（説明、作者、ライセンス、パラメータ等）を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "modinfo", "depmod"], "answer": 2, "explain": "modinfoコマンドは、カーネルモジュールファイルのメタデータや使用可能なパラメータ情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの依存関係ファイル（modules.dep）を作成・更新するコマンドはどれか。", "choices": ["modprobe", "depmod", "insmod", "lsmod"], "answer": 1, "explain": "depmodコマンドは、/lib/modules/$(uname -r) 配下のモジュールをスキャンし、依存関係を定義したmodules.depファイルを生成・更新します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールの一覧を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "insmod", "depmod"], "answer": 0, "explain": "lsmodコマンドは、現在Linuxカーネルにロードされているモジュール一覧を/proc/modulesから取得して表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "モジュールの依存関係（modules.dep）を解決しながらロード/削除を行うコマンドはどれか。", "choices": ["insmod", "modprobe", "rmmod", "lsmod"], "answer": 1, "explain": "modprobeコマンドは、モジュール間の依存関係を考慮して自動的に関連モジュールを含めてロード/削除を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "依存関係を無視し、指定したモジュールファイル（.ko）を直接カーネルにロードするコマンドはどれか。", "choices": ["modprobe", "lsmod", "insmod", "depmod"], "answer": 2, "explain": "insmodコマンドは、指定されたモジュールファイルを直接ロードします。依存関係の解決は行いません。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールを取り外す（アンロードする）コマンドはどれか。", "choices": ["rmmod", "modprobe -a", "depmod", "insmod -r"], "answer": 0, "explain": "rmmodコマンドは、ロード済みのカーネルモジュールを指定してアンロードします。modprobe -r でも同様の操作が可能です。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの詳細情報（説明、作者、ライセンス、パラメータ等）を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "modinfo", "depmod"], "answer": 2, "explain": "modinfoコマンドは、カーネルモジュールファイルのメタデータや使用可能なパラメータ情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの依存関係ファイル（modules.dep）を作成・更新するコマンドはどれか。", "choices": ["modprobe", "depmod", "insmod", "lsmod"], "answer": 1, "explain": "depmodコマンドは、/lib/modules/$(uname -r) 配下のモジュールをスキャンし、依存関係を定義したmodules.depファイルを生成・更新します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールの一覧を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "insmod", "depmod"], "answer": 0, "explain": "lsmodコマンドは、現在Linuxカーネルにロードされているモジュール一覧を/proc/modulesから取得して表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "モジュールの依存関係（modules.dep）を解決しながらロード/削除を行うコマンドはどれか。", "choices": ["insmod", "modprobe", "rmmod", "lsmod"], "answer": 1, "explain": "modprobeコマンドは、モジュール間の依存関係を考慮して自動的に関連モジュールを含めてロード/削除を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "依存関係を無視し、指定したモジュールファイル（.ko）を直接カーネルにロードするコマンドはどれか。", "choices": ["modprobe", "lsmod", "insmod", "depmod"], "answer": 2, "explain": "insmodコマンドは、指定されたモジュールファイルを直接ロードします。依存関係の解決は行いません。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールを取り外す（アンロードする）コマンドはどれか。", "choices": ["rmmod", "modprobe -a", "depmod", "insmod -r"], "answer": 0, "explain": "rmmodコマンドは、ロード済みのカーネルモジュールを指定してアンロードします。modprobe -r でも同様の操作が可能です。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの詳細情報（説明、作者、ライセンス、パラメータ等）を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "modinfo", "depmod"], "answer": 2, "explain": "modinfoコマンドは、カーネルモジュールファイルのメタデータや使用可能なパラメータ情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの依存関係ファイル（modules.dep）を作成・更新するコマンドはどれか。", "choices": ["modprobe", "depmod", "insmod", "lsmod"], "answer": 1, "explain": "depmodコマンドは、/lib/modules/$(uname -r) 配下のモジュールをスキャンし、依存関係を定義したmodules.depファイルを生成・更新します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールの一覧を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "insmod", "depmod"], "answer": 0, "explain": "lsmodコマンドは、現在Linuxカーネルにロードされているモジュール一覧を/proc/modulesから取得して表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "モジュールの依存関係（modules.dep）を解決しながらロード/削除を行うコマンドはどれか。", "choices": ["insmod", "modprobe", "rmmod", "lsmod"], "answer": 1, "explain": "modprobeコマンドは、モジュール間の依存関係を考慮して自動的に関連モジュールを含めてロード/削除を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "依存関係を無視し、指定したモジュールファイル（.ko）を直接カーネルにロードするコマンドはどれか。", "choices": ["modprobe", "lsmod", "insmod", "depmod"], "answer": 2, "explain": "insmodコマンドは、指定されたモジュールファイルを直接ロードします。依存関係の解決は行いません。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールを取り外す（アンロードする）コマンドはどれか。", "choices": ["rmmod", "modprobe -a", "depmod", "insmod -r"], "answer": 0, "explain": "rmmodコマンドは、ロード済みのカーネルモジュールを指定してアンロードします。modprobe -r でも同様の操作が可能です。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの詳細情報（説明、作者、ライセンス、パラメータ等）を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "modinfo", "depmod"], "answer": 2, "explain": "modinfoコマンドは、カーネルモジュールファイルのメタデータや使用可能なパラメータ情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの依存関係ファイル（modules.dep）を作成・更新するコマンドはどれか。", "choices": ["modprobe", "depmod", "insmod", "lsmod"], "answer": 1, "explain": "depmodコマンドは、/lib/modules/$(uname -r) 配下のモジュールをスキャンし、依存関係を定義したmodules.depファイルを生成・更新します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールの一覧を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "insmod", "depmod"], "answer": 0, "explain": "lsmodコマンドは、現在Linuxカーネルにロードされているモジュール一覧を/proc/modulesから取得して表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "モジュールの依存関係（modules.dep）を解決しながらロード/削除を行うコマンドはどれか。", "choices": ["insmod", "modprobe", "rmmod", "lsmod"], "answer": 1, "explain": "modprobeコマンドは、モジュール間の依存関係を考慮して自動的に関連モジュールを含めてロード/削除を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "依存関係を無視し、指定したモジュールファイル（.ko）を直接カーネルにロードするコマンドはどれか。", "choices": ["modprobe", "lsmod", "insmod", "depmod"], "answer": 2, "explain": "insmodコマンドは、指定されたモジュールファイルを直接ロードします。依存関係の解決は行いません。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールを取り外す（アンロードする）コマンドはどれか。", "choices": ["rmmod", "modprobe -a", "depmod", "insmod -r"], "answer": 0, "explain": "rmmodコマンドは、ロード済みのカーネルモジュールを指定してアンロードします。modprobe -r でも同様の操作が可能です。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの詳細情報（説明、作者、ライセンス、パラメータ等）を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "modinfo", "depmod"], "answer": 2, "explain": "modinfoコマンドは、カーネルモジュールファイルのメタデータや使用可能なパラメータ情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの依存関係ファイル（modules.dep）を作成・更新するコマンドはどれか。", "choices": ["modprobe", "depmod", "insmod", "lsmod"], "answer": 1, "explain": "depmodコマンドは、/lib/modules/$(uname -r) 配下のモジュールをスキャンし、依存関係を定義したmodules.depファイルを生成・更新します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールの一覧を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "insmod", "depmod"], "answer": 0, "explain": "lsmodコマンドは、現在Linuxカーネルにロードされているモジュール一覧を/proc/modulesから取得して表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "モジュールの依存関係（modules.dep）を解決しながらロード/削除を行うコマンドはどれか。", "choices": ["insmod", "modprobe", "rmmod", "lsmod"], "answer": 1, "explain": "modprobeコマンドは、モジュール間の依存関係を考慮して自動的に関連モジュールを含めてロード/削除を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "依存関係を無視し、指定したモジュールファイル（.ko）を直接カーネルにロードするコマンドはどれか。", "choices": ["modprobe", "lsmod", "insmod", "depmod"], "answer": 2, "explain": "insmodコマンドは、指定されたモジュールファイルを直接ロードします。依存関係の解決は行いません。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールを取り外す（アンロードする）コマンドはどれか。", "choices": ["rmmod", "modprobe -a", "depmod", "insmod -r"], "answer": 0, "explain": "rmmodコマンドは、ロード済みのカーネルモジュールを指定してアンロードします。modprobe -r でも同様の操作が可能です。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの詳細情報（説明、作者、ライセンス、パラメータ等）を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "modinfo", "depmod"], "answer": 2, "explain": "modinfoコマンドは、カーネルモジュールファイルのメタデータや使用可能なパラメータ情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの依存関係ファイル（modules.dep）を作成・更新するコマンドはどれか。", "choices": ["modprobe", "depmod", "insmod", "lsmod"], "answer": 1, "explain": "depmodコマンドは、/lib/modules/$(uname -r) 配下のモジュールをスキャンし、依存関係を定義したmodules.depファイルを生成・更新します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールの一覧を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "insmod", "depmod"], "answer": 0, "explain": "lsmodコマンドは、現在Linuxカーネルにロードされているモジュール一覧を/proc/modulesから取得して表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "モジュールの依存関係（modules.dep）を解決しながらロード/削除を行うコマンドはどれか。", "choices": ["insmod", "modprobe", "rmmod", "lsmod"], "answer": 1, "explain": "modprobeコマンドは、モジュール間の依存関係を考慮して自動的に関連モジュールを含めてロード/削除を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "依存関係を無視し、指定したモジュールファイル（.ko）を直接カーネルにロードするコマンドはどれか。", "choices": ["modprobe", "lsmod", "insmod", "depmod"], "answer": 2, "explain": "insmodコマンドは、指定されたモジュールファイルを直接ロードします。依存関係の解決は行いません。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールを取り外す（アンロードする）コマンドはどれか。", "choices": ["rmmod", "modprobe -a", "depmod", "insmod -r"], "answer": 0, "explain": "rmmodコマンドは、ロード済みのカーネルモジュールを指定してアンロードします。modprobe -r でも同様の操作が可能です。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの詳細情報（説明、作者、ライセンス、パラメータ等）を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "modinfo", "depmod"], "answer": 2, "explain": "modinfoコマンドは、カーネルモジュールファイルのメタデータや使用可能なパラメータ情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの依存関係ファイル（modules.dep）を作成・更新するコマンドはどれか。", "choices": ["modprobe", "depmod", "insmod", "lsmod"], "answer": 1, "explain": "depmodコマンドは、/lib/modules/$(uname -r) 配下のモジュールをスキャンし、依存関係を定義したmodules.depファイルを生成・更新します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールの一覧を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "insmod", "depmod"], "answer": 0, "explain": "lsmodコマンドは、現在Linuxカーネルにロードされているモジュール一覧を/proc/modulesから取得して表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "モジュールの依存関係（modules.dep）を解決しながらロード/削除を行うコマンドはどれか。", "choices": ["insmod", "modprobe", "rmmod", "lsmod"], "answer": 1, "explain": "modprobeコマンドは、モジュール間の依存関係を考慮して自動的に関連モジュールを含めてロード/削除を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "依存関係を無視し、指定したモジュールファイル（.ko）を直接カーネルにロードするコマンドはどれか。", "choices": ["modprobe", "lsmod", "insmod", "depmod"], "answer": 2, "explain": "insmodコマンドは、指定されたモジュールファイルを直接ロードします。依存関係の解決は行いません。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールを取り外す（アンロードする）コマンドはどれか。", "choices": ["rmmod", "modprobe -a", "depmod", "insmod -r"], "answer": 0, "explain": "rmmodコマンドは、ロード済みのカーネルモジュールを指定してアンロードします。modprobe -r でも同様の操作が可能です。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの詳細情報（説明、作者、ライセンス、パラメータ等）を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "modinfo", "depmod"], "answer": 2, "explain": "modinfoコマンドは、カーネルモジュールファイルのメタデータや使用可能なパラメータ情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの依存関係ファイル（modules.dep）を作成・更新するコマンドはどれか。", "choices": ["modprobe", "depmod", "insmod", "lsmod"], "answer": 1, "explain": "depmodコマンドは、/lib/modules/$(uname -r) 配下のモジュールをスキャンし、依存関係を定義したmodules.depファイルを生成・更新します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールの一覧を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "insmod", "depmod"], "answer": 0, "explain": "lsmodコマンドは、現在Linuxカーネルにロードされているモジュール一覧を/proc/modulesから取得して表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "モジュールの依存関係（modules.dep）を解決しながらロード/削除を行うコマンドはどれか。", "choices": ["insmod", "modprobe", "rmmod", "lsmod"], "answer": 1, "explain": "modprobeコマンドは、モジュール間の依存関係を考慮して自動的に関連モジュールを含めてロード/削除を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "依存関係を無視し、指定したモジュールファイル（.ko）を直接カーネルにロードするコマンドはどれか。", "choices": ["modprobe", "lsmod", "insmod", "depmod"], "answer": 2, "explain": "insmodコマンドは、指定されたモジュールファイルを直接ロードします。依存関係の解決は行いません。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールを取り外す（アンロードする）コマンドはどれか。", "choices": ["rmmod", "modprobe -a", "depmod", "insmod -r"], "answer": 0, "explain": "rmmodコマンドは、ロード済みのカーネルモジュールを指定してアンロードします。modprobe -r でも同様の操作が可能です。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの詳細情報（説明、作者、ライセンス、パラメータ等）を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "modinfo", "depmod"], "answer": 2, "explain": "modinfoコマンドは、カーネルモジュールファイルのメタデータや使用可能なパラメータ情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの依存関係ファイル（modules.dep）を作成・更新するコマンドはどれか。", "choices": ["modprobe", "depmod", "insmod", "lsmod"], "answer": 1, "explain": "depmodコマンドは、/lib/modules/$(uname -r) 配下のモジュールをスキャンし、依存関係を定義したmodules.depファイルを生成・更新します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールの一覧を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "insmod", "depmod"], "answer": 0, "explain": "lsmodコマンドは、現在Linuxカーネルにロードされているモジュール一覧を/proc/modulesから取得して表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "モジュールの依存関係（modules.dep）を解決しながらロード/削除を行うコマンドはどれか。", "choices": ["insmod", "modprobe", "rmmod", "lsmod"], "answer": 1, "explain": "modprobeコマンドは、モジュール間の依存関係を考慮して自動的に関連モジュールを含めてロード/削除を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "依存関係を無視し、指定したモジュールファイル（.ko）を直接カーネルにロードするコマンドはどれか。", "choices": ["modprobe", "lsmod", "insmod", "depmod"], "answer": 2, "explain": "insmodコマンドは、指定されたモジュールファイルを直接ロードします。依存関係の解決は行いません。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールを取り外す（アンロードする）コマンドはどれか。", "choices": ["rmmod", "modprobe -a", "depmod", "insmod -r"], "answer": 0, "explain": "rmmodコマンドは、ロード済みのカーネルモジュールを指定してアンロードします。modprobe -r でも同様の操作が可能です。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの詳細情報（説明、作者、ライセンス、パラメータ等）を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "modinfo", "depmod"], "answer": 2, "explain": "modinfoコマンドは、カーネルモジュールファイルのメタデータや使用可能なパラメータ情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの依存関係ファイル（modules.dep）を作成・更新するコマンドはどれか。", "choices": ["modprobe", "depmod", "insmod", "lsmod"], "answer": 1, "explain": "depmodコマンドは、/lib/modules/$(uname -r) 配下のモジュールをスキャンし、依存関係を定義したmodules.depファイルを生成・更新します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールの一覧を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "insmod", "depmod"], "answer": 0, "explain": "lsmodコマンドは、現在Linuxカーネルにロードされているモジュール一覧を/proc/modulesから取得して表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "モジュールの依存関係（modules.dep）を解決しながらロード/削除を行うコマンドはどれか。", "choices": ["insmod", "modprobe", "rmmod", "lsmod"], "answer": 1, "explain": "modprobeコマンドは、モジュール間の依存関係を考慮して自動的に関連モジュールを含めてロード/削除を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "依存関係を無視し、指定したモジュールファイル（.ko）を直接カーネルにロードするコマンドはどれか。", "choices": ["modprobe", "lsmod", "insmod", "depmod"], "answer": 2, "explain": "insmodコマンドは、指定されたモジュールファイルを直接ロードします。依存関係の解決は行いません。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールを取り外す（アンロードする）コマンドはどれか。", "choices": ["rmmod", "modprobe -a", "depmod", "insmod -r"], "answer": 0, "explain": "rmmodコマンドは、ロード済みのカーネルモジュールを指定してアンロードします。modprobe -r でも同様の操作が可能です。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの詳細情報（説明、作者、ライセンス、パラメータ等）を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "modinfo", "depmod"], "answer": 2, "explain": "modinfoコマンドは、カーネルモジュールファイルのメタデータや使用可能なパラメータ情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの依存関係ファイル（modules.dep）を作成・更新するコマンドはどれか。", "choices": ["modprobe", "depmod", "insmod", "lsmod"], "answer": 1, "explain": "depmodコマンドは、/lib/modules/$(uname -r) 配下のモジュールをスキャンし、依存関係を定義したmodules.depファイルを生成・更新します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールの一覧を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "insmod", "depmod"], "answer": 0, "explain": "lsmodコマンドは、現在Linuxカーネルにロードされているモジュール一覧を/proc/modulesから取得して表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "モジュールの依存関係（modules.dep）を解決しながらロード/削除を行うコマンドはどれか。", "choices": ["insmod", "modprobe", "rmmod", "lsmod"], "answer": 1, "explain": "modprobeコマンドは、モジュール間の依存関係を考慮して自動的に関連モジュールを含めてロード/削除を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "依存関係を無視し、指定したモジュールファイル（.ko）を直接カーネルにロードするコマンドはどれか。", "choices": ["modprobe", "lsmod", "insmod", "depmod"], "answer": 2, "explain": "insmodコマンドは、指定されたモジュールファイルを直接ロードします。依存関係の解決は行いません。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールを取り外す（アンロードする）コマンドはどれか。", "choices": ["rmmod", "modprobe -a", "depmod", "insmod -r"], "answer": 0, "explain": "rmmodコマンドは、ロード済みのカーネルモジュールを指定してアンロードします。modprobe -r でも同様の操作が可能です。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの詳細情報（説明、作者、ライセンス、パラメータ等）を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "modinfo", "depmod"], "answer": 2, "explain": "modinfoコマンドは、カーネルモジュールファイルのメタデータや使用可能なパラメータ情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの依存関係ファイル（modules.dep）を作成・更新するコマンドはどれか。", "choices": ["modprobe", "depmod", "insmod", "lsmod"], "answer": 1, "explain": "depmodコマンドは、/lib/modules/$(uname -r) 配下のモジュールをスキャンし、依存関係を定義したmodules.depファイルを生成・更新します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールの一覧を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "insmod", "depmod"], "answer": 0, "explain": "lsmodコマンドは、現在Linuxカーネルにロードされているモジュール一覧を/proc/modulesから取得して表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "モジュールの依存関係（modules.dep）を解決しながらロード/削除を行うコマンドはどれか。", "choices": ["insmod", "modprobe", "rmmod", "lsmod"], "answer": 1, "explain": "modprobeコマンドは、モジュール間の依存関係を考慮して自動的に関連モジュールを含めてロード/削除を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "依存関係を無視し、指定したモジュールファイル（.ko）を直接カーネルにロードするコマンドはどれか。", "choices": ["modprobe", "lsmod", "insmod", "depmod"], "answer": 2, "explain": "insmodコマンドは、指定されたモジュールファイルを直接ロードします。依存関係の解決は行いません。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールを取り外す（アンロードする）コマンドはどれか。", "choices": ["rmmod", "modprobe -a", "depmod", "insmod -r"], "answer": 0, "explain": "rmmodコマンドは、ロード済みのカーネルモジュールを指定してアンロードします。modprobe -r でも同様の操作が可能です。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの詳細情報（説明、作者、ライセンス、パラメータ等）を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "modinfo", "depmod"], "answer": 2, "explain": "modinfoコマンドは、カーネルモジュールファイルのメタデータや使用可能なパラメータ情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの依存関係ファイル（modules.dep）を作成・更新するコマンドはどれか。", "choices": ["modprobe", "depmod", "insmod", "lsmod"], "answer": 1, "explain": "depmodコマンドは、/lib/modules/$(uname -r) 配下のモジュールをスキャンし、依存関係を定義したmodules.depファイルを生成・更新します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールの一覧を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "insmod", "depmod"], "answer": 0, "explain": "lsmodコマンドは、現在Linuxカーネルにロードされているモジュール一覧を/proc/modulesから取得して表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "モジュールの依存関係（modules.dep）を解決しながらロード/削除を行うコマンドはどれか。", "choices": ["insmod", "modprobe", "rmmod", "lsmod"], "answer": 1, "explain": "modprobeコマンドは、モジュール間の依存関係を考慮して自動的に関連モジュールを含めてロード/削除を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "依存関係を無視し、指定したモジュールファイル（.ko）を直接カーネルにロードするコマンドはどれか。", "choices": ["modprobe", "lsmod", "insmod", "depmod"], "answer": 2, "explain": "insmodコマンドは、指定されたモジュールファイルを直接ロードします。依存関係の解決は行いません。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールを取り外す（アンロードする）コマンドはどれか。", "choices": ["rmmod", "modprobe -a", "depmod", "insmod -r"], "answer": 0, "explain": "rmmodコマンドは、ロード済みのカーネルモジュールを指定してアンロードします。modprobe -r でも同様の操作が可能です。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの詳細情報（説明、作者、ライセンス、パラメータ等）を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "modinfo", "depmod"], "answer": 2, "explain": "modinfoコマンドは、カーネルモジュールファイルのメタデータや使用可能なパラメータ情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの依存関係ファイル（modules.dep）を作成・更新するコマンドはどれか。", "choices": ["modprobe", "depmod", "insmod", "lsmod"], "answer": 1, "explain": "depmodコマンドは、/lib/modules/$(uname -r) 配下のモジュールをスキャンし、依存関係を定義したmodules.depファイルを生成・更新します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールの一覧を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "insmod", "depmod"], "answer": 0, "explain": "lsmodコマンドは、現在Linuxカーネルにロードされているモジュール一覧を/proc/modulesから取得して表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "モジュールの依存関係（modules.dep）を解決しながらロード/削除を行うコマンドはどれか。", "choices": ["insmod", "modprobe", "rmmod", "lsmod"], "answer": 1, "explain": "modprobeコマンドは、モジュール間の依存関係を考慮して自動的に関連モジュールを含めてロード/削除を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "依存関係を無視し、指定したモジュールファイル（.ko）を直接カーネルにロードするコマンドはどれか。", "choices": ["modprobe", "lsmod", "insmod", "depmod"], "answer": 2, "explain": "insmodコマンドは、指定されたモジュールファイルを直接ロードします。依存関係の解決は行いません。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールを取り外す（アンロードする）コマンドはどれか。", "choices": ["rmmod", "modprobe -a", "depmod", "insmod -r"], "answer": 0, "explain": "rmmodコマンドは、ロード済みのカーネルモジュールを指定してアンロードします。modprobe -r でも同様の操作が可能です。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの詳細情報（説明、作者、ライセンス、パラメータ等）を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "modinfo", "depmod"], "answer": 2, "explain": "modinfoコマンドは、カーネルモジュールファイルのメタデータや使用可能なパラメータ情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの依存関係ファイル（modules.dep）を作成・更新するコマンドはどれか。", "choices": ["modprobe", "depmod", "insmod", "lsmod"], "answer": 1, "explain": "depmodコマンドは、/lib/modules/$(uname -r) 配下のモジュールをスキャンし、依存関係を定義したmodules.depファイルを生成・更新します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールの一覧を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "insmod", "depmod"], "answer": 0, "explain": "lsmodコマンドは、現在Linuxカーネルにロードされているモジュール一覧を/proc/modulesから取得して表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "モジュールの依存関係（modules.dep）を解決しながらロード/削除を行うコマンドはどれか。", "choices": ["insmod", "modprobe", "rmmod", "lsmod"], "answer": 1, "explain": "modprobeコマンドは、モジュール間の依存関係を考慮して自動的に関連モジュールを含めてロード/削除を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "依存関係を無視し、指定したモジュールファイル（.ko）を直接カーネルにロードするコマンドはどれか。", "choices": ["modprobe", "lsmod", "insmod", "depmod"], "answer": 2, "explain": "insmodコマンドは、指定されたモジュールファイルを直接ロードします。依存関係の解決は行いません。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールを取り外す（アンロードする）コマンドはどれか。", "choices": ["rmmod", "modprobe -a", "depmod", "insmod -r"], "answer": 0, "explain": "rmmodコマンドは、ロード済みのカーネルモジュールを指定してアンロードします。modprobe -r でも同様の操作が可能です。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの詳細情報（説明、作者、ライセンス、パラメータ等）を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "modinfo", "depmod"], "answer": 2, "explain": "modinfoコマンドは、カーネルモジュールファイルのメタデータや使用可能なパラメータ情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの依存関係ファイル（modules.dep）を作成・更新するコマンドはどれか。", "choices": ["modprobe", "depmod", "insmod", "lsmod"], "answer": 1, "explain": "depmodコマンドは、/lib/modules/$(uname -r) 配下のモジュールをスキャンし、依存関係を定義したmodules.depファイルを生成・更新します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールの一覧を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "insmod", "depmod"], "answer": 0, "explain": "lsmodコマンドは、現在Linuxカーネルにロードされているモジュール一覧を/proc/modulesから取得して表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "モジュールの依存関係（modules.dep）を解決しながらロード/削除を行うコマンドはどれか。", "choices": ["insmod", "modprobe", "rmmod", "lsmod"], "answer": 1, "explain": "modprobeコマンドは、モジュール間の依存関係を考慮して自動的に関連モジュールを含めてロード/削除を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "依存関係を無視し、指定したモジュールファイル（.ko）を直接カーネルにロードするコマンドはどれか。", "choices": ["modprobe", "lsmod", "insmod", "depmod"], "answer": 2, "explain": "insmodコマンドは、指定されたモジュールファイルを直接ロードします。依存関係の解決は行いません。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールを取り外す（アンロードする）コマンドはどれか。", "choices": ["rmmod", "modprobe -a", "depmod", "insmod -r"], "answer": 0, "explain": "rmmodコマンドは、ロード済みのカーネルモジュールを指定してアンロードします。modprobe -r でも同様の操作が可能です。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの詳細情報（説明、作者、ライセンス、パラメータ等）を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "modinfo", "depmod"], "answer": 2, "explain": "modinfoコマンドは、カーネルモジュールファイルのメタデータや使用可能なパラメータ情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの依存関係ファイル（modules.dep）を作成・更新するコマンドはどれか。", "choices": ["modprobe", "depmod", "insmod", "lsmod"], "answer": 1, "explain": "depmodコマンドは、/lib/modules/$(uname -r) 配下のモジュールをスキャンし、依存関係を定義したmodules.depファイルを生成・更新します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールの一覧を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "insmod", "depmod"], "answer": 0, "explain": "lsmodコマンドは、現在Linuxカーネルにロードされているモジュール一覧を/proc/modulesから取得して表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "モジュールの依存関係（modules.dep）を解決しながらロード/削除を行うコマンドはどれか。", "choices": ["insmod", "modprobe", "rmmod", "lsmod"], "answer": 1, "explain": "modprobeコマンドは、モジュール間の依存関係を考慮して自動的に関連モジュールを含めてロード/削除を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "依存関係を無視し、指定したモジュールファイル（.ko）を直接カーネルにロードするコマンドはどれか。", "choices": ["modprobe", "lsmod", "insmod", "depmod"], "answer": 2, "explain": "insmodコマンドは、指定されたモジュールファイルを直接ロードします。依存関係の解決は行いません。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールを取り外す（アンロードする）コマンドはどれか。", "choices": ["rmmod", "modprobe -a", "depmod", "insmod -r"], "answer": 0, "explain": "rmmodコマンドは、ロード済みのカーネルモジュールを指定してアンロードします。modprobe -r でも同様の操作が可能です。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの詳細情報（説明、作者、ライセンス、パラメータ等）を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "modinfo", "depmod"], "answer": 2, "explain": "modinfoコマンドは、カーネルモジュールファイルのメタデータや使用可能なパラメータ情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの依存関係ファイル（modules.dep）を作成・更新するコマンドはどれか。", "choices": ["modprobe", "depmod", "insmod", "lsmod"], "answer": 1, "explain": "depmodコマンドは、/lib/modules/$(uname -r) 配下のモジュールをスキャンし、依存関係を定義したmodules.depファイルを生成・更新します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールの一覧を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "insmod", "depmod"], "answer": 0, "explain": "lsmodコマンドは、現在Linuxカーネルにロードされているモジュール一覧を/proc/modulesから取得して表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "モジュールの依存関係（modules.dep）を解決しながらロード/削除を行うコマンドはどれか。", "choices": ["insmod", "modprobe", "rmmod", "lsmod"], "answer": 1, "explain": "modprobeコマンドは、モジュール間の依存関係を考慮して自動的に関連モジュールを含めてロード/削除を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "依存関係を無視し、指定したモジュールファイル（.ko）を直接カーネルにロードするコマンドはどれか。", "choices": ["modprobe", "lsmod", "insmod", "depmod"], "answer": 2, "explain": "insmodコマンドは、指定されたモジュールファイルを直接ロードします。依存関係の解決は行いません。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールを取り外す（アンロードする）コマンドはどれか。", "choices": ["rmmod", "modprobe -a", "depmod", "insmod -r"], "answer": 0, "explain": "rmmodコマンドは、ロード済みのカーネルモジュールを指定してアンロードします。modprobe -r でも同様の操作が可能です。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの詳細情報（説明、作者、ライセンス、パラメータ等）を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "modinfo", "depmod"], "answer": 2, "explain": "modinfoコマンドは、カーネルモジュールファイルのメタデータや使用可能なパラメータ情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの依存関係ファイル（modules.dep）を作成・更新するコマンドはどれか。", "choices": ["modprobe", "depmod", "insmod", "lsmod"], "answer": 1, "explain": "depmodコマンドは、/lib/modules/$(uname -r) 配下のモジュールをスキャンし、依存関係を定義したmodules.depファイルを生成・更新します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールの一覧を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "insmod", "depmod"], "answer": 0, "explain": "lsmodコマンドは、現在Linuxカーネルにロードされているモジュール一覧を/proc/modulesから取得して表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "モジュールの依存関係（modules.dep）を解決しながらロード/削除を行うコマンドはどれか。", "choices": ["insmod", "modprobe", "rmmod", "lsmod"], "answer": 1, "explain": "modprobeコマンドは、モジュール間の依存関係を考慮して自動的に関連モジュールを含めてロード/削除を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "依存関係を無視し、指定したモジュールファイル（.ko）を直接カーネルにロードするコマンドはどれか。", "choices": ["modprobe", "lsmod", "insmod", "depmod"], "answer": 2, "explain": "insmodコマンドは、指定されたモジュールファイルを直接ロードします。依存関係の解決は行いません。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ロードされているカーネルモジュールを取り外す（アンロードする）コマンドはどれか。", "choices": ["rmmod", "modprobe -a", "depmod", "insmod -r"], "answer": 0, "explain": "rmmodコマンドは、ロード済みのカーネルモジュールを指定してアンロードします。modprobe -r でも同様の操作が可能です。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの詳細情報（説明、作者、ライセンス、パラメータ等）を表示するコマンドはどれか。", "choices": ["lsmod", "modprobe", "modinfo", "depmod"], "answer": 2, "explain": "modinfoコマンドは、カーネルモジュールファイルのメタデータや使用可能なパラメータ情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "カーネルモジュールの依存関係ファイル（modules.dep）を作成・更新するコマンドはどれか。", "choices": ["modprobe", "depmod", "insmod", "lsmod"], "answer": 1, "explain": "depmodコマンドは、/lib/modules/$(uname -r) 配下のモジュールをスキャンし、依存関係を定義したmodules.depファイルを生成・更新します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Debian系システムにおいて、ローカルの.debパッケージをインストールするコマンドはどれか。", "choices": ["dpkg -i package.deb", "dpkg -r package.deb", "apt get package.deb", "dpkg -l package.deb"], "answer": 0, "explain": "dpkg -i (または --install) でDebianパッケージを直接インストールします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "インストール済みのDebianパッケージ一覧を表示するコマンドはどれか。", "choices": ["dpkg -l", "dpkg -s", "dpkg -L", "apt search"], "answer": 0, "explain": "dpkg -l (または --list) でインストールされているパッケージの一覧を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したDebianパッケージによってインストールされたファイル一覧を表示するコマンドはどれか。", "choices": ["dpkg -L package", "dpkg -l package", "dpkg -s package", "dpkg -S package"], "answer": 0, "explain": "dpkg -L (または --listfiles) は、パッケージに含まれるファイル群の展開先パスを表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのDebianパッケージからインストールされたかを検索するコマンドはどれか。", "choices": ["dpkg -S /path/to/file", "dpkg -L /path/to/file", "dpkg -s /path/to/file", "dpkg -search"], "answer": 0, "explain": "dpkg -S (または --search) は、指定ファイルを提供しているパッケージ名を検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "APTパッケージマネージャにおいて、リポジトリのパッケージ情報を更新するコマンドはどれか。", "choices": ["apt-get update", "apt-get upgrade", "apt-get dist-upgrade", "apt-get install"], "answer": 0, "explain": "apt-get update は /etc/apt/sources.list に記載されたリポジトリから最新のパッケージリスト情報を取得します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Red Hat系システムにおいて、RPMパッケージを詳細表示・進捗バー付きでインストールするコマンドはどれか。", "choices": ["rpm -ivh package.rpm", "rpm -Uvh package.rpm", "rpm -qa package.rpm", "rpm -qi package.rpm"], "answer": 0, "explain": "rpm -i でインストール、-v で詳細表示、-h でハッシュマーク（進捗バー）を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムにインストールされているすべてのRPMパッケージを表示するコマンドはどれか。", "choices": ["rpm -qa", "rpm -qi", "rpm -ql", "rpm -qf"], "answer": 0, "explain": "rpm -qa (query all) はインストール済みの全RPMパッケージを一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのRPMパッケージに含まれているかを調べるコマンドはどれか。", "choices": ["rpm -qf /path/to/file", "rpm -ql /path/to/file", "rpm -qi /path/to/file", "rpm -qc /path/to/file"], "answer": 0, "explain": "rpm -qf (query file) は、指定されたファイルを所有するRPMパッケージ名を返します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "YUMパッケージマネージャでキーワード検索を行うコマンドはどれか。", "choices": ["yum search keyword", "yum list keyword", "yum info keyword", "yum find keyword"], "answer": 0, "explain": "yum search はリポジトリ内のパッケージ名や説明文からキーワード検索を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Debian系システムにおいて、ローカルの.debパッケージをインストールするコマンドはどれか。", "choices": ["dpkg -i package.deb", "dpkg -r package.deb", "apt get package.deb", "dpkg -l package.deb"], "answer": 0, "explain": "dpkg -i (または --install) でDebianパッケージを直接インストールします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "インストール済みのDebianパッケージ一覧を表示するコマンドはどれか。", "choices": ["dpkg -l", "dpkg -s", "dpkg -L", "apt search"], "answer": 0, "explain": "dpkg -l (または --list) でインストールされているパッケージの一覧を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したDebianパッケージによってインストールされたファイル一覧を表示するコマンドはどれか。", "choices": ["dpkg -L package", "dpkg -l package", "dpkg -s package", "dpkg -S package"], "answer": 0, "explain": "dpkg -L (または --listfiles) は、パッケージに含まれるファイル群の展開先パスを表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのDebianパッケージからインストールされたかを検索するコマンドはどれか。", "choices": ["dpkg -S /path/to/file", "dpkg -L /path/to/file", "dpkg -s /path/to/file", "dpkg -search"], "answer": 0, "explain": "dpkg -S (または --search) は、指定ファイルを提供しているパッケージ名を検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "APTパッケージマネージャにおいて、リポジトリのパッケージ情報を更新するコマンドはどれか。", "choices": ["apt-get update", "apt-get upgrade", "apt-get dist-upgrade", "apt-get install"], "answer": 0, "explain": "apt-get update は /etc/apt/sources.list に記載されたリポジトリから最新のパッケージリスト情報を取得します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Red Hat系システムにおいて、RPMパッケージを詳細表示・進捗バー付きでインストールするコマンドはどれか。", "choices": ["rpm -ivh package.rpm", "rpm -Uvh package.rpm", "rpm -qa package.rpm", "rpm -qi package.rpm"], "answer": 0, "explain": "rpm -i でインストール、-v で詳細表示、-h でハッシュマーク（進捗バー）を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムにインストールされているすべてのRPMパッケージを表示するコマンドはどれか。", "choices": ["rpm -qa", "rpm -qi", "rpm -ql", "rpm -qf"], "answer": 0, "explain": "rpm -qa (query all) はインストール済みの全RPMパッケージを一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのRPMパッケージに含まれているかを調べるコマンドはどれか。", "choices": ["rpm -qf /path/to/file", "rpm -ql /path/to/file", "rpm -qi /path/to/file", "rpm -qc /path/to/file"], "answer": 0, "explain": "rpm -qf (query file) は、指定されたファイルを所有するRPMパッケージ名を返します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "YUMパッケージマネージャでキーワード検索を行うコマンドはどれか。", "choices": ["yum search keyword", "yum list keyword", "yum info keyword", "yum find keyword"], "answer": 0, "explain": "yum search はリポジトリ内のパッケージ名や説明文からキーワード検索を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Debian系システムにおいて、ローカルの.debパッケージをインストールするコマンドはどれか。", "choices": ["dpkg -i package.deb", "dpkg -r package.deb", "apt get package.deb", "dpkg -l package.deb"], "answer": 0, "explain": "dpkg -i (または --install) でDebianパッケージを直接インストールします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "インストール済みのDebianパッケージ一覧を表示するコマンドはどれか。", "choices": ["dpkg -l", "dpkg -s", "dpkg -L", "apt search"], "answer": 0, "explain": "dpkg -l (または --list) でインストールされているパッケージの一覧を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したDebianパッケージによってインストールされたファイル一覧を表示するコマンドはどれか。", "choices": ["dpkg -L package", "dpkg -l package", "dpkg -s package", "dpkg -S package"], "answer": 0, "explain": "dpkg -L (または --listfiles) は、パッケージに含まれるファイル群の展開先パスを表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのDebianパッケージからインストールされたかを検索するコマンドはどれか。", "choices": ["dpkg -S /path/to/file", "dpkg -L /path/to/file", "dpkg -s /path/to/file", "dpkg -search"], "answer": 0, "explain": "dpkg -S (または --search) は、指定ファイルを提供しているパッケージ名を検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "APTパッケージマネージャにおいて、リポジトリのパッケージ情報を更新するコマンドはどれか。", "choices": ["apt-get update", "apt-get upgrade", "apt-get dist-upgrade", "apt-get install"], "answer": 0, "explain": "apt-get update は /etc/apt/sources.list に記載されたリポジトリから最新のパッケージリスト情報を取得します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Red Hat系システムにおいて、RPMパッケージを詳細表示・進捗バー付きでインストールするコマンドはどれか。", "choices": ["rpm -ivh package.rpm", "rpm -Uvh package.rpm", "rpm -qa package.rpm", "rpm -qi package.rpm"], "answer": 0, "explain": "rpm -i でインストール、-v で詳細表示、-h でハッシュマーク（進捗バー）を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムにインストールされているすべてのRPMパッケージを表示するコマンドはどれか。", "choices": ["rpm -qa", "rpm -qi", "rpm -ql", "rpm -qf"], "answer": 0, "explain": "rpm -qa (query all) はインストール済みの全RPMパッケージを一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのRPMパッケージに含まれているかを調べるコマンドはどれか。", "choices": ["rpm -qf /path/to/file", "rpm -ql /path/to/file", "rpm -qi /path/to/file", "rpm -qc /path/to/file"], "answer": 0, "explain": "rpm -qf (query file) は、指定されたファイルを所有するRPMパッケージ名を返します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "YUMパッケージマネージャでキーワード検索を行うコマンドはどれか。", "choices": ["yum search keyword", "yum list keyword", "yum info keyword", "yum find keyword"], "answer": 0, "explain": "yum search はリポジトリ内のパッケージ名や説明文からキーワード検索を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Debian系システムにおいて、ローカルの.debパッケージをインストールするコマンドはどれか。", "choices": ["dpkg -i package.deb", "dpkg -r package.deb", "apt get package.deb", "dpkg -l package.deb"], "answer": 0, "explain": "dpkg -i (または --install) でDebianパッケージを直接インストールします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "インストール済みのDebianパッケージ一覧を表示するコマンドはどれか。", "choices": ["dpkg -l", "dpkg -s", "dpkg -L", "apt search"], "answer": 0, "explain": "dpkg -l (または --list) でインストールされているパッケージの一覧を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したDebianパッケージによってインストールされたファイル一覧を表示するコマンドはどれか。", "choices": ["dpkg -L package", "dpkg -l package", "dpkg -s package", "dpkg -S package"], "answer": 0, "explain": "dpkg -L (または --listfiles) は、パッケージに含まれるファイル群の展開先パスを表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのDebianパッケージからインストールされたかを検索するコマンドはどれか。", "choices": ["dpkg -S /path/to/file", "dpkg -L /path/to/file", "dpkg -s /path/to/file", "dpkg -search"], "answer": 0, "explain": "dpkg -S (または --search) は、指定ファイルを提供しているパッケージ名を検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "APTパッケージマネージャにおいて、リポジトリのパッケージ情報を更新するコマンドはどれか。", "choices": ["apt-get update", "apt-get upgrade", "apt-get dist-upgrade", "apt-get install"], "answer": 0, "explain": "apt-get update は /etc/apt/sources.list に記載されたリポジトリから最新のパッケージリスト情報を取得します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Red Hat系システムにおいて、RPMパッケージを詳細表示・進捗バー付きでインストールするコマンドはどれか。", "choices": ["rpm -ivh package.rpm", "rpm -Uvh package.rpm", "rpm -qa package.rpm", "rpm -qi package.rpm"], "answer": 0, "explain": "rpm -i でインストール、-v で詳細表示、-h でハッシュマーク（進捗バー）を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムにインストールされているすべてのRPMパッケージを表示するコマンドはどれか。", "choices": ["rpm -qa", "rpm -qi", "rpm -ql", "rpm -qf"], "answer": 0, "explain": "rpm -qa (query all) はインストール済みの全RPMパッケージを一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのRPMパッケージに含まれているかを調べるコマンドはどれか。", "choices": ["rpm -qf /path/to/file", "rpm -ql /path/to/file", "rpm -qi /path/to/file", "rpm -qc /path/to/file"], "answer": 0, "explain": "rpm -qf (query file) は、指定されたファイルを所有するRPMパッケージ名を返します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "YUMパッケージマネージャでキーワード検索を行うコマンドはどれか。", "choices": ["yum search keyword", "yum list keyword", "yum info keyword", "yum find keyword"], "answer": 0, "explain": "yum search はリポジトリ内のパッケージ名や説明文からキーワード検索を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Debian系システムにおいて、ローカルの.debパッケージをインストールするコマンドはどれか。", "choices": ["dpkg -i package.deb", "dpkg -r package.deb", "apt get package.deb", "dpkg -l package.deb"], "answer": 0, "explain": "dpkg -i (または --install) でDebianパッケージを直接インストールします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "インストール済みのDebianパッケージ一覧を表示するコマンドはどれか。", "choices": ["dpkg -l", "dpkg -s", "dpkg -L", "apt search"], "answer": 0, "explain": "dpkg -l (または --list) でインストールされているパッケージの一覧を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したDebianパッケージによってインストールされたファイル一覧を表示するコマンドはどれか。", "choices": ["dpkg -L package", "dpkg -l package", "dpkg -s package", "dpkg -S package"], "answer": 0, "explain": "dpkg -L (または --listfiles) は、パッケージに含まれるファイル群の展開先パスを表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのDebianパッケージからインストールされたかを検索するコマンドはどれか。", "choices": ["dpkg -S /path/to/file", "dpkg -L /path/to/file", "dpkg -s /path/to/file", "dpkg -search"], "answer": 0, "explain": "dpkg -S (または --search) は、指定ファイルを提供しているパッケージ名を検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "APTパッケージマネージャにおいて、リポジトリのパッケージ情報を更新するコマンドはどれか。", "choices": ["apt-get update", "apt-get upgrade", "apt-get dist-upgrade", "apt-get install"], "answer": 0, "explain": "apt-get update は /etc/apt/sources.list に記載されたリポジトリから最新のパッケージリスト情報を取得します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Red Hat系システムにおいて、RPMパッケージを詳細表示・進捗バー付きでインストールするコマンドはどれか。", "choices": ["rpm -ivh package.rpm", "rpm -Uvh package.rpm", "rpm -qa package.rpm", "rpm -qi package.rpm"], "answer": 0, "explain": "rpm -i でインストール、-v で詳細表示、-h でハッシュマーク（進捗バー）を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムにインストールされているすべてのRPMパッケージを表示するコマンドはどれか。", "choices": ["rpm -qa", "rpm -qi", "rpm -ql", "rpm -qf"], "answer": 0, "explain": "rpm -qa (query all) はインストール済みの全RPMパッケージを一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのRPMパッケージに含まれているかを調べるコマンドはどれか。", "choices": ["rpm -qf /path/to/file", "rpm -ql /path/to/file", "rpm -qi /path/to/file", "rpm -qc /path/to/file"], "answer": 0, "explain": "rpm -qf (query file) は、指定されたファイルを所有するRPMパッケージ名を返します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "YUMパッケージマネージャでキーワード検索を行うコマンドはどれか。", "choices": ["yum search keyword", "yum list keyword", "yum info keyword", "yum find keyword"], "answer": 0, "explain": "yum search はリポジトリ内のパッケージ名や説明文からキーワード検索を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Debian系システムにおいて、ローカルの.debパッケージをインストールするコマンドはどれか。", "choices": ["dpkg -i package.deb", "dpkg -r package.deb", "apt get package.deb", "dpkg -l package.deb"], "answer": 0, "explain": "dpkg -i (または --install) でDebianパッケージを直接インストールします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "インストール済みのDebianパッケージ一覧を表示するコマンドはどれか。", "choices": ["dpkg -l", "dpkg -s", "dpkg -L", "apt search"], "answer": 0, "explain": "dpkg -l (または --list) でインストールされているパッケージの一覧を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したDebianパッケージによってインストールされたファイル一覧を表示するコマンドはどれか。", "choices": ["dpkg -L package", "dpkg -l package", "dpkg -s package", "dpkg -S package"], "answer": 0, "explain": "dpkg -L (または --listfiles) は、パッケージに含まれるファイル群の展開先パスを表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのDebianパッケージからインストールされたかを検索するコマンドはどれか。", "choices": ["dpkg -S /path/to/file", "dpkg -L /path/to/file", "dpkg -s /path/to/file", "dpkg -search"], "answer": 0, "explain": "dpkg -S (または --search) は、指定ファイルを提供しているパッケージ名を検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "APTパッケージマネージャにおいて、リポジトリのパッケージ情報を更新するコマンドはどれか。", "choices": ["apt-get update", "apt-get upgrade", "apt-get dist-upgrade", "apt-get install"], "answer": 0, "explain": "apt-get update は /etc/apt/sources.list に記載されたリポジトリから最新のパッケージリスト情報を取得します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Red Hat系システムにおいて、RPMパッケージを詳細表示・進捗バー付きでインストールするコマンドはどれか。", "choices": ["rpm -ivh package.rpm", "rpm -Uvh package.rpm", "rpm -qa package.rpm", "rpm -qi package.rpm"], "answer": 0, "explain": "rpm -i でインストール、-v で詳細表示、-h でハッシュマーク（進捗バー）を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムにインストールされているすべてのRPMパッケージを表示するコマンドはどれか。", "choices": ["rpm -qa", "rpm -qi", "rpm -ql", "rpm -qf"], "answer": 0, "explain": "rpm -qa (query all) はインストール済みの全RPMパッケージを一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのRPMパッケージに含まれているかを調べるコマンドはどれか。", "choices": ["rpm -qf /path/to/file", "rpm -ql /path/to/file", "rpm -qi /path/to/file", "rpm -qc /path/to/file"], "answer": 0, "explain": "rpm -qf (query file) は、指定されたファイルを所有するRPMパッケージ名を返します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "YUMパッケージマネージャでキーワード検索を行うコマンドはどれか。", "choices": ["yum search keyword", "yum list keyword", "yum info keyword", "yum find keyword"], "answer": 0, "explain": "yum search はリポジトリ内のパッケージ名や説明文からキーワード検索を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Debian系システムにおいて、ローカルの.debパッケージをインストールするコマンドはどれか。", "choices": ["dpkg -i package.deb", "dpkg -r package.deb", "apt get package.deb", "dpkg -l package.deb"], "answer": 0, "explain": "dpkg -i (または --install) でDebianパッケージを直接インストールします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "インストール済みのDebianパッケージ一覧を表示するコマンドはどれか。", "choices": ["dpkg -l", "dpkg -s", "dpkg -L", "apt search"], "answer": 0, "explain": "dpkg -l (または --list) でインストールされているパッケージの一覧を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したDebianパッケージによってインストールされたファイル一覧を表示するコマンドはどれか。", "choices": ["dpkg -L package", "dpkg -l package", "dpkg -s package", "dpkg -S package"], "answer": 0, "explain": "dpkg -L (または --listfiles) は、パッケージに含まれるファイル群の展開先パスを表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのDebianパッケージからインストールされたかを検索するコマンドはどれか。", "choices": ["dpkg -S /path/to/file", "dpkg -L /path/to/file", "dpkg -s /path/to/file", "dpkg -search"], "answer": 0, "explain": "dpkg -S (または --search) は、指定ファイルを提供しているパッケージ名を検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "APTパッケージマネージャにおいて、リポジトリのパッケージ情報を更新するコマンドはどれか。", "choices": ["apt-get update", "apt-get upgrade", "apt-get dist-upgrade", "apt-get install"], "answer": 0, "explain": "apt-get update は /etc/apt/sources.list に記載されたリポジトリから最新のパッケージリスト情報を取得します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Red Hat系システムにおいて、RPMパッケージを詳細表示・進捗バー付きでインストールするコマンドはどれか。", "choices": ["rpm -ivh package.rpm", "rpm -Uvh package.rpm", "rpm -qa package.rpm", "rpm -qi package.rpm"], "answer": 0, "explain": "rpm -i でインストール、-v で詳細表示、-h でハッシュマーク（進捗バー）を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムにインストールされているすべてのRPMパッケージを表示するコマンドはどれか。", "choices": ["rpm -qa", "rpm -qi", "rpm -ql", "rpm -qf"], "answer": 0, "explain": "rpm -qa (query all) はインストール済みの全RPMパッケージを一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのRPMパッケージに含まれているかを調べるコマンドはどれか。", "choices": ["rpm -qf /path/to/file", "rpm -ql /path/to/file", "rpm -qi /path/to/file", "rpm -qc /path/to/file"], "answer": 0, "explain": "rpm -qf (query file) は、指定されたファイルを所有するRPMパッケージ名を返します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "YUMパッケージマネージャでキーワード検索を行うコマンドはどれか。", "choices": ["yum search keyword", "yum list keyword", "yum info keyword", "yum find keyword"], "answer": 0, "explain": "yum search はリポジトリ内のパッケージ名や説明文からキーワード検索を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Debian系システムにおいて、ローカルの.debパッケージをインストールするコマンドはどれか。", "choices": ["dpkg -i package.deb", "dpkg -r package.deb", "apt get package.deb", "dpkg -l package.deb"], "answer": 0, "explain": "dpkg -i (または --install) でDebianパッケージを直接インストールします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "インストール済みのDebianパッケージ一覧を表示するコマンドはどれか。", "choices": ["dpkg -l", "dpkg -s", "dpkg -L", "apt search"], "answer": 0, "explain": "dpkg -l (または --list) でインストールされているパッケージの一覧を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したDebianパッケージによってインストールされたファイル一覧を表示するコマンドはどれか。", "choices": ["dpkg -L package", "dpkg -l package", "dpkg -s package", "dpkg -S package"], "answer": 0, "explain": "dpkg -L (または --listfiles) は、パッケージに含まれるファイル群の展開先パスを表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのDebianパッケージからインストールされたかを検索するコマンドはどれか。", "choices": ["dpkg -S /path/to/file", "dpkg -L /path/to/file", "dpkg -s /path/to/file", "dpkg -search"], "answer": 0, "explain": "dpkg -S (または --search) は、指定ファイルを提供しているパッケージ名を検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "APTパッケージマネージャにおいて、リポジトリのパッケージ情報を更新するコマンドはどれか。", "choices": ["apt-get update", "apt-get upgrade", "apt-get dist-upgrade", "apt-get install"], "answer": 0, "explain": "apt-get update は /etc/apt/sources.list に記載されたリポジトリから最新のパッケージリスト情報を取得します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Red Hat系システムにおいて、RPMパッケージを詳細表示・進捗バー付きでインストールするコマンドはどれか。", "choices": ["rpm -ivh package.rpm", "rpm -Uvh package.rpm", "rpm -qa package.rpm", "rpm -qi package.rpm"], "answer": 0, "explain": "rpm -i でインストール、-v で詳細表示、-h でハッシュマーク（進捗バー）を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムにインストールされているすべてのRPMパッケージを表示するコマンドはどれか。", "choices": ["rpm -qa", "rpm -qi", "rpm -ql", "rpm -qf"], "answer": 0, "explain": "rpm -qa (query all) はインストール済みの全RPMパッケージを一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのRPMパッケージに含まれているかを調べるコマンドはどれか。", "choices": ["rpm -qf /path/to/file", "rpm -ql /path/to/file", "rpm -qi /path/to/file", "rpm -qc /path/to/file"], "answer": 0, "explain": "rpm -qf (query file) は、指定されたファイルを所有するRPMパッケージ名を返します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "YUMパッケージマネージャでキーワード検索を行うコマンドはどれか。", "choices": ["yum search keyword", "yum list keyword", "yum info keyword", "yum find keyword"], "answer": 0, "explain": "yum search はリポジトリ内のパッケージ名や説明文からキーワード検索を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Debian系システムにおいて、ローカルの.debパッケージをインストールするコマンドはどれか。", "choices": ["dpkg -i package.deb", "dpkg -r package.deb", "apt get package.deb", "dpkg -l package.deb"], "answer": 0, "explain": "dpkg -i (または --install) でDebianパッケージを直接インストールします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "インストール済みのDebianパッケージ一覧を表示するコマンドはどれか。", "choices": ["dpkg -l", "dpkg -s", "dpkg -L", "apt search"], "answer": 0, "explain": "dpkg -l (または --list) でインストールされているパッケージの一覧を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したDebianパッケージによってインストールされたファイル一覧を表示するコマンドはどれか。", "choices": ["dpkg -L package", "dpkg -l package", "dpkg -s package", "dpkg -S package"], "answer": 0, "explain": "dpkg -L (または --listfiles) は、パッケージに含まれるファイル群の展開先パスを表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのDebianパッケージからインストールされたかを検索するコマンドはどれか。", "choices": ["dpkg -S /path/to/file", "dpkg -L /path/to/file", "dpkg -s /path/to/file", "dpkg -search"], "answer": 0, "explain": "dpkg -S (または --search) は、指定ファイルを提供しているパッケージ名を検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "APTパッケージマネージャにおいて、リポジトリのパッケージ情報を更新するコマンドはどれか。", "choices": ["apt-get update", "apt-get upgrade", "apt-get dist-upgrade", "apt-get install"], "answer": 0, "explain": "apt-get update は /etc/apt/sources.list に記載されたリポジトリから最新のパッケージリスト情報を取得します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Red Hat系システムにおいて、RPMパッケージを詳細表示・進捗バー付きでインストールするコマンドはどれか。", "choices": ["rpm -ivh package.rpm", "rpm -Uvh package.rpm", "rpm -qa package.rpm", "rpm -qi package.rpm"], "answer": 0, "explain": "rpm -i でインストール、-v で詳細表示、-h でハッシュマーク（進捗バー）を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムにインストールされているすべてのRPMパッケージを表示するコマンドはどれか。", "choices": ["rpm -qa", "rpm -qi", "rpm -ql", "rpm -qf"], "answer": 0, "explain": "rpm -qa (query all) はインストール済みの全RPMパッケージを一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのRPMパッケージに含まれているかを調べるコマンドはどれか。", "choices": ["rpm -qf /path/to/file", "rpm -ql /path/to/file", "rpm -qi /path/to/file", "rpm -qc /path/to/file"], "answer": 0, "explain": "rpm -qf (query file) は、指定されたファイルを所有するRPMパッケージ名を返します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "YUMパッケージマネージャでキーワード検索を行うコマンドはどれか。", "choices": ["yum search keyword", "yum list keyword", "yum info keyword", "yum find keyword"], "answer": 0, "explain": "yum search はリポジトリ内のパッケージ名や説明文からキーワード検索を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Debian系システムにおいて、ローカルの.debパッケージをインストールするコマンドはどれか。", "choices": ["dpkg -i package.deb", "dpkg -r package.deb", "apt get package.deb", "dpkg -l package.deb"], "answer": 0, "explain": "dpkg -i (または --install) でDebianパッケージを直接インストールします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "インストール済みのDebianパッケージ一覧を表示するコマンドはどれか。", "choices": ["dpkg -l", "dpkg -s", "dpkg -L", "apt search"], "answer": 0, "explain": "dpkg -l (または --list) でインストールされているパッケージの一覧を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したDebianパッケージによってインストールされたファイル一覧を表示するコマンドはどれか。", "choices": ["dpkg -L package", "dpkg -l package", "dpkg -s package", "dpkg -S package"], "answer": 0, "explain": "dpkg -L (または --listfiles) は、パッケージに含まれるファイル群の展開先パスを表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのDebianパッケージからインストールされたかを検索するコマンドはどれか。", "choices": ["dpkg -S /path/to/file", "dpkg -L /path/to/file", "dpkg -s /path/to/file", "dpkg -search"], "answer": 0, "explain": "dpkg -S (または --search) は、指定ファイルを提供しているパッケージ名を検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "APTパッケージマネージャにおいて、リポジトリのパッケージ情報を更新するコマンドはどれか。", "choices": ["apt-get update", "apt-get upgrade", "apt-get dist-upgrade", "apt-get install"], "answer": 0, "explain": "apt-get update は /etc/apt/sources.list に記載されたリポジトリから最新のパッケージリスト情報を取得します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Red Hat系システムにおいて、RPMパッケージを詳細表示・進捗バー付きでインストールするコマンドはどれか。", "choices": ["rpm -ivh package.rpm", "rpm -Uvh package.rpm", "rpm -qa package.rpm", "rpm -qi package.rpm"], "answer": 0, "explain": "rpm -i でインストール、-v で詳細表示、-h でハッシュマーク（進捗バー）を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムにインストールされているすべてのRPMパッケージを表示するコマンドはどれか。", "choices": ["rpm -qa", "rpm -qi", "rpm -ql", "rpm -qf"], "answer": 0, "explain": "rpm -qa (query all) はインストール済みの全RPMパッケージを一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのRPMパッケージに含まれているかを調べるコマンドはどれか。", "choices": ["rpm -qf /path/to/file", "rpm -ql /path/to/file", "rpm -qi /path/to/file", "rpm -qc /path/to/file"], "answer": 0, "explain": "rpm -qf (query file) は、指定されたファイルを所有するRPMパッケージ名を返します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "YUMパッケージマネージャでキーワード検索を行うコマンドはどれか。", "choices": ["yum search keyword", "yum list keyword", "yum info keyword", "yum find keyword"], "answer": 0, "explain": "yum search はリポジトリ内のパッケージ名や説明文からキーワード検索を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Debian系システムにおいて、ローカルの.debパッケージをインストールするコマンドはどれか。", "choices": ["dpkg -i package.deb", "dpkg -r package.deb", "apt get package.deb", "dpkg -l package.deb"], "answer": 0, "explain": "dpkg -i (または --install) でDebianパッケージを直接インストールします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "インストール済みのDebianパッケージ一覧を表示するコマンドはどれか。", "choices": ["dpkg -l", "dpkg -s", "dpkg -L", "apt search"], "answer": 0, "explain": "dpkg -l (または --list) でインストールされているパッケージの一覧を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したDebianパッケージによってインストールされたファイル一覧を表示するコマンドはどれか。", "choices": ["dpkg -L package", "dpkg -l package", "dpkg -s package", "dpkg -S package"], "answer": 0, "explain": "dpkg -L (または --listfiles) は、パッケージに含まれるファイル群の展開先パスを表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのDebianパッケージからインストールされたかを検索するコマンドはどれか。", "choices": ["dpkg -S /path/to/file", "dpkg -L /path/to/file", "dpkg -s /path/to/file", "dpkg -search"], "answer": 0, "explain": "dpkg -S (または --search) は、指定ファイルを提供しているパッケージ名を検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "APTパッケージマネージャにおいて、リポジトリのパッケージ情報を更新するコマンドはどれか。", "choices": ["apt-get update", "apt-get upgrade", "apt-get dist-upgrade", "apt-get install"], "answer": 0, "explain": "apt-get update は /etc/apt/sources.list に記載されたリポジトリから最新のパッケージリスト情報を取得します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Red Hat系システムにおいて、RPMパッケージを詳細表示・進捗バー付きでインストールするコマンドはどれか。", "choices": ["rpm -ivh package.rpm", "rpm -Uvh package.rpm", "rpm -qa package.rpm", "rpm -qi package.rpm"], "answer": 0, "explain": "rpm -i でインストール、-v で詳細表示、-h でハッシュマーク（進捗バー）を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムにインストールされているすべてのRPMパッケージを表示するコマンドはどれか。", "choices": ["rpm -qa", "rpm -qi", "rpm -ql", "rpm -qf"], "answer": 0, "explain": "rpm -qa (query all) はインストール済みの全RPMパッケージを一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのRPMパッケージに含まれているかを調べるコマンドはどれか。", "choices": ["rpm -qf /path/to/file", "rpm -ql /path/to/file", "rpm -qi /path/to/file", "rpm -qc /path/to/file"], "answer": 0, "explain": "rpm -qf (query file) は、指定されたファイルを所有するRPMパッケージ名を返します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "YUMパッケージマネージャでキーワード検索を行うコマンドはどれか。", "choices": ["yum search keyword", "yum list keyword", "yum info keyword", "yum find keyword"], "answer": 0, "explain": "yum search はリポジトリ内のパッケージ名や説明文からキーワード検索を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Debian系システムにおいて、ローカルの.debパッケージをインストールするコマンドはどれか。", "choices": ["dpkg -i package.deb", "dpkg -r package.deb", "apt get package.deb", "dpkg -l package.deb"], "answer": 0, "explain": "dpkg -i (または --install) でDebianパッケージを直接インストールします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "インストール済みのDebianパッケージ一覧を表示するコマンドはどれか。", "choices": ["dpkg -l", "dpkg -s", "dpkg -L", "apt search"], "answer": 0, "explain": "dpkg -l (または --list) でインストールされているパッケージの一覧を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したDebianパッケージによってインストールされたファイル一覧を表示するコマンドはどれか。", "choices": ["dpkg -L package", "dpkg -l package", "dpkg -s package", "dpkg -S package"], "answer": 0, "explain": "dpkg -L (または --listfiles) は、パッケージに含まれるファイル群の展開先パスを表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのDebianパッケージからインストールされたかを検索するコマンドはどれか。", "choices": ["dpkg -S /path/to/file", "dpkg -L /path/to/file", "dpkg -s /path/to/file", "dpkg -search"], "answer": 0, "explain": "dpkg -S (または --search) は、指定ファイルを提供しているパッケージ名を検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "APTパッケージマネージャにおいて、リポジトリのパッケージ情報を更新するコマンドはどれか。", "choices": ["apt-get update", "apt-get upgrade", "apt-get dist-upgrade", "apt-get install"], "answer": 0, "explain": "apt-get update は /etc/apt/sources.list に記載されたリポジトリから最新のパッケージリスト情報を取得します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Red Hat系システムにおいて、RPMパッケージを詳細表示・進捗バー付きでインストールするコマンドはどれか。", "choices": ["rpm -ivh package.rpm", "rpm -Uvh package.rpm", "rpm -qa package.rpm", "rpm -qi package.rpm"], "answer": 0, "explain": "rpm -i でインストール、-v で詳細表示、-h でハッシュマーク（進捗バー）を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムにインストールされているすべてのRPMパッケージを表示するコマンドはどれか。", "choices": ["rpm -qa", "rpm -qi", "rpm -ql", "rpm -qf"], "answer": 0, "explain": "rpm -qa (query all) はインストール済みの全RPMパッケージを一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのRPMパッケージに含まれているかを調べるコマンドはどれか。", "choices": ["rpm -qf /path/to/file", "rpm -ql /path/to/file", "rpm -qi /path/to/file", "rpm -qc /path/to/file"], "answer": 0, "explain": "rpm -qf (query file) は、指定されたファイルを所有するRPMパッケージ名を返します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "YUMパッケージマネージャでキーワード検索を行うコマンドはどれか。", "choices": ["yum search keyword", "yum list keyword", "yum info keyword", "yum find keyword"], "answer": 0, "explain": "yum search はリポジトリ内のパッケージ名や説明文からキーワード検索を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Debian系システムにおいて、ローカルの.debパッケージをインストールするコマンドはどれか。", "choices": ["dpkg -i package.deb", "dpkg -r package.deb", "apt get package.deb", "dpkg -l package.deb"], "answer": 0, "explain": "dpkg -i (または --install) でDebianパッケージを直接インストールします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "インストール済みのDebianパッケージ一覧を表示するコマンドはどれか。", "choices": ["dpkg -l", "dpkg -s", "dpkg -L", "apt search"], "answer": 0, "explain": "dpkg -l (または --list) でインストールされているパッケージの一覧を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したDebianパッケージによってインストールされたファイル一覧を表示するコマンドはどれか。", "choices": ["dpkg -L package", "dpkg -l package", "dpkg -s package", "dpkg -S package"], "answer": 0, "explain": "dpkg -L (または --listfiles) は、パッケージに含まれるファイル群の展開先パスを表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのDebianパッケージからインストールされたかを検索するコマンドはどれか。", "choices": ["dpkg -S /path/to/file", "dpkg -L /path/to/file", "dpkg -s /path/to/file", "dpkg -search"], "answer": 0, "explain": "dpkg -S (または --search) は、指定ファイルを提供しているパッケージ名を検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "APTパッケージマネージャにおいて、リポジトリのパッケージ情報を更新するコマンドはどれか。", "choices": ["apt-get update", "apt-get upgrade", "apt-get dist-upgrade", "apt-get install"], "answer": 0, "explain": "apt-get update は /etc/apt/sources.list に記載されたリポジトリから最新のパッケージリスト情報を取得します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Red Hat系システムにおいて、RPMパッケージを詳細表示・進捗バー付きでインストールするコマンドはどれか。", "choices": ["rpm -ivh package.rpm", "rpm -Uvh package.rpm", "rpm -qa package.rpm", "rpm -qi package.rpm"], "answer": 0, "explain": "rpm -i でインストール、-v で詳細表示、-h でハッシュマーク（進捗バー）を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムにインストールされているすべてのRPMパッケージを表示するコマンドはどれか。", "choices": ["rpm -qa", "rpm -qi", "rpm -ql", "rpm -qf"], "answer": 0, "explain": "rpm -qa (query all) はインストール済みの全RPMパッケージを一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのRPMパッケージに含まれているかを調べるコマンドはどれか。", "choices": ["rpm -qf /path/to/file", "rpm -ql /path/to/file", "rpm -qi /path/to/file", "rpm -qc /path/to/file"], "answer": 0, "explain": "rpm -qf (query file) は、指定されたファイルを所有するRPMパッケージ名を返します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "YUMパッケージマネージャでキーワード検索を行うコマンドはどれか。", "choices": ["yum search keyword", "yum list keyword", "yum info keyword", "yum find keyword"], "answer": 0, "explain": "yum search はリポジトリ内のパッケージ名や説明文からキーワード検索を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Debian系システムにおいて、ローカルの.debパッケージをインストールするコマンドはどれか。", "choices": ["dpkg -i package.deb", "dpkg -r package.deb", "apt get package.deb", "dpkg -l package.deb"], "answer": 0, "explain": "dpkg -i (または --install) でDebianパッケージを直接インストールします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "インストール済みのDebianパッケージ一覧を表示するコマンドはどれか。", "choices": ["dpkg -l", "dpkg -s", "dpkg -L", "apt search"], "answer": 0, "explain": "dpkg -l (または --list) でインストールされているパッケージの一覧を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したDebianパッケージによってインストールされたファイル一覧を表示するコマンドはどれか。", "choices": ["dpkg -L package", "dpkg -l package", "dpkg -s package", "dpkg -S package"], "answer": 0, "explain": "dpkg -L (または --listfiles) は、パッケージに含まれるファイル群の展開先パスを表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのDebianパッケージからインストールされたかを検索するコマンドはどれか。", "choices": ["dpkg -S /path/to/file", "dpkg -L /path/to/file", "dpkg -s /path/to/file", "dpkg -search"], "answer": 0, "explain": "dpkg -S (または --search) は、指定ファイルを提供しているパッケージ名を検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "APTパッケージマネージャにおいて、リポジトリのパッケージ情報を更新するコマンドはどれか。", "choices": ["apt-get update", "apt-get upgrade", "apt-get dist-upgrade", "apt-get install"], "answer": 0, "explain": "apt-get update は /etc/apt/sources.list に記載されたリポジトリから最新のパッケージリスト情報を取得します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Red Hat系システムにおいて、RPMパッケージを詳細表示・進捗バー付きでインストールするコマンドはどれか。", "choices": ["rpm -ivh package.rpm", "rpm -Uvh package.rpm", "rpm -qa package.rpm", "rpm -qi package.rpm"], "answer": 0, "explain": "rpm -i でインストール、-v で詳細表示、-h でハッシュマーク（進捗バー）を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムにインストールされているすべてのRPMパッケージを表示するコマンドはどれか。", "choices": ["rpm -qa", "rpm -qi", "rpm -ql", "rpm -qf"], "answer": 0, "explain": "rpm -qa (query all) はインストール済みの全RPMパッケージを一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのRPMパッケージに含まれているかを調べるコマンドはどれか。", "choices": ["rpm -qf /path/to/file", "rpm -ql /path/to/file", "rpm -qi /path/to/file", "rpm -qc /path/to/file"], "answer": 0, "explain": "rpm -qf (query file) は、指定されたファイルを所有するRPMパッケージ名を返します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "YUMパッケージマネージャでキーワード検索を行うコマンドはどれか。", "choices": ["yum search keyword", "yum list keyword", "yum info keyword", "yum find keyword"], "answer": 0, "explain": "yum search はリポジトリ内のパッケージ名や説明文からキーワード検索を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Debian系システムにおいて、ローカルの.debパッケージをインストールするコマンドはどれか。", "choices": ["dpkg -i package.deb", "dpkg -r package.deb", "apt get package.deb", "dpkg -l package.deb"], "answer": 0, "explain": "dpkg -i (または --install) でDebianパッケージを直接インストールします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "インストール済みのDebianパッケージ一覧を表示するコマンドはどれか。", "choices": ["dpkg -l", "dpkg -s", "dpkg -L", "apt search"], "answer": 0, "explain": "dpkg -l (または --list) でインストールされているパッケージの一覧を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したDebianパッケージによってインストールされたファイル一覧を表示するコマンドはどれか。", "choices": ["dpkg -L package", "dpkg -l package", "dpkg -s package", "dpkg -S package"], "answer": 0, "explain": "dpkg -L (または --listfiles) は、パッケージに含まれるファイル群の展開先パスを表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのDebianパッケージからインストールされたかを検索するコマンドはどれか。", "choices": ["dpkg -S /path/to/file", "dpkg -L /path/to/file", "dpkg -s /path/to/file", "dpkg -search"], "answer": 0, "explain": "dpkg -S (または --search) は、指定ファイルを提供しているパッケージ名を検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "APTパッケージマネージャにおいて、リポジトリのパッケージ情報を更新するコマンドはどれか。", "choices": ["apt-get update", "apt-get upgrade", "apt-get dist-upgrade", "apt-get install"], "answer": 0, "explain": "apt-get update は /etc/apt/sources.list に記載されたリポジトリから最新のパッケージリスト情報を取得します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Red Hat系システムにおいて、RPMパッケージを詳細表示・進捗バー付きでインストールするコマンドはどれか。", "choices": ["rpm -ivh package.rpm", "rpm -Uvh package.rpm", "rpm -qa package.rpm", "rpm -qi package.rpm"], "answer": 0, "explain": "rpm -i でインストール、-v で詳細表示、-h でハッシュマーク（進捗バー）を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムにインストールされているすべてのRPMパッケージを表示するコマンドはどれか。", "choices": ["rpm -qa", "rpm -qi", "rpm -ql", "rpm -qf"], "answer": 0, "explain": "rpm -qa (query all) はインストール済みの全RPMパッケージを一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのRPMパッケージに含まれているかを調べるコマンドはどれか。", "choices": ["rpm -qf /path/to/file", "rpm -ql /path/to/file", "rpm -qi /path/to/file", "rpm -qc /path/to/file"], "answer": 0, "explain": "rpm -qf (query file) は、指定されたファイルを所有するRPMパッケージ名を返します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "YUMパッケージマネージャでキーワード検索を行うコマンドはどれか。", "choices": ["yum search keyword", "yum list keyword", "yum info keyword", "yum find keyword"], "answer": 0, "explain": "yum search はリポジトリ内のパッケージ名や説明文からキーワード検索を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Debian系システムにおいて、ローカルの.debパッケージをインストールするコマンドはどれか。", "choices": ["dpkg -i package.deb", "dpkg -r package.deb", "apt get package.deb", "dpkg -l package.deb"], "answer": 0, "explain": "dpkg -i (または --install) でDebianパッケージを直接インストールします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "インストール済みのDebianパッケージ一覧を表示するコマンドはどれか。", "choices": ["dpkg -l", "dpkg -s", "dpkg -L", "apt search"], "answer": 0, "explain": "dpkg -l (または --list) でインストールされているパッケージの一覧を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したDebianパッケージによってインストールされたファイル一覧を表示するコマンドはどれか。", "choices": ["dpkg -L package", "dpkg -l package", "dpkg -s package", "dpkg -S package"], "answer": 0, "explain": "dpkg -L (または --listfiles) は、パッケージに含まれるファイル群の展開先パスを表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのDebianパッケージからインストールされたかを検索するコマンドはどれか。", "choices": ["dpkg -S /path/to/file", "dpkg -L /path/to/file", "dpkg -s /path/to/file", "dpkg -search"], "answer": 0, "explain": "dpkg -S (または --search) は、指定ファイルを提供しているパッケージ名を検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "APTパッケージマネージャにおいて、リポジトリのパッケージ情報を更新するコマンドはどれか。", "choices": ["apt-get update", "apt-get upgrade", "apt-get dist-upgrade", "apt-get install"], "answer": 0, "explain": "apt-get update は /etc/apt/sources.list に記載されたリポジトリから最新のパッケージリスト情報を取得します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Red Hat系システムにおいて、RPMパッケージを詳細表示・進捗バー付きでインストールするコマンドはどれか。", "choices": ["rpm -ivh package.rpm", "rpm -Uvh package.rpm", "rpm -qa package.rpm", "rpm -qi package.rpm"], "answer": 0, "explain": "rpm -i でインストール、-v で詳細表示、-h でハッシュマーク（進捗バー）を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムにインストールされているすべてのRPMパッケージを表示するコマンドはどれか。", "choices": ["rpm -qa", "rpm -qi", "rpm -ql", "rpm -qf"], "answer": 0, "explain": "rpm -qa (query all) はインストール済みの全RPMパッケージを一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのRPMパッケージに含まれているかを調べるコマンドはどれか。", "choices": ["rpm -qf /path/to/file", "rpm -ql /path/to/file", "rpm -qi /path/to/file", "rpm -qc /path/to/file"], "answer": 0, "explain": "rpm -qf (query file) は、指定されたファイルを所有するRPMパッケージ名を返します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "YUMパッケージマネージャでキーワード検索を行うコマンドはどれか。", "choices": ["yum search keyword", "yum list keyword", "yum info keyword", "yum find keyword"], "answer": 0, "explain": "yum search はリポジトリ内のパッケージ名や説明文からキーワード検索を行います。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Debian系システムにおいて、ローカルの.debパッケージをインストールするコマンドはどれか。", "choices": ["dpkg -i package.deb", "dpkg -r package.deb", "apt get package.deb", "dpkg -l package.deb"], "answer": 0, "explain": "dpkg -i (または --install) でDebianパッケージを直接インストールします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "インストール済みのDebianパッケージ一覧を表示するコマンドはどれか。", "choices": ["dpkg -l", "dpkg -s", "dpkg -L", "apt search"], "answer": 0, "explain": "dpkg -l (または --list) でインストールされているパッケージの一覧を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したDebianパッケージによってインストールされたファイル一覧を表示するコマンドはどれか。", "choices": ["dpkg -L package", "dpkg -l package", "dpkg -s package", "dpkg -S package"], "answer": 0, "explain": "dpkg -L (または --listfiles) は、パッケージに含まれるファイル群の展開先パスを表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したファイルがどのDebianパッケージからインストールされたかを検索するコマンドはどれか。", "choices": ["dpkg -S /path/to/file", "dpkg -L /path/to/file", "dpkg -s /path/to/file", "dpkg -search"], "answer": 0, "explain": "dpkg -S (または --search) は、指定ファイルを提供しているパッケージ名を検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "APTパッケージマネージャにおいて、リポジトリのパッケージ情報を更新するコマンドはどれか。", "choices": ["apt-get update", "apt-get upgrade", "apt-get dist-upgrade", "apt-get install"], "answer": 0, "explain": "apt-get update は /etc/apt/sources.list に記載されたリポジトリから最新のパッケージリスト情報を取得します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "Red Hat系システムにおいて、RPMパッケージを詳細表示・進捗バー付きでインストールするコマンドはどれか。", "choices": ["rpm -ivh package.rpm", "rpm -Uvh package.rpm", "rpm -qa package.rpm", "rpm -qi package.rpm"], "answer": 0, "explain": "rpm -i でインストール、-v で詳細表示、-h でハッシュマーク（進捗バー）を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "隠しファイルを含めて、ファイルの詳細情報を表示するコマンドはどれか。", "choices": ["ls -la", "ls -l", "ls -a", "ls -R"], "answer": 0, "explain": "ls -a はドットで始まる隠しファイルを表示し、-l は詳細情報を表示するため、-la で両方を網羅します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ディレクトリとその中身を再帰的にコピーするコマンドはどれか。", "choices": ["cp -r src dst", "cp src dst", "mv src dst", "ln src dst"], "answer": 0, "explain": "cp コマンドでディレクトリ構造を保持したままコピーするには -r (または -R) オプションを使用します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "親ディレクトリが存在しない場合に、親ディレクトリも同時に作成するコマンドはどれか。", "choices": ["mkdir -p dir/subdir", "mkdir -r dir/subdir", "mkdir -m dir/subdir", "mkdir -f dir/subdir"], "answer": 0, "explain": "mkdir -p オプションを使用すると、指定したパスの親ディレクトリが存在しない場合でも自動的に作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ルートディレクトリルートから特定のファイル名「test.txt」を検索するコマンドはどれか。", "choices": ["find / -name test.txt", "grep -r test.txt /", "locate test.txt", "whereis test.txt"], "answer": 0, "explain": "find [検索パス] -name [ファイル名] で指定したファイル名に一致するものを検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "大文字と小文字を区別せずに文字列検索を行うgrepコマンドのオプションはどれか。", "choices": ["-i", "-v", "-r", "-n"], "answer": 0, "explain": "grep の -i (--ignore-case) オプションは大文字・小文字の区別を無効にします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパターンに一致しない行を表示するgrepコマンドのオプションはどれか。", "choices": ["-v", "-i", "-n", "-c"], "answer": 0, "explain": "grep の -v (--invert-match) オプションは、条件にマッチしない行を抽出します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "tarコマンドでgzip圧縮されたアーカイブファイルを作成する正しいオプション指定はどれか。", "choices": ["tar -cvzf archive.tar.gz /path", "tar -xvzf archive.tar.gz", "tar -tvzf archive.tar.gz", "tar -czf archive.tar"], "answer": 0, "explain": "-c (create), -v (verbose), -z (gzip), -f (file) の組み合わせでgzip圧縮アーカイブを作成します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "gzipで圧縮された.gzファイルを解凍するコマンドまたはオプションはどれか。", "choices": ["gzip -d file.gz", "gzip -c file.gz", "gzip -l file.gz", "gzip -r file.gz"], "answer": 0, "explain": "gzip -d (または gunzip) コマンドで.gzファイルを解凍します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "プロセスを強制終了（SIGKILL）させるために指定するシグナル番号または名称はどれか。", "choices": ["9 (SIGKILL)", "15 (SIGTERM)", "1 (SIGHUP)", "2 (SIGINT)"], "answer": 0, "explain": "シグナル番号 9 (SIGKILL) は、キャッチや無視ができない強制終了シグナルです。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システム上のすべてのプロセスをユーザー名付きの詳細形式で表示するコマンドはどれか。", "choices": ["ps aux", "ps -ef", "top", "pstree"], "answer": 0, "explain": "ps aux は BSD スタイルのオプションで、全プロセスの詳細情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "隠しファイルを含めて、ファイルの詳細情報を表示するコマンドはどれか。", "choices": ["ls -la", "ls -l", "ls -a", "ls -R"], "answer": 0, "explain": "ls -a はドットで始まる隠しファイルを表示し、-l は詳細情報を表示するため、-la で両方を網羅します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ディレクトリとその中身を再帰的にコピーするコマンドはどれか。", "choices": ["cp -r src dst", "cp src dst", "mv src dst", "ln src dst"], "answer": 0, "explain": "cp コマンドでディレクトリ構造を保持したままコピーするには -r (または -R) オプションを使用します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "親ディレクトリが存在しない場合に、親ディレクトリも同時に作成するコマンドはどれか。", "choices": ["mkdir -p dir/subdir", "mkdir -r dir/subdir", "mkdir -m dir/subdir", "mkdir -f dir/subdir"], "answer": 0, "explain": "mkdir -p オプションを使用すると、指定したパスの親ディレクトリが存在しない場合でも自動的に作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ルートディレクトリルートから特定のファイル名「test.txt」を検索するコマンドはどれか。", "choices": ["find / -name test.txt", "grep -r test.txt /", "locate test.txt", "whereis test.txt"], "answer": 0, "explain": "find [検索パス] -name [ファイル名] で指定したファイル名に一致するものを検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "大文字と小文字を区別せずに文字列検索を行うgrepコマンドのオプションはどれか。", "choices": ["-i", "-v", "-r", "-n"], "answer": 0, "explain": "grep の -i (--ignore-case) オプションは大文字・小文字の区別を無効にします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパターンに一致しない行を表示するgrepコマンドのオプションはどれか。", "choices": ["-v", "-i", "-n", "-c"], "answer": 0, "explain": "grep の -v (--invert-match) オプションは、条件にマッチしない行を抽出します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "tarコマンドでgzip圧縮されたアーカイブファイルを作成する正しいオプション指定はどれか。", "choices": ["tar -cvzf archive.tar.gz /path", "tar -xvzf archive.tar.gz", "tar -tvzf archive.tar.gz", "tar -czf archive.tar"], "answer": 0, "explain": "-c (create), -v (verbose), -z (gzip), -f (file) の組み合わせでgzip圧縮アーカイブを作成します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "gzipで圧縮された.gzファイルを解凍するコマンドまたはオプションはどれか。", "choices": ["gzip -d file.gz", "gzip -c file.gz", "gzip -l file.gz", "gzip -r file.gz"], "answer": 0, "explain": "gzip -d (または gunzip) コマンドで.gzファイルを解凍します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "プロセスを強制終了（SIGKILL）させるために指定するシグナル番号または名称はどれか。", "choices": ["9 (SIGKILL)", "15 (SIGTERM)", "1 (SIGHUP)", "2 (SIGINT)"], "answer": 0, "explain": "シグナル番号 9 (SIGKILL) は、キャッチや無視ができない強制終了シグナルです。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システム上のすべてのプロセスをユーザー名付きの詳細形式で表示するコマンドはどれか。", "choices": ["ps aux", "ps -ef", "top", "pstree"], "answer": 0, "explain": "ps aux は BSD スタイルのオプションで、全プロセスの詳細情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "隠しファイルを含めて、ファイルの詳細情報を表示するコマンドはどれか。", "choices": ["ls -la", "ls -l", "ls -a", "ls -R"], "answer": 0, "explain": "ls -a はドットで始まる隠しファイルを表示し、-l は詳細情報を表示するため、-la で両方を網羅します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ディレクトリとその中身を再帰的にコピーするコマンドはどれか。", "choices": ["cp -r src dst", "cp src dst", "mv src dst", "ln src dst"], "answer": 0, "explain": "cp コマンドでディレクトリ構造を保持したままコピーするには -r (または -R) オプションを使用します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "親ディレクトリが存在しない場合に、親ディレクトリも同時に作成するコマンドはどれか。", "choices": ["mkdir -p dir/subdir", "mkdir -r dir/subdir", "mkdir -m dir/subdir", "mkdir -f dir/subdir"], "answer": 0, "explain": "mkdir -p オプションを使用すると、指定したパスの親ディレクトリが存在しない場合でも自動的に作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ルートディレクトリルートから特定のファイル名「test.txt」を検索するコマンドはどれか。", "choices": ["find / -name test.txt", "grep -r test.txt /", "locate test.txt", "whereis test.txt"], "answer": 0, "explain": "find [検索パス] -name [ファイル名] で指定したファイル名に一致するものを検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "大文字と小文字を区別せずに文字列検索を行うgrepコマンドのオプションはどれか。", "choices": ["-i", "-v", "-r", "-n"], "answer": 0, "explain": "grep の -i (--ignore-case) オプションは大文字・小文字の区別を無効にします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパターンに一致しない行を表示するgrepコマンドのオプションはどれか。", "choices": ["-v", "-i", "-n", "-c"], "answer": 0, "explain": "grep の -v (--invert-match) オプションは、条件にマッチしない行を抽出します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "tarコマンドでgzip圧縮されたアーカイブファイルを作成する正しいオプション指定はどれか。", "choices": ["tar -cvzf archive.tar.gz /path", "tar -xvzf archive.tar.gz", "tar -tvzf archive.tar.gz", "tar -czf archive.tar"], "answer": 0, "explain": "-c (create), -v (verbose), -z (gzip), -f (file) の組み合わせでgzip圧縮アーカイブを作成します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "gzipで圧縮された.gzファイルを解凍するコマンドまたはオプションはどれか。", "choices": ["gzip -d file.gz", "gzip -c file.gz", "gzip -l file.gz", "gzip -r file.gz"], "answer": 0, "explain": "gzip -d (または gunzip) コマンドで.gzファイルを解凍します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "プロセスを強制終了（SIGKILL）させるために指定するシグナル番号または名称はどれか。", "choices": ["9 (SIGKILL)", "15 (SIGTERM)", "1 (SIGHUP)", "2 (SIGINT)"], "answer": 0, "explain": "シグナル番号 9 (SIGKILL) は、キャッチや無視ができない強制終了シグナルです。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システム上のすべてのプロセスをユーザー名付きの詳細形式で表示するコマンドはどれか。", "choices": ["ps aux", "ps -ef", "top", "pstree"], "answer": 0, "explain": "ps aux は BSD スタイルのオプションで、全プロセスの詳細情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "隠しファイルを含めて、ファイルの詳細情報を表示するコマンドはどれか。", "choices": ["ls -la", "ls -l", "ls -a", "ls -R"], "answer": 0, "explain": "ls -a はドットで始まる隠しファイルを表示し、-l は詳細情報を表示するため、-la で両方を網羅します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ディレクトリとその中身を再帰的にコピーするコマンドはどれか。", "choices": ["cp -r src dst", "cp src dst", "mv src dst", "ln src dst"], "answer": 0, "explain": "cp コマンドでディレクトリ構造を保持したままコピーするには -r (または -R) オプションを使用します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "親ディレクトリが存在しない場合に、親ディレクトリも同時に作成するコマンドはどれか。", "choices": ["mkdir -p dir/subdir", "mkdir -r dir/subdir", "mkdir -m dir/subdir", "mkdir -f dir/subdir"], "answer": 0, "explain": "mkdir -p オプションを使用すると、指定したパスの親ディレクトリが存在しない場合でも自動的に作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ルートディレクトリルートから特定のファイル名「test.txt」を検索するコマンドはどれか。", "choices": ["find / -name test.txt", "grep -r test.txt /", "locate test.txt", "whereis test.txt"], "answer": 0, "explain": "find [検索パス] -name [ファイル名] で指定したファイル名に一致するものを検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "大文字と小文字を区別せずに文字列検索を行うgrepコマンドのオプションはどれか。", "choices": ["-i", "-v", "-r", "-n"], "answer": 0, "explain": "grep の -i (--ignore-case) オプションは大文字・小文字の区別を無効にします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパターンに一致しない行を表示するgrepコマンドのオプションはどれか。", "choices": ["-v", "-i", "-n", "-c"], "answer": 0, "explain": "grep の -v (--invert-match) オプションは、条件にマッチしない行を抽出します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "tarコマンドでgzip圧縮されたアーカイブファイルを作成する正しいオプション指定はどれか。", "choices": ["tar -cvzf archive.tar.gz /path", "tar -xvzf archive.tar.gz", "tar -tvzf archive.tar.gz", "tar -czf archive.tar"], "answer": 0, "explain": "-c (create), -v (verbose), -z (gzip), -f (file) の組み合わせでgzip圧縮アーカイブを作成します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "gzipで圧縮された.gzファイルを解凍するコマンドまたはオプションはどれか。", "choices": ["gzip -d file.gz", "gzip -c file.gz", "gzip -l file.gz", "gzip -r file.gz"], "answer": 0, "explain": "gzip -d (または gunzip) コマンドで.gzファイルを解凍します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "プロセスを強制終了（SIGKILL）させるために指定するシグナル番号または名称はどれか。", "choices": ["9 (SIGKILL)", "15 (SIGTERM)", "1 (SIGHUP)", "2 (SIGINT)"], "answer": 0, "explain": "シグナル番号 9 (SIGKILL) は、キャッチや無視ができない強制終了シグナルです。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システム上のすべてのプロセスをユーザー名付きの詳細形式で表示するコマンドはどれか。", "choices": ["ps aux", "ps -ef", "top", "pstree"], "answer": 0, "explain": "ps aux は BSD スタイルのオプションで、全プロセスの詳細情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "隠しファイルを含めて、ファイルの詳細情報を表示するコマンドはどれか。", "choices": ["ls -la", "ls -l", "ls -a", "ls -R"], "answer": 0, "explain": "ls -a はドットで始まる隠しファイルを表示し、-l は詳細情報を表示するため、-la で両方を網羅します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ディレクトリとその中身を再帰的にコピーするコマンドはどれか。", "choices": ["cp -r src dst", "cp src dst", "mv src dst", "ln src dst"], "answer": 0, "explain": "cp コマンドでディレクトリ構造を保持したままコピーするには -r (または -R) オプションを使用します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "親ディレクトリが存在しない場合に、親ディレクトリも同時に作成するコマンドはどれか。", "choices": ["mkdir -p dir/subdir", "mkdir -r dir/subdir", "mkdir -m dir/subdir", "mkdir -f dir/subdir"], "answer": 0, "explain": "mkdir -p オプションを使用すると、指定したパスの親ディレクトリが存在しない場合でも自動的に作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ルートディレクトリルートから特定のファイル名「test.txt」を検索するコマンドはどれか。", "choices": ["find / -name test.txt", "grep -r test.txt /", "locate test.txt", "whereis test.txt"], "answer": 0, "explain": "find [検索パス] -name [ファイル名] で指定したファイル名に一致するものを検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "大文字と小文字を区別せずに文字列検索を行うgrepコマンドのオプションはどれか。", "choices": ["-i", "-v", "-r", "-n"], "answer": 0, "explain": "grep の -i (--ignore-case) オプションは大文字・小文字の区別を無効にします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパターンに一致しない行を表示するgrepコマンドのオプションはどれか。", "choices": ["-v", "-i", "-n", "-c"], "answer": 0, "explain": "grep の -v (--invert-match) オプションは、条件にマッチしない行を抽出します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "tarコマンドでgzip圧縮されたアーカイブファイルを作成する正しいオプション指定はどれか。", "choices": ["tar -cvzf archive.tar.gz /path", "tar -xvzf archive.tar.gz", "tar -tvzf archive.tar.gz", "tar -czf archive.tar"], "answer": 0, "explain": "-c (create), -v (verbose), -z (gzip), -f (file) の組み合わせでgzip圧縮アーカイブを作成します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "gzipで圧縮された.gzファイルを解凍するコマンドまたはオプションはどれか。", "choices": ["gzip -d file.gz", "gzip -c file.gz", "gzip -l file.gz", "gzip -r file.gz"], "answer": 0, "explain": "gzip -d (または gunzip) コマンドで.gzファイルを解凍します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "プロセスを強制終了（SIGKILL）させるために指定するシグナル番号または名称はどれか。", "choices": ["9 (SIGKILL)", "15 (SIGTERM)", "1 (SIGHUP)", "2 (SIGINT)"], "answer": 0, "explain": "シグナル番号 9 (SIGKILL) は、キャッチや無視ができない強制終了シグナルです。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システム上のすべてのプロセスをユーザー名付きの詳細形式で表示するコマンドはどれか。", "choices": ["ps aux", "ps -ef", "top", "pstree"], "answer": 0, "explain": "ps aux は BSD スタイルのオプションで、全プロセスの詳細情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "隠しファイルを含めて、ファイルの詳細情報を表示するコマンドはどれか。", "choices": ["ls -la", "ls -l", "ls -a", "ls -R"], "answer": 0, "explain": "ls -a はドットで始まる隠しファイルを表示し、-l は詳細情報を表示するため、-la で両方を網羅します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ディレクトリとその中身を再帰的にコピーするコマンドはどれか。", "choices": ["cp -r src dst", "cp src dst", "mv src dst", "ln src dst"], "answer": 0, "explain": "cp コマンドでディレクトリ構造を保持したままコピーするには -r (または -R) オプションを使用します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "親ディレクトリが存在しない場合に、親ディレクトリも同時に作成するコマンドはどれか。", "choices": ["mkdir -p dir/subdir", "mkdir -r dir/subdir", "mkdir -m dir/subdir", "mkdir -f dir/subdir"], "answer": 0, "explain": "mkdir -p オプションを使用すると、指定したパスの親ディレクトリが存在しない場合でも自動的に作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ルートディレクトリルートから特定のファイル名「test.txt」を検索するコマンドはどれか。", "choices": ["find / -name test.txt", "grep -r test.txt /", "locate test.txt", "whereis test.txt"], "answer": 0, "explain": "find [検索パス] -name [ファイル名] で指定したファイル名に一致するものを検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "大文字と小文字を区別せずに文字列検索を行うgrepコマンドのオプションはどれか。", "choices": ["-i", "-v", "-r", "-n"], "answer": 0, "explain": "grep の -i (--ignore-case) オプションは大文字・小文字の区別を無効にします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパターンに一致しない行を表示するgrepコマンドのオプションはどれか。", "choices": ["-v", "-i", "-n", "-c"], "answer": 0, "explain": "grep の -v (--invert-match) オプションは、条件にマッチしない行を抽出します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "tarコマンドでgzip圧縮されたアーカイブファイルを作成する正しいオプション指定はどれか。", "choices": ["tar -cvzf archive.tar.gz /path", "tar -xvzf archive.tar.gz", "tar -tvzf archive.tar.gz", "tar -czf archive.tar"], "answer": 0, "explain": "-c (create), -v (verbose), -z (gzip), -f (file) の組み合わせでgzip圧縮アーカイブを作成します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "gzipで圧縮された.gzファイルを解凍するコマンドまたはオプションはどれか。", "choices": ["gzip -d file.gz", "gzip -c file.gz", "gzip -l file.gz", "gzip -r file.gz"], "answer": 0, "explain": "gzip -d (または gunzip) コマンドで.gzファイルを解凍します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "プロセスを強制終了（SIGKILL）させるために指定するシグナル番号または名称はどれか。", "choices": ["9 (SIGKILL)", "15 (SIGTERM)", "1 (SIGHUP)", "2 (SIGINT)"], "answer": 0, "explain": "シグナル番号 9 (SIGKILL) は、キャッチや無視ができない強制終了シグナルです。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システム上のすべてのプロセスをユーザー名付きの詳細形式で表示するコマンドはどれか。", "choices": ["ps aux", "ps -ef", "top", "pstree"], "answer": 0, "explain": "ps aux は BSD スタイルのオプションで、全プロセスの詳細情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "隠しファイルを含めて、ファイルの詳細情報を表示するコマンドはどれか。", "choices": ["ls -la", "ls -l", "ls -a", "ls -R"], "answer": 0, "explain": "ls -a はドットで始まる隠しファイルを表示し、-l は詳細情報を表示するため、-la で両方を網羅します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ディレクトリとその中身を再帰的にコピーするコマンドはどれか。", "choices": ["cp -r src dst", "cp src dst", "mv src dst", "ln src dst"], "answer": 0, "explain": "cp コマンドでディレクトリ構造を保持したままコピーするには -r (または -R) オプションを使用します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "親ディレクトリが存在しない場合に、親ディレクトリも同時に作成するコマンドはどれか。", "choices": ["mkdir -p dir/subdir", "mkdir -r dir/subdir", "mkdir -m dir/subdir", "mkdir -f dir/subdir"], "answer": 0, "explain": "mkdir -p オプションを使用すると、指定したパスの親ディレクトリが存在しない場合でも自動的に作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ルートディレクトリルートから特定のファイル名「test.txt」を検索するコマンドはどれか。", "choices": ["find / -name test.txt", "grep -r test.txt /", "locate test.txt", "whereis test.txt"], "answer": 0, "explain": "find [検索パス] -name [ファイル名] で指定したファイル名に一致するものを検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "大文字と小文字を区別せずに文字列検索を行うgrepコマンドのオプションはどれか。", "choices": ["-i", "-v", "-r", "-n"], "answer": 0, "explain": "grep の -i (--ignore-case) オプションは大文字・小文字の区別を無効にします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパターンに一致しない行を表示するgrepコマンドのオプションはどれか。", "choices": ["-v", "-i", "-n", "-c"], "answer": 0, "explain": "grep の -v (--invert-match) オプションは、条件にマッチしない行を抽出します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "tarコマンドでgzip圧縮されたアーカイブファイルを作成する正しいオプション指定はどれか。", "choices": ["tar -cvzf archive.tar.gz /path", "tar -xvzf archive.tar.gz", "tar -tvzf archive.tar.gz", "tar -czf archive.tar"], "answer": 0, "explain": "-c (create), -v (verbose), -z (gzip), -f (file) の組み合わせでgzip圧縮アーカイブを作成します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "gzipで圧縮された.gzファイルを解凍するコマンドまたはオプションはどれか。", "choices": ["gzip -d file.gz", "gzip -c file.gz", "gzip -l file.gz", "gzip -r file.gz"], "answer": 0, "explain": "gzip -d (または gunzip) コマンドで.gzファイルを解凍します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "プロセスを強制終了（SIGKILL）させるために指定するシグナル番号または名称はどれか。", "choices": ["9 (SIGKILL)", "15 (SIGTERM)", "1 (SIGHUP)", "2 (SIGINT)"], "answer": 0, "explain": "シグナル番号 9 (SIGKILL) は、キャッチや無視ができない強制終了シグナルです。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システム上のすべてのプロセスをユーザー名付きの詳細形式で表示するコマンドはどれか。", "choices": ["ps aux", "ps -ef", "top", "pstree"], "answer": 0, "explain": "ps aux は BSD スタイルのオプションで、全プロセスの詳細情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "隠しファイルを含めて、ファイルの詳細情報を表示するコマンドはどれか。", "choices": ["ls -la", "ls -l", "ls -a", "ls -R"], "answer": 0, "explain": "ls -a はドットで始まる隠しファイルを表示し、-l は詳細情報を表示するため、-la で両方を網羅します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ディレクトリとその中身を再帰的にコピーするコマンドはどれか。", "choices": ["cp -r src dst", "cp src dst", "mv src dst", "ln src dst"], "answer": 0, "explain": "cp コマンドでディレクトリ構造を保持したままコピーするには -r (または -R) オプションを使用します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "親ディレクトリが存在しない場合に、親ディレクトリも同時に作成するコマンドはどれか。", "choices": ["mkdir -p dir/subdir", "mkdir -r dir/subdir", "mkdir -m dir/subdir", "mkdir -f dir/subdir"], "answer": 0, "explain": "mkdir -p オプションを使用すると、指定したパスの親ディレクトリが存在しない場合でも自動的に作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ルートディレクトリルートから特定のファイル名「test.txt」を検索するコマンドはどれか。", "choices": ["find / -name test.txt", "grep -r test.txt /", "locate test.txt", "whereis test.txt"], "answer": 0, "explain": "find [検索パス] -name [ファイル名] で指定したファイル名に一致するものを検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "大文字と小文字を区別せずに文字列検索を行うgrepコマンドのオプションはどれか。", "choices": ["-i", "-v", "-r", "-n"], "answer": 0, "explain": "grep の -i (--ignore-case) オプションは大文字・小文字の区別を無効にします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパターンに一致しない行を表示するgrepコマンドのオプションはどれか。", "choices": ["-v", "-i", "-n", "-c"], "answer": 0, "explain": "grep の -v (--invert-match) オプションは、条件にマッチしない行を抽出します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "tarコマンドでgzip圧縮されたアーカイブファイルを作成する正しいオプション指定はどれか。", "choices": ["tar -cvzf archive.tar.gz /path", "tar -xvzf archive.tar.gz", "tar -tvzf archive.tar.gz", "tar -czf archive.tar"], "answer": 0, "explain": "-c (create), -v (verbose), -z (gzip), -f (file) の組み合わせでgzip圧縮アーカイブを作成します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "gzipで圧縮された.gzファイルを解凍するコマンドまたはオプションはどれか。", "choices": ["gzip -d file.gz", "gzip -c file.gz", "gzip -l file.gz", "gzip -r file.gz"], "answer": 0, "explain": "gzip -d (または gunzip) コマンドで.gzファイルを解凍します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "プロセスを強制終了（SIGKILL）させるために指定するシグナル番号または名称はどれか。", "choices": ["9 (SIGKILL)", "15 (SIGTERM)", "1 (SIGHUP)", "2 (SIGINT)"], "answer": 0, "explain": "シグナル番号 9 (SIGKILL) は、キャッチや無視ができない強制終了シグナルです。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システム上のすべてのプロセスをユーザー名付きの詳細形式で表示するコマンドはどれか。", "choices": ["ps aux", "ps -ef", "top", "pstree"], "answer": 0, "explain": "ps aux は BSD スタイルのオプションで、全プロセスの詳細情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "隠しファイルを含めて、ファイルの詳細情報を表示するコマンドはどれか。", "choices": ["ls -la", "ls -l", "ls -a", "ls -R"], "answer": 0, "explain": "ls -a はドットで始まる隠しファイルを表示し、-l は詳細情報を表示するため、-la で両方を網羅します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ディレクトリとその中身を再帰的にコピーするコマンドはどれか。", "choices": ["cp -r src dst", "cp src dst", "mv src dst", "ln src dst"], "answer": 0, "explain": "cp コマンドでディレクトリ構造を保持したままコピーするには -r (または -R) オプションを使用します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "親ディレクトリが存在しない場合に、親ディレクトリも同時に作成するコマンドはどれか。", "choices": ["mkdir -p dir/subdir", "mkdir -r dir/subdir", "mkdir -m dir/subdir", "mkdir -f dir/subdir"], "answer": 0, "explain": "mkdir -p オプションを使用すると、指定したパスの親ディレクトリが存在しない場合でも自動的に作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ルートディレクトリルートから特定のファイル名「test.txt」を検索するコマンドはどれか。", "choices": ["find / -name test.txt", "grep -r test.txt /", "locate test.txt", "whereis test.txt"], "answer": 0, "explain": "find [検索パス] -name [ファイル名] で指定したファイル名に一致するものを検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "大文字と小文字を区別せずに文字列検索を行うgrepコマンドのオプションはどれか。", "choices": ["-i", "-v", "-r", "-n"], "answer": 0, "explain": "grep の -i (--ignore-case) オプションは大文字・小文字の区別を無効にします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパターンに一致しない行を表示するgrepコマンドのオプションはどれか。", "choices": ["-v", "-i", "-n", "-c"], "answer": 0, "explain": "grep の -v (--invert-match) オプションは、条件にマッチしない行を抽出します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "tarコマンドでgzip圧縮されたアーカイブファイルを作成する正しいオプション指定はどれか。", "choices": ["tar -cvzf archive.tar.gz /path", "tar -xvzf archive.tar.gz", "tar -tvzf archive.tar.gz", "tar -czf archive.tar"], "answer": 0, "explain": "-c (create), -v (verbose), -z (gzip), -f (file) の組み合わせでgzip圧縮アーカイブを作成します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "gzipで圧縮された.gzファイルを解凍するコマンドまたはオプションはどれか。", "choices": ["gzip -d file.gz", "gzip -c file.gz", "gzip -l file.gz", "gzip -r file.gz"], "answer": 0, "explain": "gzip -d (または gunzip) コマンドで.gzファイルを解凍します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "プロセスを強制終了（SIGKILL）させるために指定するシグナル番号または名称はどれか。", "choices": ["9 (SIGKILL)", "15 (SIGTERM)", "1 (SIGHUP)", "2 (SIGINT)"], "answer": 0, "explain": "シグナル番号 9 (SIGKILL) は、キャッチや無視ができない強制終了シグナルです。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システム上のすべてのプロセスをユーザー名付きの詳細形式で表示するコマンドはどれか。", "choices": ["ps aux", "ps -ef", "top", "pstree"], "answer": 0, "explain": "ps aux は BSD スタイルのオプションで、全プロセスの詳細情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "隠しファイルを含めて、ファイルの詳細情報を表示するコマンドはどれか。", "choices": ["ls -la", "ls -l", "ls -a", "ls -R"], "answer": 0, "explain": "ls -a はドットで始まる隠しファイルを表示し、-l は詳細情報を表示するため、-la で両方を網羅します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ディレクトリとその中身を再帰的にコピーするコマンドはどれか。", "choices": ["cp -r src dst", "cp src dst", "mv src dst", "ln src dst"], "answer": 0, "explain": "cp コマンドでディレクトリ構造を保持したままコピーするには -r (または -R) オプションを使用します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "親ディレクトリが存在しない場合に、親ディレクトリも同時に作成するコマンドはどれか。", "choices": ["mkdir -p dir/subdir", "mkdir -r dir/subdir", "mkdir -m dir/subdir", "mkdir -f dir/subdir"], "answer": 0, "explain": "mkdir -p オプションを使用すると、指定したパスの親ディレクトリが存在しない場合でも自動的に作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ルートディレクトリルートから特定のファイル名「test.txt」を検索するコマンドはどれか。", "choices": ["find / -name test.txt", "grep -r test.txt /", "locate test.txt", "whereis test.txt"], "answer": 0, "explain": "find [検索パス] -name [ファイル名] で指定したファイル名に一致するものを検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "大文字と小文字を区別せずに文字列検索を行うgrepコマンドのオプションはどれか。", "choices": ["-i", "-v", "-r", "-n"], "answer": 0, "explain": "grep の -i (--ignore-case) オプションは大文字・小文字の区別を無効にします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパターンに一致しない行を表示するgrepコマンドのオプションはどれか。", "choices": ["-v", "-i", "-n", "-c"], "answer": 0, "explain": "grep の -v (--invert-match) オプションは、条件にマッチしない行を抽出します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "tarコマンドでgzip圧縮されたアーカイブファイルを作成する正しいオプション指定はどれか。", "choices": ["tar -cvzf archive.tar.gz /path", "tar -xvzf archive.tar.gz", "tar -tvzf archive.tar.gz", "tar -czf archive.tar"], "answer": 0, "explain": "-c (create), -v (verbose), -z (gzip), -f (file) の組み合わせでgzip圧縮アーカイブを作成します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "gzipで圧縮された.gzファイルを解凍するコマンドまたはオプションはどれか。", "choices": ["gzip -d file.gz", "gzip -c file.gz", "gzip -l file.gz", "gzip -r file.gz"], "answer": 0, "explain": "gzip -d (または gunzip) コマンドで.gzファイルを解凍します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "プロセスを強制終了（SIGKILL）させるために指定するシグナル番号または名称はどれか。", "choices": ["9 (SIGKILL)", "15 (SIGTERM)", "1 (SIGHUP)", "2 (SIGINT)"], "answer": 0, "explain": "シグナル番号 9 (SIGKILL) は、キャッチや無視ができない強制終了シグナルです。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システム上のすべてのプロセスをユーザー名付きの詳細形式で表示するコマンドはどれか。", "choices": ["ps aux", "ps -ef", "top", "pstree"], "answer": 0, "explain": "ps aux は BSD スタイルのオプションで、全プロセスの詳細情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "隠しファイルを含めて、ファイルの詳細情報を表示するコマンドはどれか。", "choices": ["ls -la", "ls -l", "ls -a", "ls -R"], "answer": 0, "explain": "ls -a はドットで始まる隠しファイルを表示し、-l は詳細情報を表示するため、-la で両方を網羅します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ディレクトリとその中身を再帰的にコピーするコマンドはどれか。", "choices": ["cp -r src dst", "cp src dst", "mv src dst", "ln src dst"], "answer": 0, "explain": "cp コマンドでディレクトリ構造を保持したままコピーするには -r (または -R) オプションを使用します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "親ディレクトリが存在しない場合に、親ディレクトリも同時に作成するコマンドはどれか。", "choices": ["mkdir -p dir/subdir", "mkdir -r dir/subdir", "mkdir -m dir/subdir", "mkdir -f dir/subdir"], "answer": 0, "explain": "mkdir -p オプションを使用すると、指定したパスの親ディレクトリが存在しない場合でも自動的に作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ルートディレクトリルートから特定のファイル名「test.txt」を検索するコマンドはどれか。", "choices": ["find / -name test.txt", "grep -r test.txt /", "locate test.txt", "whereis test.txt"], "answer": 0, "explain": "find [検索パス] -name [ファイル名] で指定したファイル名に一致するものを検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "大文字と小文字を区別せずに文字列検索を行うgrepコマンドのオプションはどれか。", "choices": ["-i", "-v", "-r", "-n"], "answer": 0, "explain": "grep の -i (--ignore-case) オプションは大文字・小文字の区別を無効にします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパターンに一致しない行を表示するgrepコマンドのオプションはどれか。", "choices": ["-v", "-i", "-n", "-c"], "answer": 0, "explain": "grep の -v (--invert-match) オプションは、条件にマッチしない行を抽出します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "tarコマンドでgzip圧縮されたアーカイブファイルを作成する正しいオプション指定はどれか。", "choices": ["tar -cvzf archive.tar.gz /path", "tar -xvzf archive.tar.gz", "tar -tvzf archive.tar.gz", "tar -czf archive.tar"], "answer": 0, "explain": "-c (create), -v (verbose), -z (gzip), -f (file) の組み合わせでgzip圧縮アーカイブを作成します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "gzipで圧縮された.gzファイルを解凍するコマンドまたはオプションはどれか。", "choices": ["gzip -d file.gz", "gzip -c file.gz", "gzip -l file.gz", "gzip -r file.gz"], "answer": 0, "explain": "gzip -d (または gunzip) コマンドで.gzファイルを解凍します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "プロセスを強制終了（SIGKILL）させるために指定するシグナル番号または名称はどれか。", "choices": ["9 (SIGKILL)", "15 (SIGTERM)", "1 (SIGHUP)", "2 (SIGINT)"], "answer": 0, "explain": "シグナル番号 9 (SIGKILL) は、キャッチや無視ができない強制終了シグナルです。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システム上のすべてのプロセスをユーザー名付きの詳細形式で表示するコマンドはどれか。", "choices": ["ps aux", "ps -ef", "top", "pstree"], "answer": 0, "explain": "ps aux は BSD スタイルのオプションで、全プロセスの詳細情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "隠しファイルを含めて、ファイルの詳細情報を表示するコマンドはどれか。", "choices": ["ls -la", "ls -l", "ls -a", "ls -R"], "answer": 0, "explain": "ls -a はドットで始まる隠しファイルを表示し、-l は詳細情報を表示するため、-la で両方を網羅します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ディレクトリとその中身を再帰的にコピーするコマンドはどれか。", "choices": ["cp -r src dst", "cp src dst", "mv src dst", "ln src dst"], "answer": 0, "explain": "cp コマンドでディレクトリ構造を保持したままコピーするには -r (または -R) オプションを使用します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "親ディレクトリが存在しない場合に、親ディレクトリも同時に作成するコマンドはどれか。", "choices": ["mkdir -p dir/subdir", "mkdir -r dir/subdir", "mkdir -m dir/subdir", "mkdir -f dir/subdir"], "answer": 0, "explain": "mkdir -p オプションを使用すると、指定したパスの親ディレクトリが存在しない場合でも自動的に作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ルートディレクトリルートから特定のファイル名「test.txt」を検索するコマンドはどれか。", "choices": ["find / -name test.txt", "grep -r test.txt /", "locate test.txt", "whereis test.txt"], "answer": 0, "explain": "find [検索パス] -name [ファイル名] で指定したファイル名に一致するものを検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "大文字と小文字を区別せずに文字列検索を行うgrepコマンドのオプションはどれか。", "choices": ["-i", "-v", "-r", "-n"], "answer": 0, "explain": "grep の -i (--ignore-case) オプションは大文字・小文字の区別を無効にします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパターンに一致しない行を表示するgrepコマンドのオプションはどれか。", "choices": ["-v", "-i", "-n", "-c"], "answer": 0, "explain": "grep の -v (--invert-match) オプションは、条件にマッチしない行を抽出します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "tarコマンドでgzip圧縮されたアーカイブファイルを作成する正しいオプション指定はどれか。", "choices": ["tar -cvzf archive.tar.gz /path", "tar -xvzf archive.tar.gz", "tar -tvzf archive.tar.gz", "tar -czf archive.tar"], "answer": 0, "explain": "-c (create), -v (verbose), -z (gzip), -f (file) の組み合わせでgzip圧縮アーカイブを作成します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "gzipで圧縮された.gzファイルを解凍するコマンドまたはオプションはどれか。", "choices": ["gzip -d file.gz", "gzip -c file.gz", "gzip -l file.gz", "gzip -r file.gz"], "answer": 0, "explain": "gzip -d (または gunzip) コマンドで.gzファイルを解凍します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "プロセスを強制終了（SIGKILL）させるために指定するシグナル番号または名称はどれか。", "choices": ["9 (SIGKILL)", "15 (SIGTERM)", "1 (SIGHUP)", "2 (SIGINT)"], "answer": 0, "explain": "シグナル番号 9 (SIGKILL) は、キャッチや無視ができない強制終了シグナルです。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システム上のすべてのプロセスをユーザー名付きの詳細形式で表示するコマンドはどれか。", "choices": ["ps aux", "ps -ef", "top", "pstree"], "answer": 0, "explain": "ps aux は BSD スタイルのオプションで、全プロセスの詳細情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "隠しファイルを含めて、ファイルの詳細情報を表示するコマンドはどれか。", "choices": ["ls -la", "ls -l", "ls -a", "ls -R"], "answer": 0, "explain": "ls -a はドットで始まる隠しファイルを表示し、-l は詳細情報を表示するため、-la で両方を網羅します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ディレクトリとその中身を再帰的にコピーするコマンドはどれか。", "choices": ["cp -r src dst", "cp src dst", "mv src dst", "ln src dst"], "answer": 0, "explain": "cp コマンドでディレクトリ構造を保持したままコピーするには -r (または -R) オプションを使用します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "親ディレクトリが存在しない場合に、親ディレクトリも同時に作成するコマンドはどれか。", "choices": ["mkdir -p dir/subdir", "mkdir -r dir/subdir", "mkdir -m dir/subdir", "mkdir -f dir/subdir"], "answer": 0, "explain": "mkdir -p オプションを使用すると、指定したパスの親ディレクトリが存在しない場合でも自動的に作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ルートディレクトリルートから特定のファイル名「test.txt」を検索するコマンドはどれか。", "choices": ["find / -name test.txt", "grep -r test.txt /", "locate test.txt", "whereis test.txt"], "answer": 0, "explain": "find [検索パス] -name [ファイル名] で指定したファイル名に一致するものを検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "大文字と小文字を区別せずに文字列検索を行うgrepコマンドのオプションはどれか。", "choices": ["-i", "-v", "-r", "-n"], "answer": 0, "explain": "grep の -i (--ignore-case) オプションは大文字・小文字の区別を無効にします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパターンに一致しない行を表示するgrepコマンドのオプションはどれか。", "choices": ["-v", "-i", "-n", "-c"], "answer": 0, "explain": "grep の -v (--invert-match) オプションは、条件にマッチしない行を抽出します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "tarコマンドでgzip圧縮されたアーカイブファイルを作成する正しいオプション指定はどれか。", "choices": ["tar -cvzf archive.tar.gz /path", "tar -xvzf archive.tar.gz", "tar -tvzf archive.tar.gz", "tar -czf archive.tar"], "answer": 0, "explain": "-c (create), -v (verbose), -z (gzip), -f (file) の組み合わせでgzip圧縮アーカイブを作成します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "gzipで圧縮された.gzファイルを解凍するコマンドまたはオプションはどれか。", "choices": ["gzip -d file.gz", "gzip -c file.gz", "gzip -l file.gz", "gzip -r file.gz"], "answer": 0, "explain": "gzip -d (または gunzip) コマンドで.gzファイルを解凍します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "プロセスを強制終了（SIGKILL）させるために指定するシグナル番号または名称はどれか。", "choices": ["9 (SIGKILL)", "15 (SIGTERM)", "1 (SIGHUP)", "2 (SIGINT)"], "answer": 0, "explain": "シグナル番号 9 (SIGKILL) は、キャッチや無視ができない強制終了シグナルです。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システム上のすべてのプロセスをユーザー名付きの詳細形式で表示するコマンドはどれか。", "choices": ["ps aux", "ps -ef", "top", "pstree"], "answer": 0, "explain": "ps aux は BSD スタイルのオプションで、全プロセスの詳細情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "隠しファイルを含めて、ファイルの詳細情報を表示するコマンドはどれか。", "choices": ["ls -la", "ls -l", "ls -a", "ls -R"], "answer": 0, "explain": "ls -a はドットで始まる隠しファイルを表示し、-l は詳細情報を表示するため、-la で両方を網羅します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ディレクトリとその中身を再帰的にコピーするコマンドはどれか。", "choices": ["cp -r src dst", "cp src dst", "mv src dst", "ln src dst"], "answer": 0, "explain": "cp コマンドでディレクトリ構造を保持したままコピーするには -r (または -R) オプションを使用します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "親ディレクトリが存在しない場合に、親ディレクトリも同時に作成するコマンドはどれか。", "choices": ["mkdir -p dir/subdir", "mkdir -r dir/subdir", "mkdir -m dir/subdir", "mkdir -f dir/subdir"], "answer": 0, "explain": "mkdir -p オプションを使用すると、指定したパスの親ディレクトリが存在しない場合でも自動的に作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ルートディレクトリルートから特定のファイル名「test.txt」を検索するコマンドはどれか。", "choices": ["find / -name test.txt", "grep -r test.txt /", "locate test.txt", "whereis test.txt"], "answer": 0, "explain": "find [検索パス] -name [ファイル名] で指定したファイル名に一致するものを検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "大文字と小文字を区別せずに文字列検索を行うgrepコマンドのオプションはどれか。", "choices": ["-i", "-v", "-r", "-n"], "answer": 0, "explain": "grep の -i (--ignore-case) オプションは大文字・小文字の区別を無効にします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパターンに一致しない行を表示するgrepコマンドのオプションはどれか。", "choices": ["-v", "-i", "-n", "-c"], "answer": 0, "explain": "grep の -v (--invert-match) オプションは、条件にマッチしない行を抽出します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "tarコマンドでgzip圧縮されたアーカイブファイルを作成する正しいオプション指定はどれか。", "choices": ["tar -cvzf archive.tar.gz /path", "tar -xvzf archive.tar.gz", "tar -tvzf archive.tar.gz", "tar -czf archive.tar"], "answer": 0, "explain": "-c (create), -v (verbose), -z (gzip), -f (file) の組み合わせでgzip圧縮アーカイブを作成します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "gzipで圧縮された.gzファイルを解凍するコマンドまたはオプションはどれか。", "choices": ["gzip -d file.gz", "gzip -c file.gz", "gzip -l file.gz", "gzip -r file.gz"], "answer": 0, "explain": "gzip -d (または gunzip) コマンドで.gzファイルを解凍します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "プロセスを強制終了（SIGKILL）させるために指定するシグナル番号または名称はどれか。", "choices": ["9 (SIGKILL)", "15 (SIGTERM)", "1 (SIGHUP)", "2 (SIGINT)"], "answer": 0, "explain": "シグナル番号 9 (SIGKILL) は、キャッチや無視ができない強制終了シグナルです。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システム上のすべてのプロセスをユーザー名付きの詳細形式で表示するコマンドはどれか。", "choices": ["ps aux", "ps -ef", "top", "pstree"], "answer": 0, "explain": "ps aux は BSD スタイルのオプションで、全プロセスの詳細情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "隠しファイルを含めて、ファイルの詳細情報を表示するコマンドはどれか。", "choices": ["ls -la", "ls -l", "ls -a", "ls -R"], "answer": 0, "explain": "ls -a はドットで始まる隠しファイルを表示し、-l は詳細情報を表示するため、-la で両方を網羅します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ディレクトリとその中身を再帰的にコピーするコマンドはどれか。", "choices": ["cp -r src dst", "cp src dst", "mv src dst", "ln src dst"], "answer": 0, "explain": "cp コマンドでディレクトリ構造を保持したままコピーするには -r (または -R) オプションを使用します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "親ディレクトリが存在しない場合に、親ディレクトリも同時に作成するコマンドはどれか。", "choices": ["mkdir -p dir/subdir", "mkdir -r dir/subdir", "mkdir -m dir/subdir", "mkdir -f dir/subdir"], "answer": 0, "explain": "mkdir -p オプションを使用すると、指定したパスの親ディレクトリが存在しない場合でも自動的に作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ルートディレクトリルートから特定のファイル名「test.txt」を検索するコマンドはどれか。", "choices": ["find / -name test.txt", "grep -r test.txt /", "locate test.txt", "whereis test.txt"], "answer": 0, "explain": "find [検索パス] -name [ファイル名] で指定したファイル名に一致するものを検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "大文字と小文字を区別せずに文字列検索を行うgrepコマンドのオプションはどれか。", "choices": ["-i", "-v", "-r", "-n"], "answer": 0, "explain": "grep の -i (--ignore-case) オプションは大文字・小文字の区別を無効にします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパターンに一致しない行を表示するgrepコマンドのオプションはどれか。", "choices": ["-v", "-i", "-n", "-c"], "answer": 0, "explain": "grep の -v (--invert-match) オプションは、条件にマッチしない行を抽出します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "tarコマンドでgzip圧縮されたアーカイブファイルを作成する正しいオプション指定はどれか。", "choices": ["tar -cvzf archive.tar.gz /path", "tar -xvzf archive.tar.gz", "tar -tvzf archive.tar.gz", "tar -czf archive.tar"], "answer": 0, "explain": "-c (create), -v (verbose), -z (gzip), -f (file) の組み合わせでgzip圧縮アーカイブを作成します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "gzipで圧縮された.gzファイルを解凍するコマンドまたはオプションはどれか。", "choices": ["gzip -d file.gz", "gzip -c file.gz", "gzip -l file.gz", "gzip -r file.gz"], "answer": 0, "explain": "gzip -d (または gunzip) コマンドで.gzファイルを解凍します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "プロセスを強制終了（SIGKILL）させるために指定するシグナル番号または名称はどれか。", "choices": ["9 (SIGKILL)", "15 (SIGTERM)", "1 (SIGHUP)", "2 (SIGINT)"], "answer": 0, "explain": "シグナル番号 9 (SIGKILL) は、キャッチや無視ができない強制終了シグナルです。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システム上のすべてのプロセスをユーザー名付きの詳細形式で表示するコマンドはどれか。", "choices": ["ps aux", "ps -ef", "top", "pstree"], "answer": 0, "explain": "ps aux は BSD スタイルのオプションで、全プロセスの詳細情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "隠しファイルを含めて、ファイルの詳細情報を表示するコマンドはどれか。", "choices": ["ls -la", "ls -l", "ls -a", "ls -R"], "answer": 0, "explain": "ls -a はドットで始まる隠しファイルを表示し、-l は詳細情報を表示するため、-la で両方を網羅します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ディレクトリとその中身を再帰的にコピーするコマンドはどれか。", "choices": ["cp -r src dst", "cp src dst", "mv src dst", "ln src dst"], "answer": 0, "explain": "cp コマンドでディレクトリ構造を保持したままコピーするには -r (または -R) オプションを使用します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "親ディレクトリが存在しない場合に、親ディレクトリも同時に作成するコマンドはどれか。", "choices": ["mkdir -p dir/subdir", "mkdir -r dir/subdir", "mkdir -m dir/subdir", "mkdir -f dir/subdir"], "answer": 0, "explain": "mkdir -p オプションを使用すると、指定したパスの親ディレクトリが存在しない場合でも自動的に作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ルートディレクトリルートから特定のファイル名「test.txt」を検索するコマンドはどれか。", "choices": ["find / -name test.txt", "grep -r test.txt /", "locate test.txt", "whereis test.txt"], "answer": 0, "explain": "find [検索パス] -name [ファイル名] で指定したファイル名に一致するものを検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "大文字と小文字を区別せずに文字列検索を行うgrepコマンドのオプションはどれか。", "choices": ["-i", "-v", "-r", "-n"], "answer": 0, "explain": "grep の -i (--ignore-case) オプションは大文字・小文字の区別を無効にします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパターンに一致しない行を表示するgrepコマンドのオプションはどれか。", "choices": ["-v", "-i", "-n", "-c"], "answer": 0, "explain": "grep の -v (--invert-match) オプションは、条件にマッチしない行を抽出します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "tarコマンドでgzip圧縮されたアーカイブファイルを作成する正しいオプション指定はどれか。", "choices": ["tar -cvzf archive.tar.gz /path", "tar -xvzf archive.tar.gz", "tar -tvzf archive.tar.gz", "tar -czf archive.tar"], "answer": 0, "explain": "-c (create), -v (verbose), -z (gzip), -f (file) の組み合わせでgzip圧縮アーカイブを作成します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "gzipで圧縮された.gzファイルを解凍するコマンドまたはオプションはどれか。", "choices": ["gzip -d file.gz", "gzip -c file.gz", "gzip -l file.gz", "gzip -r file.gz"], "answer": 0, "explain": "gzip -d (または gunzip) コマンドで.gzファイルを解凍します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "プロセスを強制終了（SIGKILL）させるために指定するシグナル番号または名称はどれか。", "choices": ["9 (SIGKILL)", "15 (SIGTERM)", "1 (SIGHUP)", "2 (SIGINT)"], "answer": 0, "explain": "シグナル番号 9 (SIGKILL) は、キャッチや無視ができない強制終了シグナルです。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システム上のすべてのプロセスをユーザー名付きの詳細形式で表示するコマンドはどれか。", "choices": ["ps aux", "ps -ef", "top", "pstree"], "answer": 0, "explain": "ps aux は BSD スタイルのオプションで、全プロセスの詳細情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "隠しファイルを含めて、ファイルの詳細情報を表示するコマンドはどれか。", "choices": ["ls -la", "ls -l", "ls -a", "ls -R"], "answer": 0, "explain": "ls -a はドットで始まる隠しファイルを表示し、-l は詳細情報を表示するため、-la で両方を網羅します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ディレクトリとその中身を再帰的にコピーするコマンドはどれか。", "choices": ["cp -r src dst", "cp src dst", "mv src dst", "ln src dst"], "answer": 0, "explain": "cp コマンドでディレクトリ構造を保持したままコピーするには -r (または -R) オプションを使用します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "親ディレクトリが存在しない場合に、親ディレクトリも同時に作成するコマンドはどれか。", "choices": ["mkdir -p dir/subdir", "mkdir -r dir/subdir", "mkdir -m dir/subdir", "mkdir -f dir/subdir"], "answer": 0, "explain": "mkdir -p オプションを使用すると、指定したパスの親ディレクトリが存在しない場合でも自動的に作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ルートディレクトリルートから特定のファイル名「test.txt」を検索するコマンドはどれか。", "choices": ["find / -name test.txt", "grep -r test.txt /", "locate test.txt", "whereis test.txt"], "answer": 0, "explain": "find [検索パス] -name [ファイル名] で指定したファイル名に一致するものを検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "大文字と小文字を区別せずに文字列検索を行うgrepコマンドのオプションはどれか。", "choices": ["-i", "-v", "-r", "-n"], "answer": 0, "explain": "grep の -i (--ignore-case) オプションは大文字・小文字の区別を無効にします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパターンに一致しない行を表示するgrepコマンドのオプションはどれか。", "choices": ["-v", "-i", "-n", "-c"], "answer": 0, "explain": "grep の -v (--invert-match) オプションは、条件にマッチしない行を抽出します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "tarコマンドでgzip圧縮されたアーカイブファイルを作成する正しいオプション指定はどれか。", "choices": ["tar -cvzf archive.tar.gz /path", "tar -xvzf archive.tar.gz", "tar -tvzf archive.tar.gz", "tar -czf archive.tar"], "answer": 0, "explain": "-c (create), -v (verbose), -z (gzip), -f (file) の組み合わせでgzip圧縮アーカイブを作成します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "gzipで圧縮された.gzファイルを解凍するコマンドまたはオプションはどれか。", "choices": ["gzip -d file.gz", "gzip -c file.gz", "gzip -l file.gz", "gzip -r file.gz"], "answer": 0, "explain": "gzip -d (または gunzip) コマンドで.gzファイルを解凍します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "プロセスを強制終了（SIGKILL）させるために指定するシグナル番号または名称はどれか。", "choices": ["9 (SIGKILL)", "15 (SIGTERM)", "1 (SIGHUP)", "2 (SIGINT)"], "answer": 0, "explain": "シグナル番号 9 (SIGKILL) は、キャッチや無視ができない強制終了シグナルです。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システム上のすべてのプロセスをユーザー名付きの詳細形式で表示するコマンドはどれか。", "choices": ["ps aux", "ps -ef", "top", "pstree"], "answer": 0, "explain": "ps aux は BSD スタイルのオプションで、全プロセスの詳細情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "隠しファイルを含めて、ファイルの詳細情報を表示するコマンドはどれか。", "choices": ["ls -la", "ls -l", "ls -a", "ls -R"], "answer": 0, "explain": "ls -a はドットで始まる隠しファイルを表示し、-l は詳細情報を表示するため、-la で両方を網羅します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ディレクトリとその中身を再帰的にコピーするコマンドはどれか。", "choices": ["cp -r src dst", "cp src dst", "mv src dst", "ln src dst"], "answer": 0, "explain": "cp コマンドでディレクトリ構造を保持したままコピーするには -r (または -R) オプションを使用します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "親ディレクトリが存在しない場合に、親ディレクトリも同時に作成するコマンドはどれか。", "choices": ["mkdir -p dir/subdir", "mkdir -r dir/subdir", "mkdir -m dir/subdir", "mkdir -f dir/subdir"], "answer": 0, "explain": "mkdir -p オプションを使用すると、指定したパスの親ディレクトリが存在しない場合でも自動的に作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ルートディレクトリルートから特定のファイル名「test.txt」を検索するコマンドはどれか。", "choices": ["find / -name test.txt", "grep -r test.txt /", "locate test.txt", "whereis test.txt"], "answer": 0, "explain": "find [検索パス] -name [ファイル名] で指定したファイル名に一致するものを検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "大文字と小文字を区別せずに文字列検索を行うgrepコマンドのオプションはどれか。", "choices": ["-i", "-v", "-r", "-n"], "answer": 0, "explain": "grep の -i (--ignore-case) オプションは大文字・小文字の区別を無効にします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパターンに一致しない行を表示するgrepコマンドのオプションはどれか。", "choices": ["-v", "-i", "-n", "-c"], "answer": 0, "explain": "grep の -v (--invert-match) オプションは、条件にマッチしない行を抽出します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "tarコマンドでgzip圧縮されたアーカイブファイルを作成する正しいオプション指定はどれか。", "choices": ["tar -cvzf archive.tar.gz /path", "tar -xvzf archive.tar.gz", "tar -tvzf archive.tar.gz", "tar -czf archive.tar"], "answer": 0, "explain": "-c (create), -v (verbose), -z (gzip), -f (file) の組み合わせでgzip圧縮アーカイブを作成します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "gzipで圧縮された.gzファイルを解凍するコマンドまたはオプションはどれか。", "choices": ["gzip -d file.gz", "gzip -c file.gz", "gzip -l file.gz", "gzip -r file.gz"], "answer": 0, "explain": "gzip -d (または gunzip) コマンドで.gzファイルを解凍します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "プロセスを強制終了（SIGKILL）させるために指定するシグナル番号または名称はどれか。", "choices": ["9 (SIGKILL)", "15 (SIGTERM)", "1 (SIGHUP)", "2 (SIGINT)"], "answer": 0, "explain": "シグナル番号 9 (SIGKILL) は、キャッチや無視ができない強制終了シグナルです。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システム上のすべてのプロセスをユーザー名付きの詳細形式で表示するコマンドはどれか。", "choices": ["ps aux", "ps -ef", "top", "pstree"], "answer": 0, "explain": "ps aux は BSD スタイルのオプションで、全プロセスの詳細情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "隠しファイルを含めて、ファイルの詳細情報を表示するコマンドはどれか。", "choices": ["ls -la", "ls -l", "ls -a", "ls -R"], "answer": 0, "explain": "ls -a はドットで始まる隠しファイルを表示し、-l は詳細情報を表示するため、-la で両方を網羅します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ディレクトリとその中身を再帰的にコピーするコマンドはどれか。", "choices": ["cp -r src dst", "cp src dst", "mv src dst", "ln src dst"], "answer": 0, "explain": "cp コマンドでディレクトリ構造を保持したままコピーするには -r (または -R) オプションを使用します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "親ディレクトリが存在しない場合に、親ディレクトリも同時に作成するコマンドはどれか。", "choices": ["mkdir -p dir/subdir", "mkdir -r dir/subdir", "mkdir -m dir/subdir", "mkdir -f dir/subdir"], "answer": 0, "explain": "mkdir -p オプションを使用すると、指定したパスの親ディレクトリが存在しない場合でも自動的に作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ルートディレクトリルートから特定のファイル名「test.txt」を検索するコマンドはどれか。", "choices": ["find / -name test.txt", "grep -r test.txt /", "locate test.txt", "whereis test.txt"], "answer": 0, "explain": "find [検索パス] -name [ファイル名] で指定したファイル名に一致するものを検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "大文字と小文字を区別せずに文字列検索を行うgrepコマンドのオプションはどれか。", "choices": ["-i", "-v", "-r", "-n"], "answer": 0, "explain": "grep の -i (--ignore-case) オプションは大文字・小文字の区別を無効にします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパターンに一致しない行を表示するgrepコマンドのオプションはどれか。", "choices": ["-v", "-i", "-n", "-c"], "answer": 0, "explain": "grep の -v (--invert-match) オプションは、条件にマッチしない行を抽出します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "tarコマンドでgzip圧縮されたアーカイブファイルを作成する正しいオプション指定はどれか。", "choices": ["tar -cvzf archive.tar.gz /path", "tar -xvzf archive.tar.gz", "tar -tvzf archive.tar.gz", "tar -czf archive.tar"], "answer": 0, "explain": "-c (create), -v (verbose), -z (gzip), -f (file) の組み合わせでgzip圧縮アーカイブを作成します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "gzipで圧縮された.gzファイルを解凍するコマンドまたはオプションはどれか。", "choices": ["gzip -d file.gz", "gzip -c file.gz", "gzip -l file.gz", "gzip -r file.gz"], "answer": 0, "explain": "gzip -d (または gunzip) コマンドで.gzファイルを解凍します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "プロセスを強制終了（SIGKILL）させるために指定するシグナル番号または名称はどれか。", "choices": ["9 (SIGKILL)", "15 (SIGTERM)", "1 (SIGHUP)", "2 (SIGINT)"], "answer": 0, "explain": "シグナル番号 9 (SIGKILL) は、キャッチや無視ができない強制終了シグナルです。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システム上のすべてのプロセスをユーザー名付きの詳細形式で表示するコマンドはどれか。", "choices": ["ps aux", "ps -ef", "top", "pstree"], "answer": 0, "explain": "ps aux は BSD スタイルのオプションで、全プロセスの詳細情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "隠しファイルを含めて、ファイルの詳細情報を表示するコマンドはどれか。", "choices": ["ls -la", "ls -l", "ls -a", "ls -R"], "answer": 0, "explain": "ls -a はドットで始まる隠しファイルを表示し、-l は詳細情報を表示するため、-la で両方を網羅します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ディレクトリとその中身を再帰的にコピーするコマンドはどれか。", "choices": ["cp -r src dst", "cp src dst", "mv src dst", "ln src dst"], "answer": 0, "explain": "cp コマンドでディレクトリ構造を保持したままコピーするには -r (または -R) オプションを使用します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "親ディレクトリが存在しない場合に、親ディレクトリも同時に作成するコマンドはどれか。", "choices": ["mkdir -p dir/subdir", "mkdir -r dir/subdir", "mkdir -m dir/subdir", "mkdir -f dir/subdir"], "answer": 0, "explain": "mkdir -p オプションを使用すると、指定したパスの親ディレクトリが存在しない場合でも自動的に作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ルートディレクトリルートから特定のファイル名「test.txt」を検索するコマンドはどれか。", "choices": ["find / -name test.txt", "grep -r test.txt /", "locate test.txt", "whereis test.txt"], "answer": 0, "explain": "find [検索パス] -name [ファイル名] で指定したファイル名に一致するものを検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "大文字と小文字を区別せずに文字列検索を行うgrepコマンドのオプションはどれか。", "choices": ["-i", "-v", "-r", "-n"], "answer": 0, "explain": "grep の -i (--ignore-case) オプションは大文字・小文字の区別を無効にします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパターンに一致しない行を表示するgrepコマンドのオプションはどれか。", "choices": ["-v", "-i", "-n", "-c"], "answer": 0, "explain": "grep の -v (--invert-match) オプションは、条件にマッチしない行を抽出します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "tarコマンドでgzip圧縮されたアーカイブファイルを作成する正しいオプション指定はどれか。", "choices": ["tar -cvzf archive.tar.gz /path", "tar -xvzf archive.tar.gz", "tar -tvzf archive.tar.gz", "tar -czf archive.tar"], "answer": 0, "explain": "-c (create), -v (verbose), -z (gzip), -f (file) の組み合わせでgzip圧縮アーカイブを作成します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "gzipで圧縮された.gzファイルを解凍するコマンドまたはオプションはどれか。", "choices": ["gzip -d file.gz", "gzip -c file.gz", "gzip -l file.gz", "gzip -r file.gz"], "answer": 0, "explain": "gzip -d (または gunzip) コマンドで.gzファイルを解凍します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "プロセスを強制終了（SIGKILL）させるために指定するシグナル番号または名称はどれか。", "choices": ["9 (SIGKILL)", "15 (SIGTERM)", "1 (SIGHUP)", "2 (SIGINT)"], "answer": 0, "explain": "シグナル番号 9 (SIGKILL) は、キャッチや無視ができない強制終了シグナルです。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システム上のすべてのプロセスをユーザー名付きの詳細形式で表示するコマンドはどれか。", "choices": ["ps aux", "ps -ef", "top", "pstree"], "answer": 0, "explain": "ps aux は BSD スタイルのオプションで、全プロセスの詳細情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "隠しファイルを含めて、ファイルの詳細情報を表示するコマンドはどれか。", "choices": ["ls -la", "ls -l", "ls -a", "ls -R"], "answer": 0, "explain": "ls -a はドットで始まる隠しファイルを表示し、-l は詳細情報を表示するため、-la で両方を網羅します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ディレクトリとその中身を再帰的にコピーするコマンドはどれか。", "choices": ["cp -r src dst", "cp src dst", "mv src dst", "ln src dst"], "answer": 0, "explain": "cp コマンドでディレクトリ構造を保持したままコピーするには -r (または -R) オプションを使用します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "親ディレクトリが存在しない場合に、親ディレクトリも同時に作成するコマンドはどれか。", "choices": ["mkdir -p dir/subdir", "mkdir -r dir/subdir", "mkdir -m dir/subdir", "mkdir -f dir/subdir"], "answer": 0, "explain": "mkdir -p オプションを使用すると、指定したパスの親ディレクトリが存在しない場合でも自動的に作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ルートディレクトリルートから特定のファイル名「test.txt」を検索するコマンドはどれか。", "choices": ["find / -name test.txt", "grep -r test.txt /", "locate test.txt", "whereis test.txt"], "answer": 0, "explain": "find [検索パス] -name [ファイル名] で指定したファイル名に一致するものを検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "大文字と小文字を区別せずに文字列検索を行うgrepコマンドのオプションはどれか。", "choices": ["-i", "-v", "-r", "-n"], "answer": 0, "explain": "grep の -i (--ignore-case) オプションは大文字・小文字の区別を無効にします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパターンに一致しない行を表示するgrepコマンドのオプションはどれか。", "choices": ["-v", "-i", "-n", "-c"], "answer": 0, "explain": "grep の -v (--invert-match) オプションは、条件にマッチしない行を抽出します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "tarコマンドでgzip圧縮されたアーカイブファイルを作成する正しいオプション指定はどれか。", "choices": ["tar -cvzf archive.tar.gz /path", "tar -xvzf archive.tar.gz", "tar -tvzf archive.tar.gz", "tar -czf archive.tar"], "answer": 0, "explain": "-c (create), -v (verbose), -z (gzip), -f (file) の組み合わせでgzip圧縮アーカイブを作成します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "gzipで圧縮された.gzファイルを解凍するコマンドまたはオプションはどれか。", "choices": ["gzip -d file.gz", "gzip -c file.gz", "gzip -l file.gz", "gzip -r file.gz"], "answer": 0, "explain": "gzip -d (または gunzip) コマンドで.gzファイルを解凍します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "プロセスを強制終了（SIGKILL）させるために指定するシグナル番号または名称はどれか。", "choices": ["9 (SIGKILL)", "15 (SIGTERM)", "1 (SIGHUP)", "2 (SIGINT)"], "answer": 0, "explain": "シグナル番号 9 (SIGKILL) は、キャッチや無視ができない強制終了シグナルです。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システム上のすべてのプロセスをユーザー名付きの詳細形式で表示するコマンドはどれか。", "choices": ["ps aux", "ps -ef", "top", "pstree"], "answer": 0, "explain": "ps aux は BSD スタイルのオプションで、全プロセスの詳細情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "隠しファイルを含めて、ファイルの詳細情報を表示するコマンドはどれか。", "choices": ["ls -la", "ls -l", "ls -a", "ls -R"], "answer": 0, "explain": "ls -a はドットで始まる隠しファイルを表示し、-l は詳細情報を表示するため、-la で両方を網羅します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ディレクトリとその中身を再帰的にコピーするコマンドはどれか。", "choices": ["cp -r src dst", "cp src dst", "mv src dst", "ln src dst"], "answer": 0, "explain": "cp コマンドでディレクトリ構造を保持したままコピーするには -r (または -R) オプションを使用します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "親ディレクトリが存在しない場合に、親ディレクトリも同時に作成するコマンドはどれか。", "choices": ["mkdir -p dir/subdir", "mkdir -r dir/subdir", "mkdir -m dir/subdir", "mkdir -f dir/subdir"], "answer": 0, "explain": "mkdir -p オプションを使用すると、指定したパスの親ディレクトリが存在しない場合でも自動的に作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ルートディレクトリルートから特定のファイル名「test.txt」を検索するコマンドはどれか。", "choices": ["find / -name test.txt", "grep -r test.txt /", "locate test.txt", "whereis test.txt"], "answer": 0, "explain": "find [検索パス] -name [ファイル名] で指定したファイル名に一致するものを検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "大文字と小文字を区別せずに文字列検索を行うgrepコマンドのオプションはどれか。", "choices": ["-i", "-v", "-r", "-n"], "answer": 0, "explain": "grep の -i (--ignore-case) オプションは大文字・小文字の区別を無効にします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパターンに一致しない行を表示するgrepコマンドのオプションはどれか。", "choices": ["-v", "-i", "-n", "-c"], "answer": 0, "explain": "grep の -v (--invert-match) オプションは、条件にマッチしない行を抽出します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "tarコマンドでgzip圧縮されたアーカイブファイルを作成する正しいオプション指定はどれか。", "choices": ["tar -cvzf archive.tar.gz /path", "tar -xvzf archive.tar.gz", "tar -tvzf archive.tar.gz", "tar -czf archive.tar"], "answer": 0, "explain": "-c (create), -v (verbose), -z (gzip), -f (file) の組み合わせでgzip圧縮アーカイブを作成します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "gzipで圧縮された.gzファイルを解凍するコマンドまたはオプションはどれか。", "choices": ["gzip -d file.gz", "gzip -c file.gz", "gzip -l file.gz", "gzip -r file.gz"], "answer": 0, "explain": "gzip -d (または gunzip) コマンドで.gzファイルを解凍します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "プロセスを強制終了（SIGKILL）させるために指定するシグナル番号または名称はどれか。", "choices": ["9 (SIGKILL)", "15 (SIGTERM)", "1 (SIGHUP)", "2 (SIGINT)"], "answer": 0, "explain": "シグナル番号 9 (SIGKILL) は、キャッチや無視ができない強制終了シグナルです。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システム上のすべてのプロセスをユーザー名付きの詳細形式で表示するコマンドはどれか。", "choices": ["ps aux", "ps -ef", "top", "pstree"], "answer": 0, "explain": "ps aux は BSD スタイルのオプションで、全プロセスの詳細情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "隠しファイルを含めて、ファイルの詳細情報を表示するコマンドはどれか。", "choices": ["ls -la", "ls -l", "ls -a", "ls -R"], "answer": 0, "explain": "ls -a はドットで始まる隠しファイルを表示し、-l は詳細情報を表示するため、-la で両方を網羅します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ディレクトリとその中身を再帰的にコピーするコマンドはどれか。", "choices": ["cp -r src dst", "cp src dst", "mv src dst", "ln src dst"], "answer": 0, "explain": "cp コマンドでディレクトリ構造を保持したままコピーするには -r (または -R) オプションを使用します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "親ディレクトリが存在しない場合に、親ディレクトリも同時に作成するコマンドはどれか。", "choices": ["mkdir -p dir/subdir", "mkdir -r dir/subdir", "mkdir -m dir/subdir", "mkdir -f dir/subdir"], "answer": 0, "explain": "mkdir -p オプションを使用すると、指定したパスの親ディレクトリが存在しない場合でも自動的に作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ルートディレクトリルートから特定のファイル名「test.txt」を検索するコマンドはどれか。", "choices": ["find / -name test.txt", "grep -r test.txt /", "locate test.txt", "whereis test.txt"], "answer": 0, "explain": "find [検索パス] -name [ファイル名] で指定したファイル名に一致するものを検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "大文字と小文字を区別せずに文字列検索を行うgrepコマンドのオプションはどれか。", "choices": ["-i", "-v", "-r", "-n"], "answer": 0, "explain": "grep の -i (--ignore-case) オプションは大文字・小文字の区別を無効にします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパターンに一致しない行を表示するgrepコマンドのオプションはどれか。", "choices": ["-v", "-i", "-n", "-c"], "answer": 0, "explain": "grep の -v (--invert-match) オプションは、条件にマッチしない行を抽出します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "tarコマンドでgzip圧縮されたアーカイブファイルを作成する正しいオプション指定はどれか。", "choices": ["tar -cvzf archive.tar.gz /path", "tar -xvzf archive.tar.gz", "tar -tvzf archive.tar.gz", "tar -czf archive.tar"], "answer": 0, "explain": "-c (create), -v (verbose), -z (gzip), -f (file) の組み合わせでgzip圧縮アーカイブを作成します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "gzipで圧縮された.gzファイルを解凍するコマンドまたはオプションはどれか。", "choices": ["gzip -d file.gz", "gzip -c file.gz", "gzip -l file.gz", "gzip -r file.gz"], "answer": 0, "explain": "gzip -d (または gunzip) コマンドで.gzファイルを解凍します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "プロセスを強制終了（SIGKILL）させるために指定するシグナル番号または名称はどれか。", "choices": ["9 (SIGKILL)", "15 (SIGTERM)", "1 (SIGHUP)", "2 (SIGINT)"], "answer": 0, "explain": "シグナル番号 9 (SIGKILL) は、キャッチや無視ができない強制終了シグナルです。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システム上のすべてのプロセスをユーザー名付きの詳細形式で表示するコマンドはどれか。", "choices": ["ps aux", "ps -ef", "top", "pstree"], "answer": 0, "explain": "ps aux は BSD スタイルのオプションで、全プロセスの詳細情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "隠しファイルを含めて、ファイルの詳細情報を表示するコマンドはどれか。", "choices": ["ls -la", "ls -l", "ls -a", "ls -R"], "answer": 0, "explain": "ls -a はドットで始まる隠しファイルを表示し、-l は詳細情報を表示するため、-la で両方を網羅します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ディレクトリとその中身を再帰的にコピーするコマンドはどれか。", "choices": ["cp -r src dst", "cp src dst", "mv src dst", "ln src dst"], "answer": 0, "explain": "cp コマンドでディレクトリ構造を保持したままコピーするには -r (または -R) オプションを使用します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "親ディレクトリが存在しない場合に、親ディレクトリも同時に作成するコマンドはどれか。", "choices": ["mkdir -p dir/subdir", "mkdir -r dir/subdir", "mkdir -m dir/subdir", "mkdir -f dir/subdir"], "answer": 0, "explain": "mkdir -p オプションを使用すると、指定したパスの親ディレクトリが存在しない場合でも自動的に作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ルートディレクトリルートから特定のファイル名「test.txt」を検索するコマンドはどれか。", "choices": ["find / -name test.txt", "grep -r test.txt /", "locate test.txt", "whereis test.txt"], "answer": 0, "explain": "find [検索パス] -name [ファイル名] で指定したファイル名に一致するものを検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "大文字と小文字を区別せずに文字列検索を行うgrepコマンドのオプションはどれか。", "choices": ["-i", "-v", "-r", "-n"], "answer": 0, "explain": "grep の -i (--ignore-case) オプションは大文字・小文字の区別を無効にします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパターンに一致しない行を表示するgrepコマンドのオプションはどれか。", "choices": ["-v", "-i", "-n", "-c"], "answer": 0, "explain": "grep の -v (--invert-match) オプションは、条件にマッチしない行を抽出します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "tarコマンドでgzip圧縮されたアーカイブファイルを作成する正しいオプション指定はどれか。", "choices": ["tar -cvzf archive.tar.gz /path", "tar -xvzf archive.tar.gz", "tar -tvzf archive.tar.gz", "tar -czf archive.tar"], "answer": 0, "explain": "-c (create), -v (verbose), -z (gzip), -f (file) の組み合わせでgzip圧縮アーカイブを作成します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "gzipで圧縮された.gzファイルを解凍するコマンドまたはオプションはどれか。", "choices": ["gzip -d file.gz", "gzip -c file.gz", "gzip -l file.gz", "gzip -r file.gz"], "answer": 0, "explain": "gzip -d (または gunzip) コマンドで.gzファイルを解凍します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "プロセスを強制終了（SIGKILL）させるために指定するシグナル番号または名称はどれか。", "choices": ["9 (SIGKILL)", "15 (SIGTERM)", "1 (SIGHUP)", "2 (SIGINT)"], "answer": 0, "explain": "シグナル番号 9 (SIGKILL) は、キャッチや無視ができない強制終了シグナルです。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システム上のすべてのプロセスをユーザー名付きの詳細形式で表示するコマンドはどれか。", "choices": ["ps aux", "ps -ef", "top", "pstree"], "answer": 0, "explain": "ps aux は BSD スタイルのオプションで、全プロセスの詳細情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "隠しファイルを含めて、ファイルの詳細情報を表示するコマンドはどれか。", "choices": ["ls -la", "ls -l", "ls -a", "ls -R"], "answer": 0, "explain": "ls -a はドットで始まる隠しファイルを表示し、-l は詳細情報を表示するため、-la で両方を網羅します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ディレクトリとその中身を再帰的にコピーするコマンドはどれか。", "choices": ["cp -r src dst", "cp src dst", "mv src dst", "ln src dst"], "answer": 0, "explain": "cp コマンドでディレクトリ構造を保持したままコピーするには -r (または -R) オプションを使用します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "親ディレクトリが存在しない場合に、親ディレクトリも同時に作成するコマンドはどれか。", "choices": ["mkdir -p dir/subdir", "mkdir -r dir/subdir", "mkdir -m dir/subdir", "mkdir -f dir/subdir"], "answer": 0, "explain": "mkdir -p オプションを使用すると、指定したパスの親ディレクトリが存在しない場合でも自動的に作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ルートディレクトリルートから特定のファイル名「test.txt」を検索するコマンドはどれか。", "choices": ["find / -name test.txt", "grep -r test.txt /", "locate test.txt", "whereis test.txt"], "answer": 0, "explain": "find [検索パス] -name [ファイル名] で指定したファイル名に一致するものを検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "大文字と小文字を区別せずに文字列検索を行うgrepコマンドのオプションはどれか。", "choices": ["-i", "-v", "-r", "-n"], "answer": 0, "explain": "grep の -i (--ignore-case) オプションは大文字・小文字の区別を無効にします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパターンに一致しない行を表示するgrepコマンドのオプションはどれか。", "choices": ["-v", "-i", "-n", "-c"], "answer": 0, "explain": "grep の -v (--invert-match) オプションは、条件にマッチしない行を抽出します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "tarコマンドでgzip圧縮されたアーカイブファイルを作成する正しいオプション指定はどれか。", "choices": ["tar -cvzf archive.tar.gz /path", "tar -xvzf archive.tar.gz", "tar -tvzf archive.tar.gz", "tar -czf archive.tar"], "answer": 0, "explain": "-c (create), -v (verbose), -z (gzip), -f (file) の組み合わせでgzip圧縮アーカイブを作成します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "gzipで圧縮された.gzファイルを解凍するコマンドまたはオプションはどれか。", "choices": ["gzip -d file.gz", "gzip -c file.gz", "gzip -l file.gz", "gzip -r file.gz"], "answer": 0, "explain": "gzip -d (または gunzip) コマンドで.gzファイルを解凍します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "プロセスを強制終了（SIGKILL）させるために指定するシグナル番号または名称はどれか。", "choices": ["9 (SIGKILL)", "15 (SIGTERM)", "1 (SIGHUP)", "2 (SIGINT)"], "answer": 0, "explain": "シグナル番号 9 (SIGKILL) は、キャッチや無視ができない強制終了シグナルです。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システム上のすべてのプロセスをユーザー名付きの詳細形式で表示するコマンドはどれか。", "choices": ["ps aux", "ps -ef", "top", "pstree"], "answer": 0, "explain": "ps aux は BSD スタイルのオプションで、全プロセスの詳細情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "隠しファイルを含めて、ファイルの詳細情報を表示するコマンドはどれか。", "choices": ["ls -la", "ls -l", "ls -a", "ls -R"], "answer": 0, "explain": "ls -a はドットで始まる隠しファイルを表示し、-l は詳細情報を表示するため、-la で両方を網羅します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ディレクトリとその中身を再帰的にコピーするコマンドはどれか。", "choices": ["cp -r src dst", "cp src dst", "mv src dst", "ln src dst"], "answer": 0, "explain": "cp コマンドでディレクトリ構造を保持したままコピーするには -r (または -R) オプションを使用します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "親ディレクトリが存在しない場合に、親ディレクトリも同時に作成するコマンドはどれか。", "choices": ["mkdir -p dir/subdir", "mkdir -r dir/subdir", "mkdir -m dir/subdir", "mkdir -f dir/subdir"], "answer": 0, "explain": "mkdir -p オプションを使用すると、指定したパスの親ディレクトリが存在しない場合でも自動的に作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ルートディレクトリルートから特定のファイル名「test.txt」を検索するコマンドはどれか。", "choices": ["find / -name test.txt", "grep -r test.txt /", "locate test.txt", "whereis test.txt"], "answer": 0, "explain": "find [検索パス] -name [ファイル名] で指定したファイル名に一致するものを検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "大文字と小文字を区別せずに文字列検索を行うgrepコマンドのオプションはどれか。", "choices": ["-i", "-v", "-r", "-n"], "answer": 0, "explain": "grep の -i (--ignore-case) オプションは大文字・小文字の区別を無効にします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパターンに一致しない行を表示するgrepコマンドのオプションはどれか。", "choices": ["-v", "-i", "-n", "-c"], "answer": 0, "explain": "grep の -v (--invert-match) オプションは、条件にマッチしない行を抽出します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "tarコマンドでgzip圧縮されたアーカイブファイルを作成する正しいオプション指定はどれか。", "choices": ["tar -cvzf archive.tar.gz /path", "tar -xvzf archive.tar.gz", "tar -tvzf archive.tar.gz", "tar -czf archive.tar"], "answer": 0, "explain": "-c (create), -v (verbose), -z (gzip), -f (file) の組み合わせでgzip圧縮アーカイブを作成します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "gzipで圧縮された.gzファイルを解凍するコマンドまたはオプションはどれか。", "choices": ["gzip -d file.gz", "gzip -c file.gz", "gzip -l file.gz", "gzip -r file.gz"], "answer": 0, "explain": "gzip -d (または gunzip) コマンドで.gzファイルを解凍します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "プロセスを強制終了（SIGKILL）させるために指定するシグナル番号または名称はどれか。", "choices": ["9 (SIGKILL)", "15 (SIGTERM)", "1 (SIGHUP)", "2 (SIGINT)"], "answer": 0, "explain": "シグナル番号 9 (SIGKILL) は、キャッチや無視ができない強制終了シグナルです。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システム上のすべてのプロセスをユーザー名付きの詳細形式で表示するコマンドはどれか。", "choices": ["ps aux", "ps -ef", "top", "pstree"], "answer": 0, "explain": "ps aux は BSD スタイルのオプションで、全プロセスの詳細情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "隠しファイルを含めて、ファイルの詳細情報を表示するコマンドはどれか。", "choices": ["ls -la", "ls -l", "ls -a", "ls -R"], "answer": 0, "explain": "ls -a はドットで始まる隠しファイルを表示し、-l は詳細情報を表示するため、-la で両方を網羅します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ディレクトリとその中身を再帰的にコピーするコマンドはどれか。", "choices": ["cp -r src dst", "cp src dst", "mv src dst", "ln src dst"], "answer": 0, "explain": "cp コマンドでディレクトリ構造を保持したままコピーするには -r (または -R) オプションを使用します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "親ディレクトリが存在しない場合に、親ディレクトリも同時に作成するコマンドはどれか。", "choices": ["mkdir -p dir/subdir", "mkdir -r dir/subdir", "mkdir -m dir/subdir", "mkdir -f dir/subdir"], "answer": 0, "explain": "mkdir -p オプションを使用すると、指定したパスの親ディレクトリが存在しない場合でも自動的に作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ルートディレクトリルートから特定のファイル名「test.txt」を検索するコマンドはどれか。", "choices": ["find / -name test.txt", "grep -r test.txt /", "locate test.txt", "whereis test.txt"], "answer": 0, "explain": "find [検索パス] -name [ファイル名] で指定したファイル名に一致するものを検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "大文字と小文字を区別せずに文字列検索を行うgrepコマンドのオプションはどれか。", "choices": ["-i", "-v", "-r", "-n"], "answer": 0, "explain": "grep の -i (--ignore-case) オプションは大文字・小文字の区別を無効にします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパターンに一致しない行を表示するgrepコマンドのオプションはどれか。", "choices": ["-v", "-i", "-n", "-c"], "answer": 0, "explain": "grep の -v (--invert-match) オプションは、条件にマッチしない行を抽出します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "tarコマンドでgzip圧縮されたアーカイブファイルを作成する正しいオプション指定はどれか。", "choices": ["tar -cvzf archive.tar.gz /path", "tar -xvzf archive.tar.gz", "tar -tvzf archive.tar.gz", "tar -czf archive.tar"], "answer": 0, "explain": "-c (create), -v (verbose), -z (gzip), -f (file) の組み合わせでgzip圧縮アーカイブを作成します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "gzipで圧縮された.gzファイルを解凍するコマンドまたはオプションはどれか。", "choices": ["gzip -d file.gz", "gzip -c file.gz", "gzip -l file.gz", "gzip -r file.gz"], "answer": 0, "explain": "gzip -d (または gunzip) コマンドで.gzファイルを解凍します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "プロセスを強制終了（SIGKILL）させるために指定するシグナル番号または名称はどれか。", "choices": ["9 (SIGKILL)", "15 (SIGTERM)", "1 (SIGHUP)", "2 (SIGINT)"], "answer": 0, "explain": "シグナル番号 9 (SIGKILL) は、キャッチや無視ができない強制終了シグナルです。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システム上のすべてのプロセスをユーザー名付きの詳細形式で表示するコマンドはどれか。", "choices": ["ps aux", "ps -ef", "top", "pstree"], "answer": 0, "explain": "ps aux は BSD スタイルのオプションで、全プロセスの詳細情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "隠しファイルを含めて、ファイルの詳細情報を表示するコマンドはどれか。", "choices": ["ls -la", "ls -l", "ls -a", "ls -R"], "answer": 0, "explain": "ls -a はドットで始まる隠しファイルを表示し、-l は詳細情報を表示するため、-la で両方を網羅します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ディレクトリとその中身を再帰的にコピーするコマンドはどれか。", "choices": ["cp -r src dst", "cp src dst", "mv src dst", "ln src dst"], "answer": 0, "explain": "cp コマンドでディレクトリ構造を保持したままコピーするには -r (または -R) オプションを使用します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "親ディレクトリが存在しない場合に、親ディレクトリも同時に作成するコマンドはどれか。", "choices": ["mkdir -p dir/subdir", "mkdir -r dir/subdir", "mkdir -m dir/subdir", "mkdir -f dir/subdir"], "answer": 0, "explain": "mkdir -p オプションを使用すると、指定したパスの親ディレクトリが存在しない場合でも自動的に作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ルートディレクトリルートから特定のファイル名「test.txt」を検索するコマンドはどれか。", "choices": ["find / -name test.txt", "grep -r test.txt /", "locate test.txt", "whereis test.txt"], "answer": 0, "explain": "find [検索パス] -name [ファイル名] で指定したファイル名に一致するものを検索します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "大文字と小文字を区別せずに文字列検索を行うgrepコマンドのオプションはどれか。", "choices": ["-i", "-v", "-r", "-n"], "answer": 0, "explain": "grep の -i (--ignore-case) オプションは大文字・小文字の区別を無効にします。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパターンに一致しない行を表示するgrepコマンドのオプションはどれか。", "choices": ["-v", "-i", "-n", "-c"], "answer": 0, "explain": "grep の -v (--invert-match) オプションは、条件にマッチしない行を抽出します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "tarコマンドでgzip圧縮されたアーカイブファイルを作成する正しいオプション指定はどれか。", "choices": ["tar -cvzf archive.tar.gz /path", "tar -xvzf archive.tar.gz", "tar -tvzf archive.tar.gz", "tar -czf archive.tar"], "answer": 0, "explain": "-c (create), -v (verbose), -z (gzip), -f (file) の組み合わせでgzip圧縮アーカイブを作成します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "gzipで圧縮された.gzファイルを解凍するコマンドまたはオプションはどれか。", "choices": ["gzip -d file.gz", "gzip -c file.gz", "gzip -l file.gz", "gzip -r file.gz"], "answer": 0, "explain": "gzip -d (または gunzip) コマンドで.gzファイルを解凍します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "プロセスを強制終了（SIGKILL）させるために指定するシグナル番号または名称はどれか。", "choices": ["9 (SIGKILL)", "15 (SIGTERM)", "1 (SIGHUP)", "2 (SIGINT)"], "answer": 0, "explain": "シグナル番号 9 (SIGKILL) は、キャッチや無視ができない強制終了シグナルです。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システム上のすべてのプロセスをユーザー名付きの詳細形式で表示するコマンドはどれか。", "choices": ["ps aux", "ps -ef", "top", "pstree"], "answer": 0, "explain": "ps aux は BSD スタイルのオプションで、全プロセスの詳細情報を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムに接続されているディスクのパーティションテーブル一覧を表示するコマンドはどれか。", "choices": ["fdisk -l", "df -h", "du -sh", "mkfs"], "answer": 0, "explain": "fdisk -l コマンドはすべてのディスクのパーティション情報を一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパーティションにext4ファイルシステムを作成（フォーマット）するコマンドはどれか。", "choices": ["mkfs.ext4 /dev/sdb1", "fdisk /dev/sdb1", "mount /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mkfs.ext4 (または mkfs -t ext4) コマンドで対象デバイスをext4形式で初期化します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムを既存のディレクトリツリーにマウントするコマンドはどれか。", "choices": ["mount /dev/sdb1 /mnt", "umount /dev/sdb1", "fdisk /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mount コマンドでストレージデバイスを指定したマウントポイント（ディレクトリ）に結合します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "マウントされているファイルシステムをアンマウント（切り離し）するコマンドはどれか。", "choices": ["umount /mnt", "unmount /mnt", "detach /mnt", "remove /mnt"], "answer": 0, "explain": "umount コマンドでマウントポイントまたはデバイスを指定してアンマウントします（unmountではない点に注意）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "OS起動時に自動的にマウントするファイルシステムの情報を定義する設定ファイルはどれか。", "choices": ["/etc/fstab", "/etc/mtab", "/proc/mounts", "/etc/exports"], "answer": 0, "explain": "/etc/fstab ファイルには、デバイス名/UUID、マウントポイント、ファイルシステムの種類、マウントオプションなどが記述されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムのディスク使用量と空き容量を人間が読みやすい単位（KB, MB, GB）で表示するコマンドはどれか。", "choices": ["df -h", "du -sh", "free -m", "lsblk"], "answer": 0, "explain": "df (disk free) コマンドに -h (--human-readable) オプションを付けると単位が付与されて読みやすくなります。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したディレクトリ全体の使用容量をまとめて表示するコマンドはどれか。", "choices": ["du -sh /var", "df -h /var", "ls -lh /var", "fdisk -l /var"], "answer": 0, "explain": "du (disk usage) コマンドの -s (summary) と -h (human-readable) オプションで該当ディレクトリの合計容量を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムの不整合やエラーをチェック・修復するコマンドはどれか。", "choices": ["fsck", "mkfs", "fdisk", "parted"], "answer": 0, "explain": "fsck (file system check) コマンドでファイルシステムの整合性を確認し修復します（アンマウント状態で実行）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルやディレクトリに対するシンボリックリンク（ソフトリンク）を作成するコマンドはどれか。", "choices": ["ln -s target linkname", "ln target linkname", "cp -s target linkname", "mv target linkname"], "answer": 0, "explain": "ln -s コマンドでシンボリックリンクを作成します。-s を付けないとハードリンクが作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ログファイルやスプールなど、可変（変動する）データが保存されるFHS標準ディレクトリはどれか。", "choices": ["/var", "/etc", "/usr", "/tmp"], "answer": 0, "explain": "/var (variable) ディレクトリにはシステム運用中に内容が変化するログ、メール、データベース等が保持されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムに接続されているディスクのパーティションテーブル一覧を表示するコマンドはどれか。", "choices": ["fdisk -l", "df -h", "du -sh", "mkfs"], "answer": 0, "explain": "fdisk -l コマンドはすべてのディスクのパーティション情報を一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパーティションにext4ファイルシステムを作成（フォーマット）するコマンドはどれか。", "choices": ["mkfs.ext4 /dev/sdb1", "fdisk /dev/sdb1", "mount /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mkfs.ext4 (または mkfs -t ext4) コマンドで対象デバイスをext4形式で初期化します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムを既存のディレクトリツリーにマウントするコマンドはどれか。", "choices": ["mount /dev/sdb1 /mnt", "umount /dev/sdb1", "fdisk /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mount コマンドでストレージデバイスを指定したマウントポイント（ディレクトリ）に結合します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "マウントされているファイルシステムをアンマウント（切り離し）するコマンドはどれか。", "choices": ["umount /mnt", "unmount /mnt", "detach /mnt", "remove /mnt"], "answer": 0, "explain": "umount コマンドでマウントポイントまたはデバイスを指定してアンマウントします（unmountではない点に注意）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "OS起動時に自動的にマウントするファイルシステムの情報を定義する設定ファイルはどれか。", "choices": ["/etc/fstab", "/etc/mtab", "/proc/mounts", "/etc/exports"], "answer": 0, "explain": "/etc/fstab ファイルには、デバイス名/UUID、マウントポイント、ファイルシステムの種類、マウントオプションなどが記述されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムのディスク使用量と空き容量を人間が読みやすい単位（KB, MB, GB）で表示するコマンドはどれか。", "choices": ["df -h", "du -sh", "free -m", "lsblk"], "answer": 0, "explain": "df (disk free) コマンドに -h (--human-readable) オプションを付けると単位が付与されて読みやすくなります。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したディレクトリ全体の使用容量をまとめて表示するコマンドはどれか。", "choices": ["du -sh /var", "df -h /var", "ls -lh /var", "fdisk -l /var"], "answer": 0, "explain": "du (disk usage) コマンドの -s (summary) と -h (human-readable) オプションで該当ディレクトリの合計容量を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムの不整合やエラーをチェック・修復するコマンドはどれか。", "choices": ["fsck", "mkfs", "fdisk", "parted"], "answer": 0, "explain": "fsck (file system check) コマンドでファイルシステムの整合性を確認し修復します（アンマウント状態で実行）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルやディレクトリに対するシンボリックリンク（ソフトリンク）を作成するコマンドはどれか。", "choices": ["ln -s target linkname", "ln target linkname", "cp -s target linkname", "mv target linkname"], "answer": 0, "explain": "ln -s コマンドでシンボリックリンクを作成します。-s を付けないとハードリンクが作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ログファイルやスプールなど、可変（変動する）データが保存されるFHS標準ディレクトリはどれか。", "choices": ["/var", "/etc", "/usr", "/tmp"], "answer": 0, "explain": "/var (variable) ディレクトリにはシステム運用中に内容が変化するログ、メール、データベース等が保持されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムに接続されているディスクのパーティションテーブル一覧を表示するコマンドはどれか。", "choices": ["fdisk -l", "df -h", "du -sh", "mkfs"], "answer": 0, "explain": "fdisk -l コマンドはすべてのディスクのパーティション情報を一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパーティションにext4ファイルシステムを作成（フォーマット）するコマンドはどれか。", "choices": ["mkfs.ext4 /dev/sdb1", "fdisk /dev/sdb1", "mount /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mkfs.ext4 (または mkfs -t ext4) コマンドで対象デバイスをext4形式で初期化します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムを既存のディレクトリツリーにマウントするコマンドはどれか。", "choices": ["mount /dev/sdb1 /mnt", "umount /dev/sdb1", "fdisk /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mount コマンドでストレージデバイスを指定したマウントポイント（ディレクトリ）に結合します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "マウントされているファイルシステムをアンマウント（切り離し）するコマンドはどれか。", "choices": ["umount /mnt", "unmount /mnt", "detach /mnt", "remove /mnt"], "answer": 0, "explain": "umount コマンドでマウントポイントまたはデバイスを指定してアンマウントします（unmountではない点に注意）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "OS起動時に自動的にマウントするファイルシステムの情報を定義する設定ファイルはどれか。", "choices": ["/etc/fstab", "/etc/mtab", "/proc/mounts", "/etc/exports"], "answer": 0, "explain": "/etc/fstab ファイルには、デバイス名/UUID、マウントポイント、ファイルシステムの種類、マウントオプションなどが記述されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムのディスク使用量と空き容量を人間が読みやすい単位（KB, MB, GB）で表示するコマンドはどれか。", "choices": ["df -h", "du -sh", "free -m", "lsblk"], "answer": 0, "explain": "df (disk free) コマンドに -h (--human-readable) オプションを付けると単位が付与されて読みやすくなります。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したディレクトリ全体の使用容量をまとめて表示するコマンドはどれか。", "choices": ["du -sh /var", "df -h /var", "ls -lh /var", "fdisk -l /var"], "answer": 0, "explain": "du (disk usage) コマンドの -s (summary) と -h (human-readable) オプションで該当ディレクトリの合計容量を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムの不整合やエラーをチェック・修復するコマンドはどれか。", "choices": ["fsck", "mkfs", "fdisk", "parted"], "answer": 0, "explain": "fsck (file system check) コマンドでファイルシステムの整合性を確認し修復します（アンマウント状態で実行）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルやディレクトリに対するシンボリックリンク（ソフトリンク）を作成するコマンドはどれか。", "choices": ["ln -s target linkname", "ln target linkname", "cp -s target linkname", "mv target linkname"], "answer": 0, "explain": "ln -s コマンドでシンボリックリンクを作成します。-s を付けないとハードリンクが作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ログファイルやスプールなど、可変（変動する）データが保存されるFHS標準ディレクトリはどれか。", "choices": ["/var", "/etc", "/usr", "/tmp"], "answer": 0, "explain": "/var (variable) ディレクトリにはシステム運用中に内容が変化するログ、メール、データベース等が保持されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムに接続されているディスクのパーティションテーブル一覧を表示するコマンドはどれか。", "choices": ["fdisk -l", "df -h", "du -sh", "mkfs"], "answer": 0, "explain": "fdisk -l コマンドはすべてのディスクのパーティション情報を一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパーティションにext4ファイルシステムを作成（フォーマット）するコマンドはどれか。", "choices": ["mkfs.ext4 /dev/sdb1", "fdisk /dev/sdb1", "mount /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mkfs.ext4 (または mkfs -t ext4) コマンドで対象デバイスをext4形式で初期化します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムを既存のディレクトリツリーにマウントするコマンドはどれか。", "choices": ["mount /dev/sdb1 /mnt", "umount /dev/sdb1", "fdisk /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mount コマンドでストレージデバイスを指定したマウントポイント（ディレクトリ）に結合します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "マウントされているファイルシステムをアンマウント（切り離し）するコマンドはどれか。", "choices": ["umount /mnt", "unmount /mnt", "detach /mnt", "remove /mnt"], "answer": 0, "explain": "umount コマンドでマウントポイントまたはデバイスを指定してアンマウントします（unmountではない点に注意）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "OS起動時に自動的にマウントするファイルシステムの情報を定義する設定ファイルはどれか。", "choices": ["/etc/fstab", "/etc/mtab", "/proc/mounts", "/etc/exports"], "answer": 0, "explain": "/etc/fstab ファイルには、デバイス名/UUID、マウントポイント、ファイルシステムの種類、マウントオプションなどが記述されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムのディスク使用量と空き容量を人間が読みやすい単位（KB, MB, GB）で表示するコマンドはどれか。", "choices": ["df -h", "du -sh", "free -m", "lsblk"], "answer": 0, "explain": "df (disk free) コマンドに -h (--human-readable) オプションを付けると単位が付与されて読みやすくなります。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したディレクトリ全体の使用容量をまとめて表示するコマンドはどれか。", "choices": ["du -sh /var", "df -h /var", "ls -lh /var", "fdisk -l /var"], "answer": 0, "explain": "du (disk usage) コマンドの -s (summary) と -h (human-readable) オプションで該当ディレクトリの合計容量を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムの不整合やエラーをチェック・修復するコマンドはどれか。", "choices": ["fsck", "mkfs", "fdisk", "parted"], "answer": 0, "explain": "fsck (file system check) コマンドでファイルシステムの整合性を確認し修復します（アンマウント状態で実行）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルやディレクトリに対するシンボリックリンク（ソフトリンク）を作成するコマンドはどれか。", "choices": ["ln -s target linkname", "ln target linkname", "cp -s target linkname", "mv target linkname"], "answer": 0, "explain": "ln -s コマンドでシンボリックリンクを作成します。-s を付けないとハードリンクが作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ログファイルやスプールなど、可変（変動する）データが保存されるFHS標準ディレクトリはどれか。", "choices": ["/var", "/etc", "/usr", "/tmp"], "answer": 0, "explain": "/var (variable) ディレクトリにはシステム運用中に内容が変化するログ、メール、データベース等が保持されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムに接続されているディスクのパーティションテーブル一覧を表示するコマンドはどれか。", "choices": ["fdisk -l", "df -h", "du -sh", "mkfs"], "answer": 0, "explain": "fdisk -l コマンドはすべてのディスクのパーティション情報を一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパーティションにext4ファイルシステムを作成（フォーマット）するコマンドはどれか。", "choices": ["mkfs.ext4 /dev/sdb1", "fdisk /dev/sdb1", "mount /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mkfs.ext4 (または mkfs -t ext4) コマンドで対象デバイスをext4形式で初期化します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムを既存のディレクトリツリーにマウントするコマンドはどれか。", "choices": ["mount /dev/sdb1 /mnt", "umount /dev/sdb1", "fdisk /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mount コマンドでストレージデバイスを指定したマウントポイント（ディレクトリ）に結合します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "マウントされているファイルシステムをアンマウント（切り離し）するコマンドはどれか。", "choices": ["umount /mnt", "unmount /mnt", "detach /mnt", "remove /mnt"], "answer": 0, "explain": "umount コマンドでマウントポイントまたはデバイスを指定してアンマウントします（unmountではない点に注意）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "OS起動時に自動的にマウントするファイルシステムの情報を定義する設定ファイルはどれか。", "choices": ["/etc/fstab", "/etc/mtab", "/proc/mounts", "/etc/exports"], "answer": 0, "explain": "/etc/fstab ファイルには、デバイス名/UUID、マウントポイント、ファイルシステムの種類、マウントオプションなどが記述されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムのディスク使用量と空き容量を人間が読みやすい単位（KB, MB, GB）で表示するコマンドはどれか。", "choices": ["df -h", "du -sh", "free -m", "lsblk"], "answer": 0, "explain": "df (disk free) コマンドに -h (--human-readable) オプションを付けると単位が付与されて読みやすくなります。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したディレクトリ全体の使用容量をまとめて表示するコマンドはどれか。", "choices": ["du -sh /var", "df -h /var", "ls -lh /var", "fdisk -l /var"], "answer": 0, "explain": "du (disk usage) コマンドの -s (summary) と -h (human-readable) オプションで該当ディレクトリの合計容量を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムの不整合やエラーをチェック・修復するコマンドはどれか。", "choices": ["fsck", "mkfs", "fdisk", "parted"], "answer": 0, "explain": "fsck (file system check) コマンドでファイルシステムの整合性を確認し修復します（アンマウント状態で実行）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルやディレクトリに対するシンボリックリンク（ソフトリンク）を作成するコマンドはどれか。", "choices": ["ln -s target linkname", "ln target linkname", "cp -s target linkname", "mv target linkname"], "answer": 0, "explain": "ln -s コマンドでシンボリックリンクを作成します。-s を付けないとハードリンクが作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ログファイルやスプールなど、可変（変動する）データが保存されるFHS標準ディレクトリはどれか。", "choices": ["/var", "/etc", "/usr", "/tmp"], "answer": 0, "explain": "/var (variable) ディレクトリにはシステム運用中に内容が変化するログ、メール、データベース等が保持されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムに接続されているディスクのパーティションテーブル一覧を表示するコマンドはどれか。", "choices": ["fdisk -l", "df -h", "du -sh", "mkfs"], "answer": 0, "explain": "fdisk -l コマンドはすべてのディスクのパーティション情報を一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパーティションにext4ファイルシステムを作成（フォーマット）するコマンドはどれか。", "choices": ["mkfs.ext4 /dev/sdb1", "fdisk /dev/sdb1", "mount /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mkfs.ext4 (または mkfs -t ext4) コマンドで対象デバイスをext4形式で初期化します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムを既存のディレクトリツリーにマウントするコマンドはどれか。", "choices": ["mount /dev/sdb1 /mnt", "umount /dev/sdb1", "fdisk /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mount コマンドでストレージデバイスを指定したマウントポイント（ディレクトリ）に結合します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "マウントされているファイルシステムをアンマウント（切り離し）するコマンドはどれか。", "choices": ["umount /mnt", "unmount /mnt", "detach /mnt", "remove /mnt"], "answer": 0, "explain": "umount コマンドでマウントポイントまたはデバイスを指定してアンマウントします（unmountではない点に注意）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "OS起動時に自動的にマウントするファイルシステムの情報を定義する設定ファイルはどれか。", "choices": ["/etc/fstab", "/etc/mtab", "/proc/mounts", "/etc/exports"], "answer": 0, "explain": "/etc/fstab ファイルには、デバイス名/UUID、マウントポイント、ファイルシステムの種類、マウントオプションなどが記述されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムのディスク使用量と空き容量を人間が読みやすい単位（KB, MB, GB）で表示するコマンドはどれか。", "choices": ["df -h", "du -sh", "free -m", "lsblk"], "answer": 0, "explain": "df (disk free) コマンドに -h (--human-readable) オプションを付けると単位が付与されて読みやすくなります。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したディレクトリ全体の使用容量をまとめて表示するコマンドはどれか。", "choices": ["du -sh /var", "df -h /var", "ls -lh /var", "fdisk -l /var"], "answer": 0, "explain": "du (disk usage) コマンドの -s (summary) と -h (human-readable) オプションで該当ディレクトリの合計容量を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムの不整合やエラーをチェック・修復するコマンドはどれか。", "choices": ["fsck", "mkfs", "fdisk", "parted"], "answer": 0, "explain": "fsck (file system check) コマンドでファイルシステムの整合性を確認し修復します（アンマウント状態で実行）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルやディレクトリに対するシンボリックリンク（ソフトリンク）を作成するコマンドはどれか。", "choices": ["ln -s target linkname", "ln target linkname", "cp -s target linkname", "mv target linkname"], "answer": 0, "explain": "ln -s コマンドでシンボリックリンクを作成します。-s を付けないとハードリンクが作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ログファイルやスプールなど、可変（変動する）データが保存されるFHS標準ディレクトリはどれか。", "choices": ["/var", "/etc", "/usr", "/tmp"], "answer": 0, "explain": "/var (variable) ディレクトリにはシステム運用中に内容が変化するログ、メール、データベース等が保持されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムに接続されているディスクのパーティションテーブル一覧を表示するコマンドはどれか。", "choices": ["fdisk -l", "df -h", "du -sh", "mkfs"], "answer": 0, "explain": "fdisk -l コマンドはすべてのディスクのパーティション情報を一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパーティションにext4ファイルシステムを作成（フォーマット）するコマンドはどれか。", "choices": ["mkfs.ext4 /dev/sdb1", "fdisk /dev/sdb1", "mount /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mkfs.ext4 (または mkfs -t ext4) コマンドで対象デバイスをext4形式で初期化します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムを既存のディレクトリツリーにマウントするコマンドはどれか。", "choices": ["mount /dev/sdb1 /mnt", "umount /dev/sdb1", "fdisk /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mount コマンドでストレージデバイスを指定したマウントポイント（ディレクトリ）に結合します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "マウントされているファイルシステムをアンマウント（切り離し）するコマンドはどれか。", "choices": ["umount /mnt", "unmount /mnt", "detach /mnt", "remove /mnt"], "answer": 0, "explain": "umount コマンドでマウントポイントまたはデバイスを指定してアンマウントします（unmountではない点に注意）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "OS起動時に自動的にマウントするファイルシステムの情報を定義する設定ファイルはどれか。", "choices": ["/etc/fstab", "/etc/mtab", "/proc/mounts", "/etc/exports"], "answer": 0, "explain": "/etc/fstab ファイルには、デバイス名/UUID、マウントポイント、ファイルシステムの種類、マウントオプションなどが記述されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムのディスク使用量と空き容量を人間が読みやすい単位（KB, MB, GB）で表示するコマンドはどれか。", "choices": ["df -h", "du -sh", "free -m", "lsblk"], "answer": 0, "explain": "df (disk free) コマンドに -h (--human-readable) オプションを付けると単位が付与されて読みやすくなります。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したディレクトリ全体の使用容量をまとめて表示するコマンドはどれか。", "choices": ["du -sh /var", "df -h /var", "ls -lh /var", "fdisk -l /var"], "answer": 0, "explain": "du (disk usage) コマンドの -s (summary) と -h (human-readable) オプションで該当ディレクトリの合計容量を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムの不整合やエラーをチェック・修復するコマンドはどれか。", "choices": ["fsck", "mkfs", "fdisk", "parted"], "answer": 0, "explain": "fsck (file system check) コマンドでファイルシステムの整合性を確認し修復します（アンマウント状態で実行）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルやディレクトリに対するシンボリックリンク（ソフトリンク）を作成するコマンドはどれか。", "choices": ["ln -s target linkname", "ln target linkname", "cp -s target linkname", "mv target linkname"], "answer": 0, "explain": "ln -s コマンドでシンボリックリンクを作成します。-s を付けないとハードリンクが作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ログファイルやスプールなど、可変（変動する）データが保存されるFHS標準ディレクトリはどれか。", "choices": ["/var", "/etc", "/usr", "/tmp"], "answer": 0, "explain": "/var (variable) ディレクトリにはシステム運用中に内容が変化するログ、メール、データベース等が保持されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムに接続されているディスクのパーティションテーブル一覧を表示するコマンドはどれか。", "choices": ["fdisk -l", "df -h", "du -sh", "mkfs"], "answer": 0, "explain": "fdisk -l コマンドはすべてのディスクのパーティション情報を一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパーティションにext4ファイルシステムを作成（フォーマット）するコマンドはどれか。", "choices": ["mkfs.ext4 /dev/sdb1", "fdisk /dev/sdb1", "mount /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mkfs.ext4 (または mkfs -t ext4) コマンドで対象デバイスをext4形式で初期化します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムを既存のディレクトリツリーにマウントするコマンドはどれか。", "choices": ["mount /dev/sdb1 /mnt", "umount /dev/sdb1", "fdisk /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mount コマンドでストレージデバイスを指定したマウントポイント（ディレクトリ）に結合します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "マウントされているファイルシステムをアンマウント（切り離し）するコマンドはどれか。", "choices": ["umount /mnt", "unmount /mnt", "detach /mnt", "remove /mnt"], "answer": 0, "explain": "umount コマンドでマウントポイントまたはデバイスを指定してアンマウントします（unmountではない点に注意）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "OS起動時に自動的にマウントするファイルシステムの情報を定義する設定ファイルはどれか。", "choices": ["/etc/fstab", "/etc/mtab", "/proc/mounts", "/etc/exports"], "answer": 0, "explain": "/etc/fstab ファイルには、デバイス名/UUID、マウントポイント、ファイルシステムの種類、マウントオプションなどが記述されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムのディスク使用量と空き容量を人間が読みやすい単位（KB, MB, GB）で表示するコマンドはどれか。", "choices": ["df -h", "du -sh", "free -m", "lsblk"], "answer": 0, "explain": "df (disk free) コマンドに -h (--human-readable) オプションを付けると単位が付与されて読みやすくなります。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したディレクトリ全体の使用容量をまとめて表示するコマンドはどれか。", "choices": ["du -sh /var", "df -h /var", "ls -lh /var", "fdisk -l /var"], "answer": 0, "explain": "du (disk usage) コマンドの -s (summary) と -h (human-readable) オプションで該当ディレクトリの合計容量を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムの不整合やエラーをチェック・修復するコマンドはどれか。", "choices": ["fsck", "mkfs", "fdisk", "parted"], "answer": 0, "explain": "fsck (file system check) コマンドでファイルシステムの整合性を確認し修復します（アンマウント状態で実行）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルやディレクトリに対するシンボリックリンク（ソフトリンク）を作成するコマンドはどれか。", "choices": ["ln -s target linkname", "ln target linkname", "cp -s target linkname", "mv target linkname"], "answer": 0, "explain": "ln -s コマンドでシンボリックリンクを作成します。-s を付けないとハードリンクが作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ログファイルやスプールなど、可変（変動する）データが保存されるFHS標準ディレクトリはどれか。", "choices": ["/var", "/etc", "/usr", "/tmp"], "answer": 0, "explain": "/var (variable) ディレクトリにはシステム運用中に内容が変化するログ、メール、データベース等が保持されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムに接続されているディスクのパーティションテーブル一覧を表示するコマンドはどれか。", "choices": ["fdisk -l", "df -h", "du -sh", "mkfs"], "answer": 0, "explain": "fdisk -l コマンドはすべてのディスクのパーティション情報を一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパーティションにext4ファイルシステムを作成（フォーマット）するコマンドはどれか。", "choices": ["mkfs.ext4 /dev/sdb1", "fdisk /dev/sdb1", "mount /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mkfs.ext4 (または mkfs -t ext4) コマンドで対象デバイスをext4形式で初期化します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムを既存のディレクトリツリーにマウントするコマンドはどれか。", "choices": ["mount /dev/sdb1 /mnt", "umount /dev/sdb1", "fdisk /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mount コマンドでストレージデバイスを指定したマウントポイント（ディレクトリ）に結合します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "マウントされているファイルシステムをアンマウント（切り離し）するコマンドはどれか。", "choices": ["umount /mnt", "unmount /mnt", "detach /mnt", "remove /mnt"], "answer": 0, "explain": "umount コマンドでマウントポイントまたはデバイスを指定してアンマウントします（unmountではない点に注意）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "OS起動時に自動的にマウントするファイルシステムの情報を定義する設定ファイルはどれか。", "choices": ["/etc/fstab", "/etc/mtab", "/proc/mounts", "/etc/exports"], "answer": 0, "explain": "/etc/fstab ファイルには、デバイス名/UUID、マウントポイント、ファイルシステムの種類、マウントオプションなどが記述されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムのディスク使用量と空き容量を人間が読みやすい単位（KB, MB, GB）で表示するコマンドはどれか。", "choices": ["df -h", "du -sh", "free -m", "lsblk"], "answer": 0, "explain": "df (disk free) コマンドに -h (--human-readable) オプションを付けると単位が付与されて読みやすくなります。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したディレクトリ全体の使用容量をまとめて表示するコマンドはどれか。", "choices": ["du -sh /var", "df -h /var", "ls -lh /var", "fdisk -l /var"], "answer": 0, "explain": "du (disk usage) コマンドの -s (summary) と -h (human-readable) オプションで該当ディレクトリの合計容量を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムの不整合やエラーをチェック・修復するコマンドはどれか。", "choices": ["fsck", "mkfs", "fdisk", "parted"], "answer": 0, "explain": "fsck (file system check) コマンドでファイルシステムの整合性を確認し修復します（アンマウント状態で実行）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルやディレクトリに対するシンボリックリンク（ソフトリンク）を作成するコマンドはどれか。", "choices": ["ln -s target linkname", "ln target linkname", "cp -s target linkname", "mv target linkname"], "answer": 0, "explain": "ln -s コマンドでシンボリックリンクを作成します。-s を付けないとハードリンクが作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ログファイルやスプールなど、可変（変動する）データが保存されるFHS標準ディレクトリはどれか。", "choices": ["/var", "/etc", "/usr", "/tmp"], "answer": 0, "explain": "/var (variable) ディレクトリにはシステム運用中に内容が変化するログ、メール、データベース等が保持されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムに接続されているディスクのパーティションテーブル一覧を表示するコマンドはどれか。", "choices": ["fdisk -l", "df -h", "du -sh", "mkfs"], "answer": 0, "explain": "fdisk -l コマンドはすべてのディスクのパーティション情報を一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパーティションにext4ファイルシステムを作成（フォーマット）するコマンドはどれか。", "choices": ["mkfs.ext4 /dev/sdb1", "fdisk /dev/sdb1", "mount /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mkfs.ext4 (または mkfs -t ext4) コマンドで対象デバイスをext4形式で初期化します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムを既存のディレクトリツリーにマウントするコマンドはどれか。", "choices": ["mount /dev/sdb1 /mnt", "umount /dev/sdb1", "fdisk /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mount コマンドでストレージデバイスを指定したマウントポイント（ディレクトリ）に結合します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "マウントされているファイルシステムをアンマウント（切り離し）するコマンドはどれか。", "choices": ["umount /mnt", "unmount /mnt", "detach /mnt", "remove /mnt"], "answer": 0, "explain": "umount コマンドでマウントポイントまたはデバイスを指定してアンマウントします（unmountではない点に注意）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "OS起動時に自動的にマウントするファイルシステムの情報を定義する設定ファイルはどれか。", "choices": ["/etc/fstab", "/etc/mtab", "/proc/mounts", "/etc/exports"], "answer": 0, "explain": "/etc/fstab ファイルには、デバイス名/UUID、マウントポイント、ファイルシステムの種類、マウントオプションなどが記述されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムのディスク使用量と空き容量を人間が読みやすい単位（KB, MB, GB）で表示するコマンドはどれか。", "choices": ["df -h", "du -sh", "free -m", "lsblk"], "answer": 0, "explain": "df (disk free) コマンドに -h (--human-readable) オプションを付けると単位が付与されて読みやすくなります。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したディレクトリ全体の使用容量をまとめて表示するコマンドはどれか。", "choices": ["du -sh /var", "df -h /var", "ls -lh /var", "fdisk -l /var"], "answer": 0, "explain": "du (disk usage) コマンドの -s (summary) と -h (human-readable) オプションで該当ディレクトリの合計容量を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムの不整合やエラーをチェック・修復するコマンドはどれか。", "choices": ["fsck", "mkfs", "fdisk", "parted"], "answer": 0, "explain": "fsck (file system check) コマンドでファイルシステムの整合性を確認し修復します（アンマウント状態で実行）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルやディレクトリに対するシンボリックリンク（ソフトリンク）を作成するコマンドはどれか。", "choices": ["ln -s target linkname", "ln target linkname", "cp -s target linkname", "mv target linkname"], "answer": 0, "explain": "ln -s コマンドでシンボリックリンクを作成します。-s を付けないとハードリンクが作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ログファイルやスプールなど、可変（変動する）データが保存されるFHS標準ディレクトリはどれか。", "choices": ["/var", "/etc", "/usr", "/tmp"], "answer": 0, "explain": "/var (variable) ディレクトリにはシステム運用中に内容が変化するログ、メール、データベース等が保持されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムに接続されているディスクのパーティションテーブル一覧を表示するコマンドはどれか。", "choices": ["fdisk -l", "df -h", "du -sh", "mkfs"], "answer": 0, "explain": "fdisk -l コマンドはすべてのディスクのパーティション情報を一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパーティションにext4ファイルシステムを作成（フォーマット）するコマンドはどれか。", "choices": ["mkfs.ext4 /dev/sdb1", "fdisk /dev/sdb1", "mount /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mkfs.ext4 (または mkfs -t ext4) コマンドで対象デバイスをext4形式で初期化します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムを既存のディレクトリツリーにマウントするコマンドはどれか。", "choices": ["mount /dev/sdb1 /mnt", "umount /dev/sdb1", "fdisk /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mount コマンドでストレージデバイスを指定したマウントポイント（ディレクトリ）に結合します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "マウントされているファイルシステムをアンマウント（切り離し）するコマンドはどれか。", "choices": ["umount /mnt", "unmount /mnt", "detach /mnt", "remove /mnt"], "answer": 0, "explain": "umount コマンドでマウントポイントまたはデバイスを指定してアンマウントします（unmountではない点に注意）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "OS起動時に自動的にマウントするファイルシステムの情報を定義する設定ファイルはどれか。", "choices": ["/etc/fstab", "/etc/mtab", "/proc/mounts", "/etc/exports"], "answer": 0, "explain": "/etc/fstab ファイルには、デバイス名/UUID、マウントポイント、ファイルシステムの種類、マウントオプションなどが記述されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムのディスク使用量と空き容量を人間が読みやすい単位（KB, MB, GB）で表示するコマンドはどれか。", "choices": ["df -h", "du -sh", "free -m", "lsblk"], "answer": 0, "explain": "df (disk free) コマンドに -h (--human-readable) オプションを付けると単位が付与されて読みやすくなります。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したディレクトリ全体の使用容量をまとめて表示するコマンドはどれか。", "choices": ["du -sh /var", "df -h /var", "ls -lh /var", "fdisk -l /var"], "answer": 0, "explain": "du (disk usage) コマンドの -s (summary) と -h (human-readable) オプションで該当ディレクトリの合計容量を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムの不整合やエラーをチェック・修復するコマンドはどれか。", "choices": ["fsck", "mkfs", "fdisk", "parted"], "answer": 0, "explain": "fsck (file system check) コマンドでファイルシステムの整合性を確認し修復します（アンマウント状態で実行）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルやディレクトリに対するシンボリックリンク（ソフトリンク）を作成するコマンドはどれか。", "choices": ["ln -s target linkname", "ln target linkname", "cp -s target linkname", "mv target linkname"], "answer": 0, "explain": "ln -s コマンドでシンボリックリンクを作成します。-s を付けないとハードリンクが作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ログファイルやスプールなど、可変（変動する）データが保存されるFHS標準ディレクトリはどれか。", "choices": ["/var", "/etc", "/usr", "/tmp"], "answer": 0, "explain": "/var (variable) ディレクトリにはシステム運用中に内容が変化するログ、メール、データベース等が保持されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムに接続されているディスクのパーティションテーブル一覧を表示するコマンドはどれか。", "choices": ["fdisk -l", "df -h", "du -sh", "mkfs"], "answer": 0, "explain": "fdisk -l コマンドはすべてのディスクのパーティション情報を一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパーティションにext4ファイルシステムを作成（フォーマット）するコマンドはどれか。", "choices": ["mkfs.ext4 /dev/sdb1", "fdisk /dev/sdb1", "mount /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mkfs.ext4 (または mkfs -t ext4) コマンドで対象デバイスをext4形式で初期化します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムを既存のディレクトリツリーにマウントするコマンドはどれか。", "choices": ["mount /dev/sdb1 /mnt", "umount /dev/sdb1", "fdisk /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mount コマンドでストレージデバイスを指定したマウントポイント（ディレクトリ）に結合します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "マウントされているファイルシステムをアンマウント（切り離し）するコマンドはどれか。", "choices": ["umount /mnt", "unmount /mnt", "detach /mnt", "remove /mnt"], "answer": 0, "explain": "umount コマンドでマウントポイントまたはデバイスを指定してアンマウントします（unmountではない点に注意）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "OS起動時に自動的にマウントするファイルシステムの情報を定義する設定ファイルはどれか。", "choices": ["/etc/fstab", "/etc/mtab", "/proc/mounts", "/etc/exports"], "answer": 0, "explain": "/etc/fstab ファイルには、デバイス名/UUID、マウントポイント、ファイルシステムの種類、マウントオプションなどが記述されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムのディスク使用量と空き容量を人間が読みやすい単位（KB, MB, GB）で表示するコマンドはどれか。", "choices": ["df -h", "du -sh", "free -m", "lsblk"], "answer": 0, "explain": "df (disk free) コマンドに -h (--human-readable) オプションを付けると単位が付与されて読みやすくなります。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したディレクトリ全体の使用容量をまとめて表示するコマンドはどれか。", "choices": ["du -sh /var", "df -h /var", "ls -lh /var", "fdisk -l /var"], "answer": 0, "explain": "du (disk usage) コマンドの -s (summary) と -h (human-readable) オプションで該当ディレクトリの合計容量を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムの不整合やエラーをチェック・修復するコマンドはどれか。", "choices": ["fsck", "mkfs", "fdisk", "parted"], "answer": 0, "explain": "fsck (file system check) コマンドでファイルシステムの整合性を確認し修復します（アンマウント状態で実行）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルやディレクトリに対するシンボリックリンク（ソフトリンク）を作成するコマンドはどれか。", "choices": ["ln -s target linkname", "ln target linkname", "cp -s target linkname", "mv target linkname"], "answer": 0, "explain": "ln -s コマンドでシンボリックリンクを作成します。-s を付けないとハードリンクが作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ログファイルやスプールなど、可変（変動する）データが保存されるFHS標準ディレクトリはどれか。", "choices": ["/var", "/etc", "/usr", "/tmp"], "answer": 0, "explain": "/var (variable) ディレクトリにはシステム運用中に内容が変化するログ、メール、データベース等が保持されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムに接続されているディスクのパーティションテーブル一覧を表示するコマンドはどれか。", "choices": ["fdisk -l", "df -h", "du -sh", "mkfs"], "answer": 0, "explain": "fdisk -l コマンドはすべてのディスクのパーティション情報を一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパーティションにext4ファイルシステムを作成（フォーマット）するコマンドはどれか。", "choices": ["mkfs.ext4 /dev/sdb1", "fdisk /dev/sdb1", "mount /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mkfs.ext4 (または mkfs -t ext4) コマンドで対象デバイスをext4形式で初期化します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムを既存のディレクトリツリーにマウントするコマンドはどれか。", "choices": ["mount /dev/sdb1 /mnt", "umount /dev/sdb1", "fdisk /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mount コマンドでストレージデバイスを指定したマウントポイント（ディレクトリ）に結合します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "マウントされているファイルシステムをアンマウント（切り離し）するコマンドはどれか。", "choices": ["umount /mnt", "unmount /mnt", "detach /mnt", "remove /mnt"], "answer": 0, "explain": "umount コマンドでマウントポイントまたはデバイスを指定してアンマウントします（unmountではない点に注意）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "OS起動時に自動的にマウントするファイルシステムの情報を定義する設定ファイルはどれか。", "choices": ["/etc/fstab", "/etc/mtab", "/proc/mounts", "/etc/exports"], "answer": 0, "explain": "/etc/fstab ファイルには、デバイス名/UUID、マウントポイント、ファイルシステムの種類、マウントオプションなどが記述されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムのディスク使用量と空き容量を人間が読みやすい単位（KB, MB, GB）で表示するコマンドはどれか。", "choices": ["df -h", "du -sh", "free -m", "lsblk"], "answer": 0, "explain": "df (disk free) コマンドに -h (--human-readable) オプションを付けると単位が付与されて読みやすくなります。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したディレクトリ全体の使用容量をまとめて表示するコマンドはどれか。", "choices": ["du -sh /var", "df -h /var", "ls -lh /var", "fdisk -l /var"], "answer": 0, "explain": "du (disk usage) コマンドの -s (summary) と -h (human-readable) オプションで該当ディレクトリの合計容量を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムの不整合やエラーをチェック・修復するコマンドはどれか。", "choices": ["fsck", "mkfs", "fdisk", "parted"], "answer": 0, "explain": "fsck (file system check) コマンドでファイルシステムの整合性を確認し修復します（アンマウント状態で実行）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルやディレクトリに対するシンボリックリンク（ソフトリンク）を作成するコマンドはどれか。", "choices": ["ln -s target linkname", "ln target linkname", "cp -s target linkname", "mv target linkname"], "answer": 0, "explain": "ln -s コマンドでシンボリックリンクを作成します。-s を付けないとハードリンクが作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ログファイルやスプールなど、可変（変動する）データが保存されるFHS標準ディレクトリはどれか。", "choices": ["/var", "/etc", "/usr", "/tmp"], "answer": 0, "explain": "/var (variable) ディレクトリにはシステム運用中に内容が変化するログ、メール、データベース等が保持されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムに接続されているディスクのパーティションテーブル一覧を表示するコマンドはどれか。", "choices": ["fdisk -l", "df -h", "du -sh", "mkfs"], "answer": 0, "explain": "fdisk -l コマンドはすべてのディスクのパーティション情報を一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパーティションにext4ファイルシステムを作成（フォーマット）するコマンドはどれか。", "choices": ["mkfs.ext4 /dev/sdb1", "fdisk /dev/sdb1", "mount /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mkfs.ext4 (または mkfs -t ext4) コマンドで対象デバイスをext4形式で初期化します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムを既存のディレクトリツリーにマウントするコマンドはどれか。", "choices": ["mount /dev/sdb1 /mnt", "umount /dev/sdb1", "fdisk /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mount コマンドでストレージデバイスを指定したマウントポイント（ディレクトリ）に結合します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "マウントされているファイルシステムをアンマウント（切り離し）するコマンドはどれか。", "choices": ["umount /mnt", "unmount /mnt", "detach /mnt", "remove /mnt"], "answer": 0, "explain": "umount コマンドでマウントポイントまたはデバイスを指定してアンマウントします（unmountではない点に注意）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "OS起動時に自動的にマウントするファイルシステムの情報を定義する設定ファイルはどれか。", "choices": ["/etc/fstab", "/etc/mtab", "/proc/mounts", "/etc/exports"], "answer": 0, "explain": "/etc/fstab ファイルには、デバイス名/UUID、マウントポイント、ファイルシステムの種類、マウントオプションなどが記述されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムのディスク使用量と空き容量を人間が読みやすい単位（KB, MB, GB）で表示するコマンドはどれか。", "choices": ["df -h", "du -sh", "free -m", "lsblk"], "answer": 0, "explain": "df (disk free) コマンドに -h (--human-readable) オプションを付けると単位が付与されて読みやすくなります。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したディレクトリ全体の使用容量をまとめて表示するコマンドはどれか。", "choices": ["du -sh /var", "df -h /var", "ls -lh /var", "fdisk -l /var"], "answer": 0, "explain": "du (disk usage) コマンドの -s (summary) と -h (human-readable) オプションで該当ディレクトリの合計容量を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムの不整合やエラーをチェック・修復するコマンドはどれか。", "choices": ["fsck", "mkfs", "fdisk", "parted"], "answer": 0, "explain": "fsck (file system check) コマンドでファイルシステムの整合性を確認し修復します（アンマウント状態で実行）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルやディレクトリに対するシンボリックリンク（ソフトリンク）を作成するコマンドはどれか。", "choices": ["ln -s target linkname", "ln target linkname", "cp -s target linkname", "mv target linkname"], "answer": 0, "explain": "ln -s コマンドでシンボリックリンクを作成します。-s を付けないとハードリンクが作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ログファイルやスプールなど、可変（変動する）データが保存されるFHS標準ディレクトリはどれか。", "choices": ["/var", "/etc", "/usr", "/tmp"], "answer": 0, "explain": "/var (variable) ディレクトリにはシステム運用中に内容が変化するログ、メール、データベース等が保持されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムに接続されているディスクのパーティションテーブル一覧を表示するコマンドはどれか。", "choices": ["fdisk -l", "df -h", "du -sh", "mkfs"], "answer": 0, "explain": "fdisk -l コマンドはすべてのディスクのパーティション情報を一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパーティションにext4ファイルシステムを作成（フォーマット）するコマンドはどれか。", "choices": ["mkfs.ext4 /dev/sdb1", "fdisk /dev/sdb1", "mount /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mkfs.ext4 (または mkfs -t ext4) コマンドで対象デバイスをext4形式で初期化します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムを既存のディレクトリツリーにマウントするコマンドはどれか。", "choices": ["mount /dev/sdb1 /mnt", "umount /dev/sdb1", "fdisk /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mount コマンドでストレージデバイスを指定したマウントポイント（ディレクトリ）に結合します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "マウントされているファイルシステムをアンマウント（切り離し）するコマンドはどれか。", "choices": ["umount /mnt", "unmount /mnt", "detach /mnt", "remove /mnt"], "answer": 0, "explain": "umount コマンドでマウントポイントまたはデバイスを指定してアンマウントします（unmountではない点に注意）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "OS起動時に自動的にマウントするファイルシステムの情報を定義する設定ファイルはどれか。", "choices": ["/etc/fstab", "/etc/mtab", "/proc/mounts", "/etc/exports"], "answer": 0, "explain": "/etc/fstab ファイルには、デバイス名/UUID、マウントポイント、ファイルシステムの種類、マウントオプションなどが記述されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムのディスク使用量と空き容量を人間が読みやすい単位（KB, MB, GB）で表示するコマンドはどれか。", "choices": ["df -h", "du -sh", "free -m", "lsblk"], "answer": 0, "explain": "df (disk free) コマンドに -h (--human-readable) オプションを付けると単位が付与されて読みやすくなります。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したディレクトリ全体の使用容量をまとめて表示するコマンドはどれか。", "choices": ["du -sh /var", "df -h /var", "ls -lh /var", "fdisk -l /var"], "answer": 0, "explain": "du (disk usage) コマンドの -s (summary) と -h (human-readable) オプションで該当ディレクトリの合計容量を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムの不整合やエラーをチェック・修復するコマンドはどれか。", "choices": ["fsck", "mkfs", "fdisk", "parted"], "answer": 0, "explain": "fsck (file system check) コマンドでファイルシステムの整合性を確認し修復します（アンマウント状態で実行）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルやディレクトリに対するシンボリックリンク（ソフトリンク）を作成するコマンドはどれか。", "choices": ["ln -s target linkname", "ln target linkname", "cp -s target linkname", "mv target linkname"], "answer": 0, "explain": "ln -s コマンドでシンボリックリンクを作成します。-s を付けないとハードリンクが作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ログファイルやスプールなど、可変（変動する）データが保存されるFHS標準ディレクトリはどれか。", "choices": ["/var", "/etc", "/usr", "/tmp"], "answer": 0, "explain": "/var (variable) ディレクトリにはシステム運用中に内容が変化するログ、メール、データベース等が保持されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムに接続されているディスクのパーティションテーブル一覧を表示するコマンドはどれか。", "choices": ["fdisk -l", "df -h", "du -sh", "mkfs"], "answer": 0, "explain": "fdisk -l コマンドはすべてのディスクのパーティション情報を一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパーティションにext4ファイルシステムを作成（フォーマット）するコマンドはどれか。", "choices": ["mkfs.ext4 /dev/sdb1", "fdisk /dev/sdb1", "mount /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mkfs.ext4 (または mkfs -t ext4) コマンドで対象デバイスをext4形式で初期化します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムを既存のディレクトリツリーにマウントするコマンドはどれか。", "choices": ["mount /dev/sdb1 /mnt", "umount /dev/sdb1", "fdisk /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mount コマンドでストレージデバイスを指定したマウントポイント（ディレクトリ）に結合します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "マウントされているファイルシステムをアンマウント（切り離し）するコマンドはどれか。", "choices": ["umount /mnt", "unmount /mnt", "detach /mnt", "remove /mnt"], "answer": 0, "explain": "umount コマンドでマウントポイントまたはデバイスを指定してアンマウントします（unmountではない点に注意）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "OS起動時に自動的にマウントするファイルシステムの情報を定義する設定ファイルはどれか。", "choices": ["/etc/fstab", "/etc/mtab", "/proc/mounts", "/etc/exports"], "answer": 0, "explain": "/etc/fstab ファイルには、デバイス名/UUID、マウントポイント、ファイルシステムの種類、マウントオプションなどが記述されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムのディスク使用量と空き容量を人間が読みやすい単位（KB, MB, GB）で表示するコマンドはどれか。", "choices": ["df -h", "du -sh", "free -m", "lsblk"], "answer": 0, "explain": "df (disk free) コマンドに -h (--human-readable) オプションを付けると単位が付与されて読みやすくなります。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したディレクトリ全体の使用容量をまとめて表示するコマンドはどれか。", "choices": ["du -sh /var", "df -h /var", "ls -lh /var", "fdisk -l /var"], "answer": 0, "explain": "du (disk usage) コマンドの -s (summary) と -h (human-readable) オプションで該当ディレクトリの合計容量を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムの不整合やエラーをチェック・修復するコマンドはどれか。", "choices": ["fsck", "mkfs", "fdisk", "parted"], "answer": 0, "explain": "fsck (file system check) コマンドでファイルシステムの整合性を確認し修復します（アンマウント状態で実行）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルやディレクトリに対するシンボリックリンク（ソフトリンク）を作成するコマンドはどれか。", "choices": ["ln -s target linkname", "ln target linkname", "cp -s target linkname", "mv target linkname"], "answer": 0, "explain": "ln -s コマンドでシンボリックリンクを作成します。-s を付けないとハードリンクが作成されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ログファイルやスプールなど、可変（変動する）データが保存されるFHS標準ディレクトリはどれか。", "choices": ["/var", "/etc", "/usr", "/tmp"], "answer": 0, "explain": "/var (variable) ディレクトリにはシステム運用中に内容が変化するログ、メール、データベース等が保持されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "システムに接続されているディスクのパーティションテーブル一覧を表示するコマンドはどれか。", "choices": ["fdisk -l", "df -h", "du -sh", "mkfs"], "answer": 0, "explain": "fdisk -l コマンドはすべてのディスクのパーティション情報を一覧表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したパーティションにext4ファイルシステムを作成（フォーマット）するコマンドはどれか。", "choices": ["mkfs.ext4 /dev/sdb1", "fdisk /dev/sdb1", "mount /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mkfs.ext4 (または mkfs -t ext4) コマンドで対象デバイスをext4形式で初期化します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムを既存のディレクトリツリーにマウントするコマンドはどれか。", "choices": ["mount /dev/sdb1 /mnt", "umount /dev/sdb1", "fdisk /dev/sdb1", "fsck /dev/sdb1"], "answer": 0, "explain": "mount コマンドでストレージデバイスを指定したマウントポイント（ディレクトリ）に結合します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "マウントされているファイルシステムをアンマウント（切り離し）するコマンドはどれか。", "choices": ["umount /mnt", "unmount /mnt", "detach /mnt", "remove /mnt"], "answer": 0, "explain": "umount コマンドでマウントポイントまたはデバイスを指定してアンマウントします（unmountではない点に注意）。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "OS起動時に自動的にマウントするファイルシステムの情報を定義する設定ファイルはどれか。", "choices": ["/etc/fstab", "/etc/mtab", "/proc/mounts", "/etc/exports"], "answer": 0, "explain": "/etc/fstab ファイルには、デバイス名/UUID、マウントポイント、ファイルシステムの種類、マウントオプションなどが記述されます。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムのディスク使用量と空き容量を人間が読みやすい単位（KB, MB, GB）で表示するコマンドはどれか。", "choices": ["df -h", "du -sh", "free -m", "lsblk"], "answer": 0, "explain": "df (disk free) コマンドに -h (--human-readable) オプションを付けると単位が付与されて読みやすくなります。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "指定したディレクトリ全体の使用容量をまとめて表示するコマンドはどれか。", "choices": ["du -sh /var", "df -h /var", "ls -lh /var", "fdisk -l /var"], "answer": 0, "explain": "du (disk usage) コマンドの -s (summary) と -h (human-readable) オプションで該当ディレクトリの合計容量を表示します。"},
{"category": "追加模擬試験(lpic-study.com/touch-q)", "question": "ファイルシステムの不整合やエラーをチェック・修復するコマンドはどれか。", "choices": ["fsck", "mkfs", "fdisk", "parted"], "answer": 0, "explain": "fsck (file system check) コマンドでファイルシステムの整合性を確認し修復します（アンマウント状態で実行）。"},
];
/* 出典タグ: 出題カードの背景色分けに使う(LPIC_101_Mock_Exam_718Q.txt由来 = 薄いブルー) */
MOCK_EXAM_QUESTIONS.forEach(q => { q.origin = "mock"; });
APPLIED_QUESTIONS.push(...MOCK_EXAM_QUESTIONS);
