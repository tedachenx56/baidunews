var settings = {};
settings.db = {
	// 一定要注意 小心有炸
	host: 'localhost',
	port: 8888,
	user: 'root',
	password: '',
	database: '2017-07-02'
}
//host: 连接数据库所在的主机名. (默认: localhost)
//	The hostname of the database you are connecting to. (Default: localhost)
//port: 连接端口. (默认: 3306)
//	The port number to connect to. (Default: 3306)
//localAddress: 用于TCP连接的IP地址. (可选)
//	The source IP address to use for TCP connection. (Optional)
//socketPath: 链接到unix域的路径。在使用host和port时该参数会被忽略.
//	The path to a unix domain socket to connect to. When used host and port are ignored.
//user: MySQL用户的用户名.
//	The MySQL user to authenticate as.
//password: MySQL用户的密码.
//	The password of that MySQL user.
//database: 链接到的数据库名称 (可选).
//	Name of the database to use for this connection (Optional).
//charset: 连接的字符集. (默认: 'UTF8_GENERAL_CI'.设置该值要使用大写!)
//	The charset for the connection. This is called "collation" in the SQL-level of MySQL (like utf8_general_ci). If a SQL-level charset is specified (like utf8mb4) then the default collation for that charset is used. (Default: 'UTF8_GENERAL_CI')
//timezone: 储存本地时间的时区. (默认: 'local')
//	The timezone used to store local dates. (Default: 'local')
//stringifyObjects: 是否序列化对象. See issue #501. (默认: 'false')
//	jects instead of converting Stringify obto values. See issue #501. (Default: false)
//insecureAuth: 是否允许旧的身份验证方法连接到数据库实例. (默认: false)
//	Allow connecting to MySQL instances that ask for the old (insecure) authentication method. (Default: false)
//typeCast: 确定是否讲column值转换为本地JavaScript类型列值. (默认: true)
//	Determines if column values should be converted to native JavaScript types. (Default: true)
//queryFormat: 自定义的查询语句格式化函数.
//	 A custom query format function. See Custom format.
//supportBigNumbers: 数据库处理大数字(长整型和含小数),时应该启用 (默认: false).
//	When dealing with big numbers (BIGINT and DECIMAL columns) in the database, you should enable this option (Default: false).
//bigNumberStrings: 启用 supportBigNumbers和bigNumberStrings 并强制这些数字以字符串的方式返回(默认: false).
//	Enabling both supportBigNumbers and bigNumberStrings forces big numbers (BIGINT and DECIMAL columns) to be always returned as JavaScript String objects (Default: false). Enabling supportBigNumbers but leaving bigNumberStrings disabled will return big numbers as String objects only when they cannot be accurately represented with [JavaScript Number objects] (http://ecma262-5.com/ELS5_HTML.htm#Section_8.5) (which happens when they exceed the [-2^53, +2^53] range), otherwise they will be returned as Number objects. This option is ignored if supportBigNumbers is disabled.
//dateStrings: 强制日期类型(TIMESTAMP, DATETIME, DATE)以字符串返回，而不是一javascript Date对象返回. (
//	Force date types (TIMESTAMP, DATETIME, DATE) to be returned as strings rather then inflated into JavaScript Date objects. Can be true/false or an array of type names to keep as strings. (Default: false)
//debug: 是否开启调试. (默认: false)
//	Prints protocol details to stdout. Can be true/false or an array of packet type names that should be printed. (Default: false)
//multipleStatements: 是否允许在一个query中传递多个查询语句. (Default: false)
//	Allow multiple mysql statements per query. Be careful with this, it could increase the scope of SQL injection attacks. (Default: false)
//flags: 链接标志.
//	List of connection flags to use other than the default ones. It is also possible to blacklist default ones. For more information, check Connection Flags.
//connectTimeout: The milliseconds before a timeout occurs during the initial connection to the MySQL server. (Default: 10000)
//trace: Generates stack traces on Error to include call site of library entrance ("long stack traces"). Slight performance penalty for most calls. (Default: true)
//ssl: object with ssl parameters or a string containing name of ssl profile. See SSL options.

module.exports = settings;